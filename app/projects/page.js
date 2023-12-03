import Link from "next/link";
import Projects from "../Components/Projects";

export const metadata = {
  title: "Projects | Roble",
  description: "...",
};
async function fetchProjects() {
  try {
    const blogs = await fetch(`${process.env.BASE_URL}/projects`, {
      cache: "no-store",
    });
    return blogs.json();
  } catch (e) {
    console.log("Error parsing data:", e);
  }
}
export default async function Page() {
  const { projects } = await fetchProjects();
  return (
    <div className=" items-center py-7">
      <div>
        <h2 className="text-2xl font-bold">Projects</h2>
        <h2 className="text-sm text-gray">
          List of projects i have been working on
        </h2>
      </div>
      <div className="py-10 space-y-8">
        {projects.map((project, index) => (
          <Projects project={project} key={index} />
        ))}
      </div>
    </div>
  );
}
