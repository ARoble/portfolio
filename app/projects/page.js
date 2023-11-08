import Link from "next/link";
import Projects from "../Components/Projects";

import { Metadata } from "next";

export const metadata = {
  title: "Projects | Roble",
  description: "...",
};
export default function Page() {
  return (
    <div className=" items-center py-7">
      <div>
        <h2 className="text-2xl font-bold">Projects</h2>
        <h2 className="text-sm text-gray">
          List of projects i have been working on
        </h2>
      </div>
      <div className="py-10 space-y-8">
        <Projects />
        <Projects />
        <Projects />
      </div>
    </div>
  );
}
