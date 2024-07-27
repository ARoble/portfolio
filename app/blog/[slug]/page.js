import Subscribe from "@/app/Components/Subscribe";
import dateFormat from "dateformat";
import { documentToReactComponents as renderRichText } from "@contentful/rich-text-react-renderer";
import Image from "next/image";
import SyntaxHighlighter from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Blog | Roble",
  description: "...",
};

async function getOneBlog({ slug }) {
  const data = await fetch(`${process.env.BASE_URL}/blog?slug=${slug}`, {
    cache: "no-store",
  });

  if (!data.ok) {
    throw new Error("Failed to fetch data");
  }
  return data.json();
}

export default async function Single({ params }) {
  const { blogs } = await getOneBlog(params);

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
      [BLOCKS.HEADING_4]: (node, children) => <h4>{children}</h4>,
      [BLOCKS.HEADING_5]: (node, children) => <h5>{children}</h5>,
      [BLOCKS.HEADING_6]: (node, children) => <h6>{children}</h6>,
      [BLOCKS.HR]: (node, children) => <hr className="py-3" />,
      [INLINES.HYPERLINK]: ({ data }, children) => (
        <a href={data.uri} target="__blank" className="underline font-semibold">
          {children}
        </a>
      ),

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
            className="rounded my-3 "
            height={node.data.target.fields.file.details.image.height}
            width={node.data.target.fields.file.details.image.width}
            alt="Blog image"
            src={`http:${node.data.target.fields.file.url}`}
          />
          <h2 className="text-center text-sm text-gray mb-2 px-10">
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
  if (blogs.length === 0) {
    return notFound();
  }

  return (
    <div className=" py-7">
      <h2 className="text-2xl font-bold">{blogs?.title}</h2>
      <h4 className="text-gray">
        {dateFormat(blogs?.published, "mmm dd, yyyy")}
      </h4>
      <div className="pt-2">
        {blogs?.blogType.map((type, index) => (
          <h1
            key={index}
            className="bg-darkGray w-fit px-2.5 py-1.5 text-xs rounded"
          >
            {type}
          </h1>
        ))}
      </div>
      <div className="py-5">{renderRichText(blogs?.content, options)}</div>
      {/* <Subscribe /> */}
    </div>
  );
}
