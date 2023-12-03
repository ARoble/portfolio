import Link from "next/link";
import dateFormat from "dateformat";

export default function Blog({ blog }) {
  return (
    <Link href={`/blog/${blog.slug}`} className="grid grid-cols-4">
      <div className="text-gray">
        {dateFormat(blog.published, "mmm dd, yyyy")}
      </div>
      <div className="col-span-3 hover:text-hover hover:cursor-pointer">
        {blog.title}
      </div>
    </Link>
  );
}
