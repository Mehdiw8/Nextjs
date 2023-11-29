"use client";
import Image from "next/image";
import usSvg from "../../assets/us.svg";
import irSvg from "../../assets/ir.svg";
import { usePathname, useRouter } from "next/navigation";
import Cookies from "js-cookie";
// زمانی که تعداد زبان زیادتری داریم از به این شکل مپ میکنیم
// const locales = ["en-us", "en", "fa-ir", "fa"];
const LocaleSwitcher = () => {
  const pathname = usePathname();
  const router = useRouter();
  const changePatchName = (locale) => {
    if (!pathname) return router.push("/");

    const path = pathname.split("/");
    path[1] = locale;
    const fixPath = path.join("/");
    console.log(fixPath);
    Cookies.set("locale", fixPath);
    router.push(fixPath);
  };

  return (
    // <section className="flex mt-3 flex-row justify-between items-center ">
    <ul className="mx-auto inline-block">
      <li className="flex flex-row">
        <button onClick={() => changePatchName("en-us")}>
          <Image
            className="m-3"
            src={usSvg}
            height="auto"
            width="50"
            alt="Flag"
          />
        </button>
        <button onClick={() => changePatchName("fa-ir")}>
          <Image
            className="m-3"
            src={irSvg}
            height="auto"
            width="50"
            alt="Flag"
          />
        </button>
      </li>
    </ul>
    // </section>
  );
};

export default LocaleSwitcher;
