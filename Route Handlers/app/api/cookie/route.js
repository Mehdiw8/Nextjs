import { cookies } from "next/headers";
export async function GET() {
  const cookiesStore = cookies();
  const token = cookiesStore.get("token");
  console.log(token)
  return new Response(`Hello : token -> ${token && token.value}`, {
    status: 200,
    headers: {
      // SET Cookie
      //cookie inja hatman havaset be in syntax bashe "Set-Cookie": `token=
      "Set-Cookie": `token= ${token}`,
    },
  });
}
