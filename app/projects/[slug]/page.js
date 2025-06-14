import Image from "next/image";
import { documentToReactComponents as renderRichText } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import TechStack from "../../Components/TechStack";
import SyntaxHighlighter from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { notFound } from "next/navigation";
import { GoArrowUpRight } from "react-icons/go";
export async function generateMetadata({ params }) {
  // read route params
  const slug = params.slug;

  return {
    title: `${slug} | Roble`,
    description: "...",
  };
}

async function fetchProjects({ slug }) {
  try {
    const projects = await fetch(
      `${process.env.BASE_URL}/projects?slug=${slug}`,
      {
        cache: "no-store",
      }
    );

    return projects.json();
  } catch (e) {
    console.log("Error parsing data:", e);
  }
}

export default async function Single({ params }) {
  const { projects } = await fetchProjects(params);

  const Text = ({ children }) => (
    <p className="">
      {children}
      <br />
      <br />
    </p>
  );
  let options = {
    preserveWhitespace: true,
    renderMark: {
      [MARKS.CODE]: (text) => (
        <span className="bg-dark text-orange px-[5px] py-[1px] rounded ">
          {text}
        </span>
      ),
    },
    renderNode: {
      [BLOCKS.HEADING_1]: (node, children) => <h1>{children}</h1>,
      [BLOCKS.HEADING_2]: (node, children) => <h2>{children}</h2>,
      [BLOCKS.HEADING_3]: (node, children) => <h3>{children}</h3>,
      [BLOCKS.HEADING_4]: (node, children) => (
        <h4 className="text-xl font-bold mt-2 mb-0.5">{children}</h4>
      ),
      [BLOCKS.HEADING_5]: (node, children) => <h5>{children}</h5>,
      [BLOCKS.HEADING_6]: (node, children) => <h6>{children}</h6>,
      [BLOCKS.HR]: (node, children) => <hr className="py-3" />,
      [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
      [BLOCKS.UL_LIST]: (node, children) => (
        <ul className="ml-10 pb-4">
          {node.content.map((content, index) => (
            <li className="list-disc" key={index}>
              {content.content[0].content[0].value}
            </li>
          ))}
        </ul>
      ),
      [BLOCKS.OL_LIST]: (node, children) => (
        <ol className="ml-10 pb-4">
          {node.content.map((content, index) => (
            <li className="list-decimal" key={index}>
              {content.content[0].content[0].value}
            </li>
          ))}
        </ol>
      ),
      "embedded-asset-block": (node) => (
        <div>
          <Image
            className="rounded my-2"
            height={node.data.target.fields.file.details.image.height}
            width={node.data.target.fields.file.details.image.width}
            alt="Blog image"
            src={`http:${node.data.target.fields.file.url}`}
          />
          <h2 className="text-center text-sm text-gray mt-0 pt-0 px-10">
            {node.data.target.fields.description}
          </h2>
        </div>
      ),
      "embedded-entry-inline": (node) => (
        <>
          {node.data.target.fields.snippet.content.map((content, firstIndex) =>
            content.content.map((code, secondIndex) => (
              <SyntaxHighlighter
                language="javascript"
                style={vs2015}
                className="text-sm"
                key={secondIndex}
              >
                {code.value}
              </SyntaxHighlighter>
            ))
          )}
        </>
      ),
    },
  };

  if (projects.length === 0) {
    return notFound();
  }
  return (
    <div className=" py-7">
      <h2 className="text-2xl font-bold">{projects?.title}</h2>
      <div className="py-3 ">
        <div className="flex space-x-1 ">
          {projects?.techStack.map((tech, index) => (
            <TechStack tech={tech} key={index} />
          ))}
        </div>
      </div>
      <div className="flex items-center ">
        <a
          href={projects?.projectLink}
          target="__blank"
          className=" text-[15px]  underline-offset-4 underline hover:text-gray hover:cursor-pointer"
        >
          Visit App
        </a>
        <GoArrowUpRight size={17} />
      </div>
      <div className="py-10">{renderRichText(projects?.content, options)}</div>
    </div>
  );
}
