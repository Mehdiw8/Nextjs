import fs from "fs";
import path from "path";
export async function GET() {
  // path
  const filePath = path.join(process.cwd(), "src/data", "products.json");
  // read
  const readData = fs.readFileSync(filePath);

  return new Response(readData);
}
