import { NextResponse, NextRequest } from "next/server";
const contentful = require("contentful");

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});
0;
export async function GET(req) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const slug = searchParams.get("slug");
    const limit = searchParams.get("limit");

    const response = await client.getEntries({
      content_type: "blog",
      "fields.slug": slug,
    });

    let blogs = response.items.map((blog) => {
      return blog.fields;
    });
    if (blogs.length === 1 && slug != null) blogs = blogs[0];

    return NextResponse.json({ blogs });
  } catch (e) {
    console.log("server", e);
    return NextResponse.json({ message: e });
  }
}
