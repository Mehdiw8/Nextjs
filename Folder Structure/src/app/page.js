import Link from "next/link";
import Title from "../components/Title";
import "@/src/styles/home.css";
export default function Home() {
  return (
    <main className="  flex justify-center items-center flex-col">
      <Title title="صفحه ورود به آزمون" />
      <div className="center">
        <Link className="btn-liquidWapper" href="/quiz">
          <span className="myButton">شروع آزمون</span>
          <div className="liquid"></div>
        </Link>
      </div>
    </main>
  );
}
