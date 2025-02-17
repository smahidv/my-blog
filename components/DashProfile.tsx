import { useSession } from "next-auth/react";


export default function DashProfile() {
	const { data: session } = useSession();
	return (
		<div>
			<h1 className="text-3xl my-2">Welcome, {session?.user?.email}</h1>
		</div>
	);
}
