// import "use-server";
import Link from "next/link";

export default function Projects() {
  return (
    <div>
      <Link
        href="/projects/something"
        className="grid grid-cols-2 gap-5 hover:cursor-pointer "
      >
        <div>
          <img src="./ecommerece.png" className="rounded" />
        </div>
        <div className="flex flex-col justify-center r">
          <h3>E-commerece site</h3>
          <p className="text-gray py-2 text-sm">
            Design a small ecommerece site where my goal was to learn
            technologies new to me such as redux and redux-toolkit
          </p>
          <div className="flex space-x-1">
            <div className="flex items-center space-x-1 border border-dark py-1 px-1.5 rounded-sm bg-darkGray ">
              <img src="react.png" className="h-3" />
              <h2 className="text-xs">React</h2>
            </div>
            <div className="flex items-center space-x-1 border border-dark py-1 px-1.5 rounded-sm bg-darkGray ">
              <img src="node.png" className="h-3" />
              <h2 className="text-xs">Node JS</h2>
            </div>
            <div className="flex items-center space-x-1 border border-dark py-1 px-1.5 rounded-sm bg-darkGray ">
              <img src="tailwind.png" className="h-3" />
              <h2 className="text-xs">Tailwind CSS</h2>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
