import { NextResponse } from "next/server";
import { createUser } from "@/lib/user";

import bcrypt from "bcryptjs";
import { connectToDb } from "@/lib/connectToDb";

export const POST = async (request) => {
	const { name, email, password } = await request.json();

	// Create a DB Conenction
	await connectToDb();
	// Encrypt the password
	const hashedPassword = await bcrypt.hash(password, 5);
	// Form a DB payload
	const newUser = {
		name,
		password: hashedPassword,
		email,
	};
	// Update the DB
	try {
		await createUser(newUser);
	} catch (err) {
		return new NextResponse(err.mesage, {
			status: 500,
		});
	}

	return new NextResponse("User has been created", {
		status: 201,
	});
};
