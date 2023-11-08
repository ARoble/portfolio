import { BsMoonFill } from "react-icons/bs";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex justify-between items-center py-7">
      <Link href="/">
        <img src="/ar.png" className="h-10 rounded-md shadow-lg" />
      </Link>
      <div className="space-x-3 text-gray">
        <Link href="/about">About</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/projects">Projects</Link>
        <a>Contact</a>
      </div>
      <button>
        <BsMoonFill />
      </button>
    </div>
  );
}
