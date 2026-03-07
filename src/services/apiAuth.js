import supabase from "./supabase";

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
