import connectMongoDB from "@/src/libs/mongodb";
import User from "@/src/models/user";
import { NextResponse } from "next/server";

await connectMongoDB();

export async function GET() {
  const users = await User.find();
  return NextResponse.json( users );
}

export async function POST(request) {
  const newUser = await request.json();
  await User.create(newUser);
  return new NextResponse({ message: "User created" }, { status: 200 });
}
