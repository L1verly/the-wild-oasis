import supabase, { supabaseUrl } from "./supabase";

async function signup({ fullName, email, password }) {
  let { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        avatar: "",
      },
    },
  });
  if (error) throw new Error(error.message);

  return data;
}

async function logout() {
  let { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}

async function login({ email, password }) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw new Error(error.message);
  return data;
}

async function getCurrentUser() {
  const { data: session, error: sessionError } =
    await supabase.auth.getSession();
  if (sessionError) throw new Error(sessionError.message);
  if (!session.session) return null;

  const { data: user, error: userError } = await supabase.auth.getUser();

  if (userError) throw new Error(userError.message);

  return user?.user;
}

export async function updateCurrentUser({ password, fullName, avatar }) {
  // 1. Update password or fullName
  let updateData;
  if (password) updateData = { password };
  if (fullName) updateData = { data: { fullName } };

  const { data, error } = await supabase.auth.updateUser(updateData);
  if (error) throw new Error(error.message);
  if (!avatar) return data;

  // 2. Upload the avatar
  const fileName = `avatar-${data.user.id}-${Math.random()}`;

  const { error: storageError } = await supabase.storage
    .from("avatars")
    .upload(fileName, avatar);

  if (storageError) throw new Error(storageError.message);

  // 3. Update avatar in the user
  const { data: updatedUser, error: error2 } = await supabase.auth.updateUser({
    data: {
      avatar: `${supabaseUrl}/storage/v1/object/public/avatars/${fileName}`,
    },
  });
  if (error2) throw new Error(error2.message);

  return updatedUser;
}

// async function resendConfirmEmail() {
//   const { error } = await supabase.auth.resend({
//     type: "signup",
//     email: "email@example.com",
//     options: {
//       emailRedirectTo: "https://example.com/welcome",
//     },
//   });
// }

export { signup, login, logout, getCurrentUser };
