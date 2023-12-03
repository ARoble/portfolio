import { NextResponse, NextRequest } from "next/server";
export const dynamic = "force-dynamic";
const contentful = require("contentful");

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export async function GET(req) {
  try {
    // const searchParams = req.nextUrl.searchParams;
    // const slug = searchParams.get("slug");

    // const response = await client.getEntries({
    //   content_type: "projects",
    //   "fields.slug": slug,
    // });

    // let projects = response.items.map((project) => {
    //   return project.fields;
    // });
    // if (projects.length === 1 && slug != null) projects = projects[0];
    const projects = [];
    return NextResponse.json({ projects });
  } catch (e) {
    console.log("server", e);
    return NextResponse.json({ message: e });
  }
}
