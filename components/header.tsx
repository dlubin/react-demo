// Header - the site's header, containing a logo and the cart

import Logo from "@/public/icons/cyclone.svg";
import Link from "next/link";
import Image from "next/image";
import CartWrapper from "./cart/cartWrapper";

export default function Header() {
  return (
    <header className="fixed z-50 top-0 w-full bg-gray-950 text-slate-400 fill-slate-400 border-b border-slate-400">
      <div className="h-14 grid grid-cols-[repeat(10,_1fr)] items-center max-w-[1640px] mx-auto">
        <Link
          href="/"
          className="flex flex-nowrap items-center gap-x-2 text-lg no-underline text-slate-400 hover:text-slate-400"
          prefetch={false}
        >
          <Logo width="32" height="32"></Logo>
          <span>React Games</span>
        </Link>
        <a
          href="https://github.com/dlubin/react-demo"
          target="_blank"
          className="flex items-center gap-x-2 no-underline col-start-9"
        >
          <Image
            src="/react-demo/icons/github-mark.png"
            alt="Github Logo"
            width={36}
            height={36}
            priority
          ></Image>
          <span className="text-slate-400 hover:text-slate-400">
            Source Code
          </span>
        </a>
        <CartWrapper></CartWrapper>
      </div>
    </header>
  );
}
