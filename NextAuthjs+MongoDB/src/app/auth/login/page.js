"use client";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { signIn } from "next-auth/react";
import gitHubImage from "@/src/assets/github-white.svg";
import Image from "next/image";
const SignIn = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [error, setError] = useState("");

  //   از رفرنس یا رف استفاده کردم بجا استیت به این شکل بهتره
  const userRef = useRef("");
  const passRef = useRef("");

  //   لازمه که بعد از لاگین شدن کاربر ، کاربر به جایی که قبلا بوده ریدارکت بشه که برای این مورد از کال بک یو ار ال استفاده میکنیم چک میکنم از چه صفحه ای به لاگین اومده
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(`Username: ${userRef.current}, Password: ${passRef.current}`);
    //function khode NextAuth Hast (provider : string , config on :{})
    try {
      const result = await signIn("credentials", {
        username: userRef.current,
        password: passRef.current,
        redirect: false,
        callbackUrl: callbackUrl, // or callbackUrl
      });
      // console.log(result);

      if (!result?.error) {
        router.push(callbackUrl);
      } else {
        setError("رمز یا نام کاربری رو اشتباه وارد کردی عمو 🎈");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section dir="rtl" className=" dark:bg-gray-900">
      <div className=" flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              وارد اکانت خود شوید
            </h1>
            <form onSubmit={submitHandler} className="space-y-4 md:space-y-6">
              {error && (
                <p className="text-center bg-red-300 py-4 mb-6 rounded">
                  {error}
                </p>
              )}
              <div>
                <label
                  htmlFor="username"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  نام کاربری
                </label>
                <input
                  onChange={(e) => (userRef.current = e.target.value)}
                  type="text"
                  name="username"
                  id="username"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="نام کاربری"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  کلمه عبور
                </label>
                <input
                  onChange={(e) => (passRef.current = e.target.value)}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="کلمه عبور"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="px-7 py-2 text-sm rounded shadow bg-gray-600 hover:bg-gray-400 text-gray-200 w-full cursor-pointer"
              >
                ورود
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                اکانت نداری ؟{" "}
                <Link
                  href="/auth/register"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  ثبت نام کن
                </Link>
              </p>
            </form>
            <button
              type="button"
              className="px-7 py-2 text-white text-sm rounded bg-gray-600 shadow-md hover:shadow-lg w-full flex justify-center items-center"
              onClick={() =>
                signIn("github", {
                  callbackUrl: callbackUrl,
                })
              }
            >
              ورود با گیت هاب{" "}
              <Image
                className="mx-2"
                src={gitHubImage}
                height={20}
                width={20}
                alt="github"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
