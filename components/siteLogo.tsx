import Link from "next/link";
import Logo from "@/public/icons/cyclone.svg";

export default function SiteLogo() {
  return (
    <Link
      href="/////"
      className="flex flex-nowrap items-center gap-x-2 text-lg no-underline text-slate-400 hover:text-slate-400"
      prefetch={false}
    >
      <Logo width="32" height="32"></Logo>
      <span>React Games</span>
    </Link>
  );
}
