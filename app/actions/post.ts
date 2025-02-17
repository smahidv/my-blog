"use server";
import { Post } from "../../lib/model";
import { connectToDb } from "../../lib/connectToDb";
import { PostType } from "@/app/types";


// Get all posts
export const getPosts = async () => {
  try {
    await connectToDb();
    const posts = await Post.find();
    return posts;
  } catch (err) {
    console.error("Error fetching posts:", err);
    throw new Error("Failed to fetch posts!");
  }
};

// Get a single post by slug
export const getPost = async (slug: string) => {
  try {
    await connectToDb();
    const post = await Post.findOne({ slug });
    return post;
  } catch (err) {
    console.error("Error fetching post:", err);
    throw new Error("Failed to fetch post!");
  }
};

// Create a new post
export const createPost = async (data: PostType) => {
  try {
    await connectToDb();
    console.log("data:",data)
    const newPost = new Post(data);
    await newPost.save();
    return newPost;
  } catch (err) {
    console.error("Error creating post:", err);
    throw new Error("Failed to create post!");
  }
};

// Update an existing post by slug
export const updatePost = async (slug: string, updatedData: Partial<PostType>) => {
  try {
    await connectToDb();
    const updatedPost = await Post.findOneAndUpdate({ slug }, updatedData, { new: true });
    return updatedPost;
  } catch (err) {
    console.error("Error updating post:", err);
    throw new Error("Failed to update post!");
  }
};

// Delete a post by slug
export const deletePost = async (slug: string) => {
  try {
    await connectToDb();
    const deletedPost = await Post.findOneAndDelete({ slug });
    return deletedPost;
  } catch (err) {
    console.error("Error deleting post:", err);
    throw new Error("Failed to delete post!");
  }
};
