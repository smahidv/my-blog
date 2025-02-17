"use client";
import { redirect } from "next/navigation";
import Posts from "@/components/Posts";
import DashProfile from "@/components/DashProfile";
import { useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import AdminAsideNav from "@/components/AdminAsideNav";

const HomePage = () => {
	const searchParams = useSearchParams();
	const [tab, setTab] = useState("");
	const { status } = useSession();

	// Redirect if unauthenticated
	if (status === "unauthenticated") {
		redirect("/login");
		return null;
	}

	useEffect(() => {
		const urlParams = new URLSearchParams(searchParams);
		const tabFromUrl = urlParams.get("tab");
		if (tabFromUrl) {
			setTab(tabFromUrl);
		}
	}, [searchParams]);

	return (
		<div>
			{status === "loading" && <p>Loading...</p>}
			{status === "authenticated" && (
				<div>

				<div className="flex">
					<AdminAsideNav />
					<div>
						{tab === "dash" && <DashProfile />}
						{tab === "posts" && <Posts />}
					</div>
				</div>
				</div>
			)}
		</div>
	);
};

export default HomePage;
