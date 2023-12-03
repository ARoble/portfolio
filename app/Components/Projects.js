import Link from "next/link";
import Image from "next/image";
import TechStack from "./TechStack";
export default function Projects({ project }) {
  return (
    <div>
      <Link
        href={`/projects/${project.slug}`}
        className="grid md:grid-cols-2 gap-5 hover:cursor-pointer "
      >
        <div>
          <Image
            src="/ecommerece.png"
            width={400}
            height={200}
            alt="project image"
            className="rounded"
          />
        </div>
        <div className="flex flex-col justify-center r">
          <h3>{project.title}</h3>
          <p className="text-gray py-2 text-sm">{project.shortDescription}</p>
          <div className="flex space-x-1">
            {project.techStack.map((tech, index) => (
              <TechStack tech={tech} key={index} />
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
}
