import Blog from "./Blog";

export default function Blogs({ blogs }) {
  return (
    <div className="py-8 space-y-3">
      {blogs?.map((blog, index) => (
        <Blog blog={blog} key={index} />
      ))}
    </div>
  );
}
