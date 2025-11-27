import {  User } from "@/lib/model";
import { connectToDb } from "@/lib/connectToDb";
import { unstable_noStore as noStore } from "next/cache";



export const getUser = async (id) => {
  noStore();
  try {
    connectToDb();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
};

export async function createUser(user) {
  try {
    const newUser = await User.create(user);
    return newUser;
  } catch (e) {
    console.error("Error creating user:", e);
    throw new Error(e instanceof Error ? e.message : "Unknown error");
  }
}
