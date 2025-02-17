import Link from "next/link";
import React from "react";
import Logout from "./Logout";

export default function AdminAsideNav() {
	return (
		<aside className="w-[300px] bg-red-400 relative">
			<nav>
				<ul>
					<li>
						<Link href='/dashboard?tab=dash'>dashboard</Link>
					</li>
                    <li>
						<Link href='/dashboard?tab=posts'>posts</Link>
					</li>
					<Logout />
				</ul>
			</nav>
		</aside>
	);
}
