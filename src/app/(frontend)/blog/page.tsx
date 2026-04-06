import { getPayload } from 'payload'
import config from '@payload-config'
import Link from 'next/link'
import dateFormat from "dateformat";


export const metadata = {
  title: 'Blog | Roble',
  description: '...',
}

export default async function Blog() {
  const payload = await getPayload({ config })

  const { docs: posts } = await payload.find({
    collection: 'posts',
    where: {
      status: { equals: 'published' },
    },
    sort: '-publishedAt',
  })

  return (
    <div className="items-center py-7">
      <div>
        <h2 className="text-2xl font-bold">Blog</h2>
        <h2 className="text-sm text-gray">
          My thoughts and some coding topics for you!
        </h2>
      </div>
      <div className="py-8 space-y-4">
        {posts.length === 0 ? (
          <p className="text-gray">No posts yet.</p>
        ) : (
          posts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="grid md:grid-cols-4 hover:text-hover"
            >
              <div className="text-gray text-sm">
                {post.publishedAt ? dateFormat(post.publishedAt, 'mmm dd, yyyy') : ''}
              </div>
              <div className="col-span-3 hover:cursor-pointer">{post.title}</div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
