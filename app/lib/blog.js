//Get one blog [slug]
//Get all blogs
//Get limited amount of blogs

const BASE_URL = "https://portfolio-azure-nine-71.vercel.app/api";

export async function getAllBlogs() {
  //TODO: PASS A LIMIT FOR THE HOMEPAGE
  const data = await fetch(`${BASE_URL}/blog`, {
    cache: "no-store",
  });

  return data.json();
}

export async function getOneBlog({ slug }) {
  const data = await fetch(`${BASE_URL}/blog?slug=${slug}`, {
    cache: "no-store",
  });

  return data.json();
}
