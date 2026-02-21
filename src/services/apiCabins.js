import supabase from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select();
  if (error) {
    console.error(error);
    throw new Error("There was a problem loading cabins");
  }
  return data;
}

export async function deleteCabin(id) {
  const { error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    console.error(error);
    throw new Error("There was a problem deleting the cabin");
  }
}

export async function createCabin(newCabin) {
  const { error } = await supabase.from("cabins").insert(newCabin);
  if (error) {
    console.error(error);
    throw new Error("There was a problem creating the cabin");
  }
}
