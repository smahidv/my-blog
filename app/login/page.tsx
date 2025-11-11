"use client";
import { doCredentialLogin } from "@/app/actions/auth";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { getSession } from "next-auth/react";

const LoginForm = () => {
	const router = useRouter();
	const [error, setError] = useState("");


	async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		try {
			const formData = new FormData(event.currentTarget);
			const response = await doCredentialLogin(formData);
			if (response.error) {
				setError(response.error.message);
			} else {
				await getSession(); 
				router.push("/dashboard?tab=dash");
			}
		} catch (e) {
			console.error(e);
			setError("Check your Credentials");
		}
	}


	return (
		<div className="flex justify-center items-center flex-col my-20">
			<div className="text-xl text-red-500">{error}</div>
			<form
				className="my-5  bg-white pt-8 pb-16 px-16 border  border-gray-200 rounded-md"
				onSubmit={onSubmit}
			>
				<h2
        className="font-raleway text-center capitalize  text-[17.23px] lg:text-[24px] leading-[24.3px] desktop:text-[32px] desktop:leading-[45px] mb-[12px] lg:mb-[27px]">
				login to your account</h2>
				<div className="my-6 ">
					<input
						className="border w-full border-gray-500 rounded-sm px-4 py-1 focus:border-black "
						placeholder="Username or email"
						type="email"
						name="email"
						id="email"
						autoComplete="email"
						required 
					/>
				</div>

				<div className="my-6">
					<input
						className="border w-full  border-gray-500 rounded-sm px-4 py-1  focus:border-black "
						placeholder="Password"
						type="password"
						name="password"
						id="password"
						autoComplete="current-password"
						required 
					/>
				</div>

				<button
					type="submit"
					className=" w-full text-white font-bold font-roboto text-[10.05px] desktop:text-sm
								capitalize bg-purple px-4 py-2  hover:bg-purple/95 rounded-[5.74px] "
				>
					Login
				</button>
			</form>
		</div>
	);
};

export default LoginForm;
