import { redirect } from "next/navigation";
const fullName = "mehdi";
export async function GET() {
  redirect(`http://localhost:3000/api/hello/${fullName}`);
}
