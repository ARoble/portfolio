import { getPayload } from 'payload'
import config from '@payload-config'
import { notFound } from 'next/navigation'
import dateFormat from 'dateformat'
import Image from 'next/image'
import Link from 'next/link'
import { RichText } from '@payloadcms/richtext-lexical/react'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const payload = await getPayload({ config })

  const { docs } = await payload.find({
    collection: 'posts',
    where: { slug: { equals: slug } },
    limit: 1,
  })

  const post = docs[0]

  if (!post) {
    return { title: 'Post Not Found' }
  }

  return {
    title: `${post.title} | Roble`,
  }
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params
  const payload = await getPayload({ config })

  const { docs } = await payload.find({
    collection: 'posts',
    where: { slug: { equals: slug } },
    limit: 1,
  })

  const post = docs[0]

  if (!post) {
    notFound()
  }

  return (
    <div className="py-7">
      <Link href="/blog" className="text-gray hover:text-hover text-sm">
        ← Back to blog
      </Link>

      <article className="mt-8">
        <header className="mb-8">
          <h1 className="text-sm font-bold mb-2">{post.title}</h1>
          {post.publishedAt && (
            <p className="text-gray text-sm">
              {dateFormat(post.publishedAt, 'mmmm dd, yyyy')}
            </p>
          )}
        </header>

        {post.featuredImage && typeof post.featuredImage === 'object' && (
          <div className="mb-8 rounded-lg overflow-hidden">
            <Image
              src={post.featuredImage.url || ''}
              alt={post.featuredImage.alt || post.title}
              width={800}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
        )}

        <div className="prose prose-invert max-w-none">
          {post.content && <RichText data={post.content} />}
        </div>
      </article>
    </div>
  )
}
