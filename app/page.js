import {
  AiOutlineTwitter,
  AiOutlineGithub,
  AiFillLinkedin,
  AiOutlineEnvironment,
} from "react-icons/ai";
import Link from "next/link";
import Blogs from "./Components/Blogs";
import Arsenal from "./Components/Intro";
import { getAllBlogs } from "./lib/blog";
import Image from "next/image";

export const metadata = {
  title: "Home | Roble",
  description: "...",
};

const technologies = [
  { name: "Typescript", image: "/typescript.png", height: 16, width: 16 },
  { name: "React", image: "/react.png", height: 16, width: 16 },
  { name: "Redux", image: "/redux.png", height: 16, width: 16 },
  { name: "Node JS", image: "/node.png", height: 16, width: 16 },
  { name: "Next JS", image: "/next.png", height: 16, width: 16 },
  { name: "MongoDB", image: "/mongo.png", height: 16, width: 16 },
  { name: "Tailwind CSS", image: "/tailwind.png", height: 13, width: 18 },
];

async function fetchBlogs() {
  const blogs = await fetch(`${process.env.BASE_URL}/blog`, {
    cache: "no-store",
  });
  return blogs.json();
}

export default async function Home() {
  const { blogs } = await fetchBlogs();

  return (
    <div className="py-5">
      <Arsenal />
      <div className="flex items-center space-x-5 pt-8">
        <div>
          <Image
            src="/roble1.jpg"
            className="h-36 w-36 object-cover rounded-full"
            height={144}
            width={144}
            alt="Roble"
          />
        </div>
        <div className="space-y-1">
          <Link
            href="https://twitter.com/_arooble"
            target="_blank"
            className="flex items-center space-x-1 hover:cursor-pointer hover:text-hover"
          >
            <h2>
              <AiOutlineTwitter size="20" />
            </h2>
            <p className="text-xs">@_arooble</p>
          </Link>
          <Link
            href="https://github.com/ARoble"
            target="_blank"
            className="flex items-center space-x-1 hover:cursor-pointer hover:text-hover"
          >
            <h2>
              <AiOutlineGithub size="20" />
            </h2>
            <p className="text-xs">@ARoble</p>
          </Link>
          <Link
            href="https://www.linkedin.com/in/abdulladif-roble-892681118/"
            target="_blank"
            className="flex items-center space-x-1 hover:cursor-pointer hover:text-hover"
          >
            <h2>
              <AiFillLinkedin size="20" />
            </h2>
            <p className="text-xs">@Abdulladif_roble</p>
          </Link>
          <div className="flex items-center space-x-1 ">
            <h2>
              <AiOutlineEnvironment size="20" />
            </h2>
            <p className="text-xs">Copenhagen, Denmark</p>
          </div>
        </div>
      </div>
      <div className="md:mr-20 py-5">
        <p className="">
          Hey there 👋🏾, Im Roble I'm a full-stack developer who gets a kick out
          of problem-solving, both in code and on the football field. When I'm
          not wrestling with bugs, you can find me chasing a ball.
        </p>
      </div>
      {/* TECHNOLOGIES  */}
      <div className="py-5">
        <h3 className="text-gray">What im familiar with:</h3>
        <div className="flex flex-wrap gap-1 mt-4">
          {technologies.map((technology, index) => (
            <div
              key={index}
              className="flex items-center space-x-1  py-1.5 px-2  rounded-sm bg-darkGray hover:cursor-pointer"
            >
              <Image
                src={technology.image}
                height={technology.height}
                width={technology.width}
                alt={technology.name}
              />
              <h2 className="text-xs">{technology.name}</h2>
            </div>
          ))}
        </div>
      </div>
      {/* TECHNOLOGIES  */}
      {/* CURRENTLY LEARNING  */}
      <div className="py-2">
        <h3 className="text-gray">Currently learning:</h3>
        <div className="flex flex-wrap gap-1 mt-4">
          <div className="flex items-center space-x-1  py-1.5 px-2  rounded-sm bg-darkGray hover:cursor-pointer">
            <Image src="/aws.png" height="16" width="16" alt="AWS services" />
            <h2 className="text-xs">AWS</h2>
          </div>
        </div>
      </div>
      {/* CURRENTLY LEARNING  */}
      {/* BLOG SECTION */}
      <div className="py-5">
        <h3 className="text-gray">Latests posts</h3>

        <Blogs blogs={blogs} />

        <Link
          href="/blog"
          className="text-gray underline hover:text-hover hover:cursor-pointer"
        >
          See all
        </Link>
      </div>
    </div>
  );
}
