// export async function GET(request) {}
// export async function HEAD(request) {}
// export async function POST(request) {}
// export async function PUT(request) {}
// export async function PATCH(request) {}
// export async function DELETE(request) {}
// export async function OPTIONS(request) {}

export async function GET(request) {
    // console.log(request);
    return new Response("Hello World! : New Api Route");
}
