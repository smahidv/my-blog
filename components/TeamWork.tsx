"use client";
import React, { useState } from "react";

interface TeamItemProps {
	title: string;
	description: string;
	number: string;
}
export const TeamWork = ({ title, description, number }: TeamItemProps) => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div
			className="p-4  rounded-lg  cursor-pointer"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			style={{
				backgroundColor: isHovered ? "#7C4EE4" : "transparent",
			}}
		>
			<div
				className=" font-raleway font-bold text-[51.43px]  my-[27px] lg:max-w-[500px] mx-auto"
				style={{
					color: isHovered ? "white" : "#666666",
				}}
			>
				{number}
			</div>
			<div
				className="text-white font-raleway font-bold text-[17.14px] desktop:text-2xl"
				style={{
					color: isHovered ? "white" : "#7C4EE4",
				}}
			>
				{title}
			</div>
			<div
				className="font-roboto text-[11.43px] desktop:text-base mb-[21px]"
				style={{
					color: isHovered ? "white" : "#666666",
				}}
			>
				{description}
			</div>

			{isHovered && (
				<button className="mt-2 font-bold text-white font-roboto text-[10px] border-b-white border-b-[2.86px]">
					Learn More
				</button>
			)}
		</div>
	);
};
