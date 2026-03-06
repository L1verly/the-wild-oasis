import supabase from "./supabase";

// async function signup({ email, password }) {
//   let { data, error } = await supabase.auth.signUp({
//     email,
//     password,
//   });
//   if (error) throw new Error(error.message);
//   return data;
// }

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

export { login, logout, getCurrentUser };
