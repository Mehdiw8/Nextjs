export async function GET() {
    const res = await fetch("https://jsonplaceholder.ir/posts", {
        next: { revalidate: 20 },
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    const data = await res.json();

    console.log(data);

    return Response.json({ data });
}
