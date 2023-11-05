export async function GET() {
    const user = "mehdi"

    return new Response(`Hello : ${user}`)
}