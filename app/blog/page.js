import Subscribe from "../Components/Subscribe";
import Blogs from "../Components/Blogs";

export const metadata = {
  title: "Blog | Roble",
  description: "...",
};

export default function Blog() {
  return (
    <div className=" items-center py-7">
      <div>
        <h2 className="text-2xl font-bold">Blog</h2>
        <h2 className="text-sm text-gray">
          My thoughts and some coding topics for you!
        </h2>
      </div>
      <div className="py-8">
        <Blogs />
      </div>
      {/* BLOG */}
      {/* SUBSCRIBE */}
      <Subscribe />
      {/* SUBSCRIBE */}
    </div>
  );
}
