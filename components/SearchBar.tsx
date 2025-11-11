"use client";
import Image from "next/image";
import Search from "@/public/searchIcon.png";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

export default function SearchBar() {
	const [barState, setOpen] = useState(false);
	const isDesktopOrLaptop = useMediaQuery({
		query: '(min-width: 1024px)'
	  })
	  const toggleBar = () => {
		if (isDesktopOrLaptop) {
		  setOpen(!barState);
		}
	  };
	return (
		<li className={`relative px-6 lg:px-0  ${barState ? "lg:w-[200px] " : "lg:w-[16px] "}`}>
			<input
				type="text"
				placeholder="Search..."
				className={` p-2  lg:text-[11.49px]  shadow-sm rounded-sm lg:rounded-full border-[1.2px]  w-full  ${
					barState
						? "scale-x-100 lg:transition-transform origin-right"
						: "lg:scale-x-0"
				}`}
			/>
			<div onClick={toggleBar} className="cursor-pointer">
				{barState ? (
					<div className=" h-4 w-4 top-1/2  absolute right-4 ">
						<div className="absolute inset-0 h-[1px] w-full bg-gray666 rotate-45 rounded-xl"></div>
						<div className="absolute inset-0 h-[1px] w-full bg-gray666 -rotate-45 rounded-xl"></div>
					</div>
				) : (
					<Image					
						src={Search}
						alt="search icon"
						className="w-4 top-1/2 -translate-y-1/2 absolute right-8 lg:right-0 "
					/>
				)}
				</div>
		</li>
	);
}
