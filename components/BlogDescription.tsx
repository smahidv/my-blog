import Link from "next/link";
import React from "react";

export default function BlogDescription() {
	return (
		<div>
			<div className="flex font-roboto text-[8.62px]  desktop:text-xs mb-[18px] gap-[5.74px] desktop:gap-2.5">
				<div className="font-bold">DEVELOPMENT</div>
				<div className="font-medium text-gray999">16 March 2023</div>
			</div>
			<div className="font-raleway font-bold text-[22.98px] leading-[24.3px] desktop:text-[32px] desktop:leading-[45px] mb-[27px]">
				How to make a Game look more attractive with New VR & AI Technology
			</div>
			<div className="font-roboto text-gray666 text-[11.49px] desktop:text-base  mb-[21px]">
				Google has been investing in AI for many years and bringing its benefits
				to individuals, businesses and communities. Whether it’s publishing
				state-of-the-art research, building helpful products or developing tools
				and resources that enable others, we’re committed to making AI
				accessible to everyone.
			</div>
			<Link
				href="/blog"
				className="text-purple  font-roboto block w-fit border-purple border py-[6.68px] px-[20.83px] desktop:px-[28px] desktop:py-[9.5px] rounded-[5.74px]  text-[10px] desktop:text-sm font-bold"
			>
				Read more
			</Link>
		</div>
	);
}
