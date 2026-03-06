import supabase from "./supabase";

// async function signup({ email, password }) {
//   let { data, error } = await supabase.auth.signUp({
//     email,
//     password,
//   });
//   if (error) throw new Error(error.message);
//   return data;
// }

async function login({ email, password }) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw new Error(error.message);
  return data;
}

export { login };
