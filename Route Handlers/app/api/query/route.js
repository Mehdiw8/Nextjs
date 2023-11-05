// bakhshe URL Query Parameters

export function GET(request) {
  const searchParams = request.nextUrl.searchParams;
  // console.log(searchParams)
  const query = searchParams.get("mehdi");
  // console.log(query);
  return new Response(`Query is : ${query}`, { status: 200 });
}
// http://localhost:3000/api/query?mehdi=22