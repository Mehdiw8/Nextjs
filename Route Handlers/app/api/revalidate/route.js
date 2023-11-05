export async function GET() {
  const data = await fetch("https://jsonplaceholder.ir/users", {
    next: { revalidate: 60 },
  });
  const result = await data.json();

  return Response.json(result);
}
