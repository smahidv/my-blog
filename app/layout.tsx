import type { Metadata } from "next";
import { Roboto, Raleway } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import SessionWrapper from "@/components/SessionWrapper";
import AdminAsideNav from "@/components/AdminAsideNav";

const roboto = Roboto({
	variable: "--font-roboto",
	subsets: ["latin"],
	weight: ["400", "700"],
});

const raleway = Raleway({
	variable: "--font-raleway",
	subsets: ["latin"],
	weight: ["400", "700", "800"],
});

export const metadata: Metadata = {
	title: {
		default: "Next.js 15 Homepage",
		template: "%s | Next.js 14",
	},
	description: "Next.js starter app description",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<SessionWrapper>
			<html lang="en">
				<body
					className={`${raleway.variable} ${roboto.variable} antialiased `}
				>
					<Navigation />
					{/* <div className="flex"> */}
						{/* <AdminAsideNav /> */}
						{children}
					{/* </div> */}
					{/* <Footer /> */}
				</body>
			</html>
		</SessionWrapper>
	);
}
