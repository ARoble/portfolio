"use client";
import { BsMoonFill, BsFillSunFill } from "react-icons/bs";
import { FiSun } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  return (
    <div className="flex justify-between items-center py-7">
      <Link href="/">
        <Image
          height={40}
          width={40}
          alt="logo"
          src="/ar.png"
          className="h-10 rounded-md shadow-lg"
        />
      </Link>

      <div className="space-x-3 text-gray">
        <Link href="/about" className={pathname == "/about" ? "active" : ""}>
          About
        </Link>
        <Link href="/blog" className={pathname == "/blog" ? "active" : ""}>
          Blog
        </Link>
        <Link
          href="/projects"
          className={pathname == "/projects" ? "active" : ""}
        >
          Projects
        </Link>
        {/* <a>Contact</a> */}
      </div>

      <button
        onClick={() =>
          setTheme(theme === "dark" || theme === "system" ? "light" : "dark")
        }
      >
        {theme === "dark" ? <FiSun size={20} /> : <BsMoonFill />}
      </button>
    </div>
  );
}
