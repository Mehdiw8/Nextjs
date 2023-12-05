// "use client";
// import { useState } from "react";
//import { useSession } from "next-auth/react"; // فقط در کلاینت میتونی ازش استفاده کنی
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import UserCard from "./userCard";
import Link from "next/link";
import { option } from "../api/auth/[...nextauth]/option";

const UserPanel = async () => {
  // server Side
  const session = await getServerSession(option);
  if (!session) {
    redirect("/api/auth/signin?callback=/");
  }

  // --------------------------------------------------

  // Client Side
  // const { data: session, status } = useSession({
  //   required: true,
  //   onUnauthenticated() {
  //     redirect("/api/auth/signin?callback=/");
  //   },
  // });

  // console.log(session)

  // --------------------------------------------------
  // const [isSidebarOpen, setSidebarOpen] = useState(false);

  // const toggleSidebar = () => {
  //   setSidebarOpen(!isSidebarOpen);
  // };

  return (
    <div dir="rtl" className="flex h-screen bg-gray-100">
      {console.log(session)}
      {/* Sidebar */}
      {/* <aside
        className={`bg-blue-500 text-white w-64 min-h-screen ${
          isSidebarOpen ? "block" : "hidden"
        }`}
      >
        <div className="p-4">
          <h2 className="text-2xl font-semibold">پنل کاربری</h2>
        </div>
      </aside> */}

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white border-b">
          <div className="flex items-center justify-between p-4">
            <button className="text-blue-500">
              {" "}
              {/* onClick={toggleSidebar} */}
              {/* {isSidebarOpen ? "بستن" : "بازکردن"} */}
              منو
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 p-4">
          <h1 className="text-2xl font-semibold mb-4">
            به پنل کاربری خوش آمدید
          </h1>

          {session?.user ? (
            <>
              <UserCard  user={session?.user} />
              <div className="w-full text-center">
                <Link
                  href="/api/auth/signout"
                  className="mx-1 my-5 px-6 py-1 text-sm rounded shadow bg-red-600 hover:bg-red-400 text-red-200 w-20 cursor-pointer"
                >
                  خروج
                </Link>
              </div>
            </>
          ) : null}
        </main>
      </div>
    </div>
  );
};

export default UserPanel;
