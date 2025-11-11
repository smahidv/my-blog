"use client";
import Image from "next/image";
import Group from "@/public/Group.png";
import menu from "@/public/Menu.png";
import Link from "next/link";
import SearchBar from "./SearchBar";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import Logout from "./Logout";

export const Navigation = () => {
	const [open, setOpen] = useState(false);
	const [showTab, setShowTab] = useState(false);
	const currentPath = usePathname();
	const profileRef = useRef<HTMLDivElement>(null); 
	const menuRef = useRef<HTMLDivElement>(null);
	const { data: session } = useSession();
	const toggleMenu = () => {
		setOpen(!open);
	};
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				profileRef.current && !profileRef.current.contains(event.target as Node)
			) {
				setShowTab(false);
			}
			if (
				menuRef.current && !menuRef.current.contains(event.target as Node)
			) {
				setOpen(false);
			}
		};
	
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);
	
	return (
		<header className="bg-white relative z-50 max-w-[1234px] mx-auto py-4 px-6 lg:px-[34px] desktop:px-0 flex justify-between items-center  ">
			<div className="flex items-center gap-[11px] desktop:gap-[15px] ">
				<Image src={Group} className="w-[32px] desktop:w-[44px]" alt="logo" />
				<div className="font-raleway font-extrabold text-2xl desktop:text-[33.7px]">
					Zariim
				</div>
			</div>
			<div className="flex items-center gap-2">
				<div ref={profileRef}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth=".8"
						stroke="currentColor"
						className="lg:size-6 size-10 cursor-pointer"
						onClick={() => setShowTab(!showTab)}
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
						/>
					</svg>
					<div
						className={`bg-white  z-50 absolute  w-screen right-0 lg:w-[300px] lg:max-w-[300px]  lg:translate-x-1/2 lg:top-16 ${
							showTab
								? "shadow-md transition-transform origin-top duration-300 scale-y-100"
								: "scale-y-0 transition-transform origin-top"
						}`}
					>
						{session?.user && (
							<>
								<div className="border-b py-4 px-6 text-lg">
									<div className="capitalize">{session?.user?.name}</div>
									<div className="font-bold ">{session?.user?.email}</div>
								</div>
								<div className="border-b py-4 px-6 ">
									<Link
										className="text-lg "
										onClick={() => setShowTab(!showTab)}
										href="/dashboard?tab=dash"
									>
										Dashboard
									</Link>
								</div>
							</>
						)}
						<div className="py-4 px-6 hover:bg-gray-50">
							{!session ? (
								<Link href="/login" onClick={() => setShowTab(!showTab)}>
									Sign in
								</Link>
							) : (
								<Logout />
							)}
						</div>
					</div>
				</div>
				<div className="lg:-order-1" ref={menuRef}>
					<Image
						src={menu}
						onClick={toggleMenu}
						className="w-[34px] cursor-pointer lg:hidden"
						alt="logo"
					/>
					<nav
					
						className={`bg-white left-0 z-50 absolute lg:static w-screen py-6 right-0 lg:shadow-none lg:p-0 lg:w-fit lg:block lg:scale-y-100 ${
							open
								? "shadow-md transition-transform origin-top duration-300 scale-y-100"
								: "scale-y-0 transition-transform origin-top"
						}`}
					>
						<ul className="lg:flex lg:items-center lg:gap-y-0 lg:gap-x-5  relative ">
							<li className="hover:bg-gray-50 px-6 py-4 lg:p-0 lg:hover:bg-transparent">
								<Link
									onClick={toggleMenu}
									href="/"
									style={{ color: currentPath === "/" ? "#7C4EE4" : "" }}
									className="font-raleway lg:font-medium text-lg lg:text-[11.49px] desktop:text-base text-gray333"
								>
									Home
								</Link>
							</li>
							<li className="hover:bg-gray-50 px-6 py-4 lg:p-0 lg:hover:bg-transparent">
								<Link
									href="/blog"
									onClick={toggleMenu}
									style={{ color: currentPath === "/blog" ? "#7C4EE4" : "" }}
									className="font-raleway font-medium text-lg lg:text-[11.49px] desktop:text-base text-gray333"
								>
									Blog
								</Link>
							</li>
							<li className="hover:bg-gray-50 px-6 py-4 lg:p-0 lg:hover:bg-transparent">
								<Link
									href="/about"
									onClick={toggleMenu}
									style={{ color: currentPath === "/about" ? "#7C4EE4" : "" }}
									className="font-raleway font-medium text-lg lg:text-[11.49px] desktop:text-base text-gray333"
								>
									About
								</Link>
							</li>
							<li className="hover:bg-gray-50 px-6 py-4 lg:p-0 lg:hover:bg-transparent">
								<Link
									href="/contact"
									onClick={toggleMenu}
									className="font-raleway font-medium text-lg lg:text-[11.49px] desktop:text-base text-gray333"
								>
									Contact Us
								</Link>
							</li>
							<SearchBar />
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
};
