import { redirect } from "next/navigation";

const fullname = "Younes Ghorbany";

export async function GET() {
    redirect(`http://localhost:3000/api/username/${fullname}`);
}
