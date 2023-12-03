"use client";
import { BsMoonFill, BsFillSunFill } from "react-icons/bs";
import { FiSun } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";

export default function Header() {
  const { theme, setTheme } = useTheme();
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
        <Link href="/about">About</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/projects">Projects</Link>
        {/* <a>Contact</a> */}
      </div>

      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        {theme === "dark" ? <FiSun size={20} /> : <BsMoonFill />}
      </button>
    </div>
  );
}
