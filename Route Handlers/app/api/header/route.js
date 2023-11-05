import { headers } from "next/headers";
export async function GET(request) {
  const useHeader = headers(request);
  const header = useHeader.get("content-type");
  return new Response(`content-type header : ${header}`, {
    status: 200,
    headers: {
      "content-type": header,
    },
  });
}
