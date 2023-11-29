import fs from "fs";
import path from "path";
export async function GET(request, { params }) {
  const { pid } = params;
  // path
  const filePath = path.join(process.cwd(), "src/data", "products.json");
  // read
  const readData = fs.readFileSync(filePath);
  const { main } = JSON.parse(readData);
  const data = main.find((item) => item.id == pid);
  return new Response(JSON.stringify(data));
}
