import { doLogout } from "@/app/actions/auth";
import Image from "next/image";
import logoutIcon from "@/public/logoutIcon.png";
const Logout = () => {
	return (
		<form action={doLogout}>
			<button type="submit" className="flex gap-2">
				<Image src={logoutIcon} alt="logout Icon" className="object-contain w-4" />
				<span className="font-raleway font-medium capitalize text-lg">
					Logout
				</span>
			</button>
		</form>
	);
};

export default Logout;
