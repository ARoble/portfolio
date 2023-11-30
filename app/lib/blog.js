//Get one blog [slug]
//Get all blogs
//Get limited amount of blogs
export const dynamic = "force-dynamic";
const BASE_URL = process.env.BASE_URL;

export async function getAllBlogs() {
  //TODO: PASS A LIMIT FOR THE HOMEPAGE
  try {
    const data = await fetch(`${BASE_URL}/blog`, {
      cache: "no-store",
    });

    return data.json();
  } catch (e) {
    console.log(e);
    console.log(process.env.BASE_URL);
  }
}

export async function getOneBlog({ slug }) {
  try {
    const data = await fetch(`${BASE_URL}/blog?slug=${slug}`, {
      cache: "no-store",
    });

    return data.json();
  } catch (e) {
    console.log(e);
  }
}
