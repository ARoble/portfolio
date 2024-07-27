import Link from "next/link";
import Image from "next/image";
import TechStack from "./TechStack";
export default function Projects({ project }) {
  return (
    <div>
      <Link
        href={`/projects/${project.slug}`}
        className="grid md:grid-cols-2 gap-4 hover:cursor-pointer "
      >
        <div>
          <Image
            src={`http:${project.image.fields.file.url}`}
            width={400}
            height={200}
            alt="project image"
            className="rounded md:h-[130px] lg:h-[140px] object-cover object-top"
          />
        </div>
        <div className="flex flex-col justify-start ">
          <h3>{project.title}</h3>
          <p className="text-gray py-2 text-sm">{project.shortDescription}</p>
          {/* <div className="flex flex-wrap  gap-1 bg-white ">
            {project.techStack.map((tech, index) => (
              <TechStack tech={tech} key={index} />
            ))}
          </div> */}
        </div>
      </Link>
    </div>
  );
}
