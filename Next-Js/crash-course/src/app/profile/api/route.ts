import { type NextRequest } from "next/server";
import { headers,cookies } from "next/headers";

export async function GET(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  console.log(requestHeaders.get("Authorization"));

  const headerList = await headers();
  console.log(headerList.get("Authorization"));

const cookieStore =  await cookies();
cookieStore.set("resultPerPage","20");
console.log(cookieStore.get("resultsPerPage"))


  return new Response("<h1>Profile</h1>", {
    headers: {
      "Content-Type": "text/html",
      "Set-Cookie": "name=Vikash; Max-Age=60",
    },
  });
}
