"use server";
import { Post } from "../../lib/model";
import { connectToDb } from "../../lib/connectToDb";
import { PostType } from "@/app/types";


// Get all posts
export const getPosts = async () => {
  try {
    await connectToDb();
    const posts = await Post.find();
    return JSON.parse(JSON.stringify(posts));
  } catch (err) {
    console.error("Error fetching posts:", err);
    throw new Error("Failed to fetch posts!");
  }
};

// Get a single post by slug
export const getPost = async (slug: string) => {
  try {
    await connectToDb();
    const data = await Post.findOne({ slug });
   const post = JSON.parse(JSON.stringify(data));
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
    const slug = data.title
      .split(' ')
      .join('-')
      .toLowerCase()
      .replace(/[^a-zA-Z0-9-]/g, '');
      const newPost = new Post({
        userId: data.userId,  
        desc: data.desc,
        title: data.title,
        img: data?.img,
        category: data.category,
        slug,  
      });
    await newPost.save();
      return {
      status: "success",
      data : JSON.parse(JSON.stringify(newPost))
    };
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
    return {
      status: "success",
      data : JSON.parse(JSON.stringify(updatedPost))
    };
  } catch (err) {
    console.error("Error updating post:", err);
    throw new Error("Failed to update post!");
  }
};

// Delete a post by slug
export const deletePost = async (_id: string) => {
  try {
    await connectToDb();
    const deletedPost = await Post.findOneAndDelete({ _id });
    return JSON.parse(JSON.stringify(deletedPost));
  } catch (err) {
    console.error("Error deleting post:", err);
    throw new Error("Failed to delete post!");
  }
};

// Get the 4 most recent posts
export const getRecentPosts = async () => {
  try {
    await connectToDb();
    const posts = await Post.find().sort({ createdAt: -1 }).limit(4);
    return posts;
  } catch (err) {
    console.error("Error fetching recent posts:", err);
    throw new Error("Failed to fetch recent posts!");
  }
};

// Get the 4 oldest posts (popular posts)
export const getPopularPosts = async () => {
  try {
    await connectToDb();
    const posts = await Post.find().sort({ createdAt: 1 }).limit(6);
    return posts;
  } catch (err) {
    console.error("Error fetching popular posts:", err);
    throw new Error("Failed to fetch popular posts!");
  }
};


