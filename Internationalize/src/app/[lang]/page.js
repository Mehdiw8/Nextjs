import Link from "next/link";
import Title from "../../components/Title";
import "@/src/styles/home.css";
import { getLangs } from "./lang";
import LocaleSwitcher from "@/src/app/[lang]/LocaleSwitcher";

export default async function Home({ params: { lang } }) {
  const dict = await getLangs(lang);
 
  return (
    <main className="  flex justify-center items-center flex-col">
      <LocaleSwitcher/>
      <Title title={dict["main"].appName} />
      {/*  */}
      <div className="center">
        <Link className="btn-liquidWapper" href="/quiz">
          <span className="myButton">
            {dict["main"].appStartBtn}
            {/* شروع آزمون */}
          </span>
          <div className="liquid"></div>
        </Link>
      </div>
    </main>
  );
}
