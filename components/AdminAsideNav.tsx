import Link from "next/link";
import React from "react";
import Logout from "./Logout";
import Image from "next/image";
import chartIcon from "@/public/chart.png";
import postIcon from "@/public/postIcon.png";


export default function AdminAsideNav() {
	return (
		<aside className="w-[200px]  pt-10 pl-6">
			<nav>
				<ul className="space-y-6">
					<li className="flex gap-2">
						<Image src={chartIcon} alt="chart icon" className="object-contain w-4" />
						<Link 
						className="font-raleway font-medium capitalize text-lg"
						href="/dashboard?tab=dash">dashboard</Link>
					</li>
					<li className="flex gap-2">
						<Image src={postIcon} alt="post icon" className="object-contain w-4" />
						<Link 
						className="font-raleway font-medium capitalize text-lg"
						href="/dashboard?tab=posts">posts</Link>
					</li>
					<Logout />
				</ul>
			</nav>
		</aside>
	);
}
