"use client";

import Logo from "@/public/icons/cyclone.svg";
import { useRouter } from "next/navigation";

export default function SiteLogo() {
  const router = useRouter();

  function returnHome() {
    router.push("/");
  }

  return (
    <button
      onClick={returnHome}
      className="flex flex-nowrap items-center gap-x-2 text-lg no-underline text-slate-400 hover:text-slate-400"
    >
      <Logo width="32" height="32"></Logo>
      <span>React Games</span>
    </button>
  );
}
