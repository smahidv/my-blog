"use client";

import { Alert, Button, FileInput, TextInput } from "flowbite-react";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });
import "react-quill-new/dist/quill.snow.css";
import { useSession } from "next-auth/react";
import { getPost, updatePost } from "@/app/actions/post";
import { PostType } from "@/app/types";
import { useParams } from "next/navigation";

// import { CircularProgressbar } from "react-circular-progressbar";
// import "react-circular-progressbar/dist/styles.css";

export default function UpdatePostPage() {
	const { data: session, status } = useSession();
	const router = useRouter();
	const [desc, setDesc] = useState<string>("");
	const [file, setFile] = useState<string>(""); // Store image URL, not File
	const [imageFile, setImageFile] = useState<File | null>(null); // Actual file state
	const [imageUploadProgress, setImageUploadProgress] = useState<number>(0);
	const [imageUploadError, setImageUploadError] = useState<string | null>(null);
	const [postData, setPostData] = useState<PostType>();
	const params = useParams();
	const postId = params?.id as string;
	useEffect(() => {
		const fetchPost = async () => {
			const data = await getPost(postId);
			setPostData(data);
			setFile(data?.img);
		};
		if (session?.user) {
			fetchPost();
		}
	}, [postId, session?.user]);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			if (!session || !session.user) {
				console.log("User not authenticated");
				return;
			}

			const formData = new FormData(e.currentTarget);
			const Newpost: PostType = {
				title: formData.get("title") as string,
				category: formData.get("category") as string,
				desc: desc,
				img: file , // Store uploaded image URL
				userId: session.user.id as string,
				slug: postId,
			};
			const res = await updatePost(postId, Newpost);

			if (res.status === "success") {
				router.push(`/blog/${postId}`);
			}
		} catch (error) {
			console.log(error);
		}
	};

	const handleImageUpload = async () => {
		if (!imageFile) {
			setImageUploadError("Please select an image first.");
			return;
		}

		const formData = new FormData();
		formData.append("file", imageFile);

		setImageUploadProgress(10); // Start progress

		try {
			const res = await fetch("/api/upload", {
				method: "POST",
				body: formData,
			});

			const data = await res.json();
			if (data.success) {
				setFile(data.data.secure_url); // Save uploaded image URL
				setImageUploadProgress(100); // Upload complete
			} else {
				setImageUploadError(data.error);
			}
		} catch (error) {
			setImageUploadError(String(error));
		} finally {
			setTimeout(() => setImageUploadProgress(0), 2000); // Reset after showing progress
		}
	};

	return (
		<div>
			{status === "loading" && <p>Loading...</p>}
			{status === "authenticated" && postData && (
				<div className="p-3 max-w-3xl mx-auto min-h-screen">
					<h1 className="text-center text-3xl my-7 font-semibold">
						Update post
					</h1>
					<form onSubmit={handleSubmit} className="flex flex-col gap-4">
						<div className="flex flex-col gap-4 sm:flex-row justify-between">
							<TextInput
								type="text"
								placeholder="Title"
								required
								id="title"
								className="flex-1"
								name="title"
								defaultValue={postData?.title}
							/>
							<TextInput
								type="text"
								placeholder="category"
								required
								id="category"
								className="flex-1"
								name="category"
								defaultValue={postData?.category}
							/>
						</div>

						<div className="flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3">
							<FileInput
								accept="image/*"
								onChange={(e) => setImageFile(e.target.files?.[0] || null)}
							/>
							<Button
								type="button"
								gradientDuoTone="purpleToBlue"
								size="sm"
								outline
								onClick={handleImageUpload}
								disabled={imageUploadProgress > 0}
							>
								{imageUploadProgress > 0 ? (
									<div className="w-16 h-16">
										{/* <CircularProgressbar defaultValue={imageUploadProgress} text={`${imageUploadProgress}%`} /> */}
										<p className="text-center">{imageUploadProgress}%</p>
									</div>
								) : (
									"Upload Image"
								)}
							</Button>
						</div>

						{imageUploadError && (
							<Alert color="failure">{imageUploadError}</Alert>
						)}

						{file && (
							<img
								src={file}
								alt="Uploaded"
								className="w-full h-72 object-cover"
							/>
						)}

						<ReactQuill
							theme="snow"
							placeholder="Write something..."
							className="h-72 mb-12"
							defaultValue={postData?.desc}
							onChange={setDesc}
						/>
						<Button
							type="submit"
							gradientDuoTone="purpleToPink"
							className="text-black"
						>
							Update
						</Button>
					</form>
				</div>
			)}
			{status === "unauthenticated" && (
				<h1 className="text-center text-3xl my-7 font-semibold">
					You are not authorized to view this page
				</h1>
			)}
		</div>
	);
}
