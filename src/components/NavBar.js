import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  return (
    <nav className="max-w-full max-h-full mx-auto shadow-lg shadow-gray-500">
      <img className="max-w-full max-h-full" src="/lc_logo.png" />
      <div className="flex place-content-center space-x-2 mx-auto">
        <Link href="/">
          <a className={router.pathname === "/" ? "active" : ""}>Home</a>
        </Link>
        <Link href="/about">
          <a className={router.pathname === "/about" ? "active" : ""}>About</a>
        </Link>
      </div>
      <style jsx>{`
        nav a {
          font-weight: 600;
          font-size: 18px;
        }
        .active {
          color: tomato;
        }
      `}</style>
    </nav>
  );
}
//https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=861
