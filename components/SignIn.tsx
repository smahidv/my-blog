"use server"
import { auth } from "@/auth";
import Image from "next/image";
export default async function SignIn() {
	const session = await auth();
	console.log(session);
	if (session?.user ){
		return (
			<>
			<b>user signed in with name : {session.user.name}</b>
			<b>user signed in with name : {session.user.email}</b>
			{session.user.image && <Image src={session.user.image} alt={session.user.name ?? "avatar"} /> }
			</>
		)
	}

}
