import Link from "next/link";
import Form from "../components/Form";

export default async function Home() {
  return (
    <main className="m-auto w-4/6 mt-8">
      <h3 className=" mb-11 text-2xl text-center">MongoDb + NextAuth.js</h3>
      <section className="flex justify-between items-start">
        {/* create */}
        <Link
          className="bg-blue-500 w-32 text-center  hover:bg-blue-700 text-white  py-1 px-2 rounded"
          href={{ pathname: "/auth/register" }}
        >
          SignUp
        </Link>
        {/* LOGIN */}
        <Link
          className="bg-blue-500 w-32 text-center  hover:bg-blue-700 text-white  py-1 px-2 rounded"
          href={"/auth/login"}
        >
          Login
        </Link>
        <Link
          className="bg-blue-500 w-32 text-center  hover:bg-blue-700 text-white  py-1 px-2 rounded"
          href={{ pathname: "/userPanel" }}
        >
          userPanel
        </Link>
      </section>
    </main>
  );
}
