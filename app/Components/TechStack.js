import Image from "next/image";

const technologies = [
  { name: "Typescript", image: "/typescript.png", height: 16, width: 16 },
  { name: "React Js", image: "/react.png", height: 16, width: 16 },
  { name: "Redux", image: "/redux.png", height: 16, width: 16 },
  { name: "Node Js", image: "/node.png", height: 16, width: 16 },
  { name: "Next Js", image: "/next.png", height: 16, width: 16 },
  { name: "MongoDB", image: "/mongo.png", height: 16, width: 16 },
  { name: "Tailwind CSS", image: "/tailwind.png", height: 13, width: 18 },
  { name: "S3", image: "/s3.png", height: 13, width: 18 },
  { name: "Zustland", image: "/zustland.png", height: 30, width: 30 },
];

function getStackImage(tech) {
  //node

  const found = technologies.find((technology) => technology.name == tech);

  return found;
}
export default function TechStack({ tech }) {
  return (
    <div className="flex items-center  py-1.5 px-2 w-fit rounded-sm bg-darkGray  ">
      <Image
        src={getStackImage(tech).image}
        height={getStackImage(tech).height}
        width={getStackImage(tech).width}
        alt={getStackImage(tech).name}
      />

      <h2 className="text-xs ml-1">{tech}</h2>
    </div>
  );
}
