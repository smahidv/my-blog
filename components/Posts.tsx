"use client";
import { deletePost, getPosts } from "@/app/actions/post";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { PostType } from "@/app/types";

export default function Posts() {
	const { data: session } = useSession();
	const [postData, setPostData] = useState<PostType[]>([]);
	const [openDropdown, setOpenDropdown] = useState<string | null>(null);

	const toggleDropdown = (postId: string) => {
		setOpenDropdown((prev) => (prev === postId ? null : postId));
	  };
	
	  const handleDeletePost = async (postIdToDelete:string) => {	
		  const res = await deletePost(postIdToDelete);
			const newPosts = postData.filter(
			  (post) => post._id !== postIdToDelete
			);
			setPostData(newPosts);
		
		} 

	useEffect(() => {
		const fetchPost = async () => {
			const data = await getPosts();
			setPostData(data);
		};
		if (session?.user) {
			fetchPost();
		}
	}, [session?.user]);
	return (
		<section className="bg-gray-50  dark:bg-gray-900 p-3 sm:p-5">
			<div className="mx-auto max-w-screen-xl px-4 lg:px-12">
				<div className="bg-white  dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
					<Link
						href="/dashboard/post-view"
						className="flex m-6 items-center w-fit ml-auto justify-center text-white font-bold font-roboto text-[10.05px] desktop:text-sm 
								capitalize bg-purple py-3 px-[35px] desktop:px-12 desktop:py-4 rounded-[5.74px] "
					>
						<svg
							className="h-3.5 w-3.5 mr-2"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
							aria-hidden="true"
						>
							<path
								clipRule="evenodd"
								fillRule="evenodd"
								d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
							/>
						</svg>
						add new
					</Link>
					<div className="overflow-x-auto">
						<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
							<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
								<tr>
									<th scope="col" className="px-4 py-3">
										updated date
									</th>
									<th scope="col" className="px-4 py-3">
										post image
									</th>
									<th scope="col" className="px-4 py-3">
										post title
									</th>
									<th scope="col" className="px-4 py-3">
										category
									</th>
									<th scope="col" className="px-4 py-3">
										<span className="sr-only">Actions</span>
									</th>
								</tr>
							</thead>
							<tbody>
								{postData &&
									postData.map((post, index) => (
										<tr key={index} className="border-b dark:border-gray-700">
											{post.updatedAt && (
												<td className="px-4 py-3">
													{new Date(post.updatedAt).toLocaleDateString()}
												</td>
											)}
											<td className="px-4 py-3">
												{post.img && (
													<Image
														src={post.img}
														alt={post.title}
														width={100}
														height={50}
													/>
												)}
											</td>
											<td className="px-4 py-3">{post.title}</td>
											<td className="relative  px-4 py-3 flex items-center justify-end">
												<button
													id="apple-imac-27-dropdown-button"
													data-dropdown-toggle="apple-imac-27-dropdown"
													className="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
													type="button"
													onClick={() => toggleDropdown(post._id!)}
												>
													<svg
														className="w-5 h-5"
														aria-hidden="true"
														fill="currentColor"
														viewBox="0 0 20 20"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
													</svg>
												</button>
												{openDropdown === post._id && (
												<div
													id="apple-imac-27-dropdown"
													className="absolute right-0 bottom-0 translate-y-[88%] z-20  w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
												
												>
													<ul
														className="py-1 text-sm text-gray-700 dark:text-gray-200"
														aria-labelledby="apple-imac-27-dropdown-button"
													>
														<li>
															<Link
																href={`/blog/${post.slug}`}
																className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
															>
																Show
															</Link>
														</li>
														<li>
															<Link
																href={`/dashboard/post-view/${post.slug}`}
																className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
															>
																Edit
															</Link>
														</li>
													</ul>
													<div className="py-1"
													  onClick={()=>handleDeletePost(post._id!)}
													>													 
														<a
															href="#"
															className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
														>
															Delete
														</a>
													</div>
												</div>
												)}
											</td>
										</tr>
									))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</section>
	);
}
