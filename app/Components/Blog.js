import Link from "next/link";

export default function Blog() {
  return (
    <Link href="/blog/something" className="grid grid-cols-4">
      <div className="text-gray">Oct 21, 2024</div>
      <div className="col-span-3 hover:text-gray hover:cursor-pointer">
        Learn Git basics
      </div>
    </Link>
  );
}
