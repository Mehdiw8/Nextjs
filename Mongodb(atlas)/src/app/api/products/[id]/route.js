import connectMongoDB from "@/src/libs/mongodb";
import Product from "@/src/models/Product";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  console.log("PUT Method");
  const id = params.id;
  const { newTitle: title, newDescription: description } = await request.json();
  await connectMongoDB();
  await Product.findByIdAndUpdate(id, { title, description });

  return NextResponse.json({ message: "Topic updated" }, { status: 200 });
}

// GET BY Id
export async function GET(request,{ params }) {
  console.log("GET BY Id");
  await connectMongoDB();
  const product = await Product.findById(params.id);

  return NextResponse.json(product);
}
