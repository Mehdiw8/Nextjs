export async function GET() {
  const data = await fetch("https://jsonplaceholder.ir/users", {
    method: "GET",
    headers: {
      "content-Type": "application/json",
    },
  });
  const res = await data.json();
  
  return Response.json(res);
}
