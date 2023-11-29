import fs from "fs";
import path from "path";
import connectMongoDB from "@/src/libs/mongodb";
import Product from "@/src/models/Product";
import { NextResponse } from "next/server";
// const products = [];

// implement POST Method
export async function POST(request) {
  console.log(`POST Method`);

  // console.log("post");
  const produc = await request.json();

  //------------------- using MongoDb atlas ----------------//

  await connectMongoDB();
  await Product.create(produc);

  return NextResponse.json({ message: "product Added" }, { status: 200 });

  // --------save Data in Local---------
  // products.push(newProduct);
  const newProduct = await request.json();

  // create path
  const filePath = path.join(process.cwd(), "src/data", "products.json");

  // read file
  const fileData = fs.readFileSync(filePath);
  const data = JSON.parse(fileData);
  data["main"].push(newProduct);
  // save data to file
  const strData = JSON.stringify(data);

  fs.writeFileSync(filePath, strData);

  //
  return new Response(strData, {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

// implement GET Method
export async function GET() {
  console.log(`GET Method`);

  await connectMongoDB();
  const products = await Product.find();
  return NextResponse.json(products);
}

export async function DELETE(request) {
  console.log(`Delete Method`);
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Product.findByIdAndDelete(id);
  return NextResponse.json({ message: "Product deleted" }, { status: 200 });
}



// const filePath0 = path.join(process.cwd(), "src/data", "products.json");

// const readFile = fs.readFileSync(filePath0);

// const data01 = JSON.parse(readFile);
// data01["main"].push(produc);

// const strData01 = JSON.stringify(data01);

// fs.writeFileSync(filePath0, strData01);
