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
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    "",
  );
  const imagePath = `${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/cabin-images/${imageName}`;

  // Create cabin
  const { data, error } = await supabase
    .from("cabins")
    .insert({ ...newCabin, image: imagePath });

  if (error) {
    console.error(error);
    throw new Error("There was a problem creating the cabin");
  }
  // Upload image
  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.error(storageError);
    throw new Error(
      "There was a problem uploading the cabin image, no cabin created",
    );
  }
}
