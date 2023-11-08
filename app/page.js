import {
  AiOutlineTwitter,
  AiOutlineGithub,
  AiFillLinkedin,
  AiOutlineEnvironment,
} from "react-icons/ai";
import Link from "next/link";
import Blogs from "./Components/Blogs";
import Arsenal from "./Components/Intro";

export const metadata = {
  title: "Home | Roble",
  description: "...",
};

export default function Home() {
  return (
    <div className="py-5">
      <Arsenal />

      <div className="flex items-center space-x-5 pt-8">
        <div>
          <img src="/roble.jpg" className="h-28 rounded-full" />
        </div>
        <div className="space-y-1">
          <Link
            href="https://twitter.com/_arooble"
            target="_blank"
            className="flex items-center space-x-1 hover:cursor-pointer hover:text-gray"
          >
            <h2>
              <AiOutlineTwitter size="20" />
            </h2>
            <p className="text-xs">@_arooble</p>
          </Link>
          <Link
            href="https://github.com/ARoble"
            target="_blank"
            className="flex items-center space-x-1 hover:cursor-pointer hover:text-gray"
          >
            <h2>
              <AiOutlineGithub size="20" />
            </h2>
            <p className="text-xs">@ARoble</p>
          </Link>
          <Link
            href="https://www.linkedin.com/in/abdulladif-roble-892681118/"
            target="_blank"
            className="flex items-center space-x-1 hover:cursor-pointer hover:text-gray"
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
      <div className="mr-20 py-5">
        <p className="text-[#eeeeee]">
          Hey there 👋🏾, Im Roble I'm a full-stack developer who gets a kick out
          of problem-solving, both in code and on the football field. When I'm
          not wrestling with bugs, you can find me chasing a ball.
        </p>
      </div>

      {/* TECHNOLOGIES  */}
      <div className="py-5">
        <h2 className="text-gray">What im familiar with:</h2>
        <div className="flex space-x-1 mt-4">
          <div className="flex items-center space-x-1 border border-dark py-1 px-1.5 rounded-sm bg-darkGray ">
            <img src="/typescript.png" className="h-4" />
            <h2 className="text-xs">Typescript</h2>
          </div>
          <div className="flex items-center space-x-1 border border-dark py-1 px-1.5 rounded-sm bg-darkGray ">
            <img src="/react.png" className="h-4" />
            <h2 className="text-xs">React</h2>
          </div>
          <div className="flex items-center space-x-1 border border-dark py-1 px-1.5 rounded-sm bg-darkGray ">
            <img src="/redux.png" className="h-4" />
            <h2 className="text-xs">Redux</h2>
          </div>
          <div className="flex items-center space-x-1 border border-dark py-1 px-1.5 rounded-sm bg-darkGray ">
            <img src="/node.png" className="h-4" />
            <h2 className="text-xs">Node JS</h2>
          </div>
          <div className="flex items-center space-x-1 border border-dark py-1 px-1.5 rounded-sm bg-darkGray ">
            <img src="/next.png" className="h-4" />
            <h2 className="text-xs">Next JS</h2>
          </div>
          <div className="flex items-center space-x-1 border border-dark py-1 px-1.5 rounded-sm bg-darkGray ">
            <img src="/mongo.png" className="h-4" />
            <h2 className="text-xs">MongoDB</h2>
          </div>
          <div className="flex items-center space-x-1 border border-dark py-1 px-1.5 rounded-sm bg-darkGray ">
            <img src="/tailwind.png" className="h-3" />
            <h2 className="text-xs">Tailwind CSS</h2>
          </div>
        </div>
      </div>
      {/* TECHNOLOGIES  */}

      {/* BLOG SECTION */}
      <div className="py-5">
        <h2 className="text-gray">Latests posts</h2>
        <Blogs />
        <Link
          href="/blog"
          className="text-gray underline hover:text-white hover:cursor-pointer"
        >
          See all
        </Link>
      </div>
    </div>
  );
}
