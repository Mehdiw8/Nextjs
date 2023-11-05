export async function GET(request , {params}) {
    const user = params.user
    return new Response(`hello ${user}`)
}