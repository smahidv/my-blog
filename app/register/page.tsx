"use client"

import { useRouter } from "next/navigation";

export default function page() {

	const router = useRouter();

	async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
	
  
		try {
		  const formData = new FormData(event.currentTarget);
		  
     	  const name = formData.get('name');
		  const email = formData.get('email');
		  const password = formData.get('password');
		
		  

		  const response = await fetch(`/api/register`, {
			method: 'POST',
			headers: {
			  "content-type": "application/json",
			},
			body: JSON.stringify({
			  name,
			  email,
			  password
			})
		  });
  
		  response.status === 201 && router.push('/dashboard?tab=dash');
		  
  
		} catch (e) {
			if (e instanceof Error) {
				console.error(e.message);
			  } else {
				console.error("An unknown error occurred", e);
			  }
		}
	  }
	


	return (

		<form  onSubmit={handleSubmit}>
			<label>
				Name
				<input name="name" type="text" className="border" />
			</label>
			<label>
				Email
				<input name="email" type="email" className="border" />
			</label>
			<label>
				Password
				<input name="password" type="password" className="border" />
			</label>
			<button type="submit" >register</button>
		</form>
	
	);
}
