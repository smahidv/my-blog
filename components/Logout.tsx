import { doLogout } from "@/app/actions/auth";

const Logout = () => {
	return (
		<form action={doLogout}>
			<button
				type="submit"
			>
				Logout
			</button>
		</form>
	);
};

export default Logout;
