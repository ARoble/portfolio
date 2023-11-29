import Subscribe from "../Components/Subscribe";
import Blogs from "../Components/Blogs";
import { getAllBlogs } from "../lib/blog";
export const metadata = {
  title: "Blog | Roble",
  description: "...",
};

async function fetchBlogs() {
  try {
    const blogs = await fetch(`${process.env.BASE_URL}/blog`, {
      cache: "no-store",
    });
    return blogs.json();
  } catch (e) {
    console.log("Error parsing data:", e);
    console.log(process.env.BASE_URL);
  }
}

export default async function Blog() {
  const { blogs } = await fetchBlogs();
  return (
    <div className=" items-center py-7">
      <div>
        <h2 className="text-2xl font-bold">Blog</h2>
        <h2 className="text-sm text-gray">
          My thoughts and some coding topics for you!
        </h2>
      </div>
      <div className="py-8">
        <Blogs blogs={blogs} />
      </div>
      {/* BLOG */}
      {/* SUBSCRIBE */}
      <Subscribe />
      {/* SUBSCRIBE */}
    </div>
  );
}
