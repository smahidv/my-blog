import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { User } from "@/lib/model";
import bcrypt from "bcryptjs";
import { connectToDb } from "@/lib/connectToDb";

export const {
	handlers: { GET, POST },
	auth,
	signIn,
	signOut,
} = NextAuth({
	session: {
		strategy: "jwt",
	},
	providers: [
		CredentialsProvider({
			credentials: {
				email: {},
				password: {},
			},
			async authorize(credentials) {
				await connectToDb();
				if (credentials === null) return null;
				try {
					const user = await User.findOne({
						email: credentials?.email,
					});
					if (user) {
						const isMatch = bcrypt.compare(credentials.password, user.password);

						if (isMatch) {
							return {
								id: user._id.toString(),
								name: user.name,
								email: user.email,
							};
						} else {
							throw new Error("Email or Password is not correct");
						}
					} else {
						throw new Error("User not found");
					}
				} catch (error) {
					throw new Error(error || "Something went wrong");
				}
			},
		}),
		// GoogleProvider({
		//     clientId: process.env.GOOGLE_CLIENT_ID,
		//     clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		//     authorization: {
		//         params: {
		//             prompt: "consent",
		//             access_type: "offline",
		//             response_type: "code",
		//         },
		//     },
		// }),
		// GitHubProvider({
		//     clientId: process.env.GITHUB_CLIENT_ID,
		//     clientSecret: process.env.GITHUB_CLIENT_SECRET,
		//     authorization: {
		//         params: {
		//             prompt: "consent",
		//             access_type: "offline",
		//             response_type: "code",
		//         },
		//     },
		// }),
	],
	callbacks: {
		// Ensure that the user ID is included in the JWT token
		async jwt({ token, user }) {
			if (user) {
				token.id = user.id; // Save user ID to token
			}
			return token;
		},
		async session({ session, token }) {
			if (token?.id) {
				session.user.id = token.id; // Pass the ID to session
			}
			return session;
		},
	},
});
