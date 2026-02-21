import supabase from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select();
  if (error) {
    console.error(error);
    throw new Error("There was a problem loading cabins");
  }
  return data;
}
