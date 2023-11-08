export function GET(request) {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get("toplearn");

    return new Response(`Query Is: ${query}`, { status: 200 });
}
