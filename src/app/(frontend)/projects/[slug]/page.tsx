import { getPayload } from 'payload'
import config from '@payload-config'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { RxArrowTopRight } from 'react-icons/rx'
import { AiOutlineGithub } from 'react-icons/ai'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const payload = await getPayload({ config })

  const { docs } = await payload.find({
    collection: 'projects',
    where: { slug: { equals: slug } },
    limit: 1,
  })

  const project = docs[0]

  if (!project) {
    return { title: 'Project Not Found' }
  }

  return {
    title: `${project.title} | Roble`,
    description: project.shortDescription || '',
  }
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const payload = await getPayload({ config })

  const { docs } = await payload.find({
    collection: 'projects',
    where: { slug: { equals: slug } },
    limit: 1,
  })

  const project = docs[0]

  if (!project) {
    notFound()
  }

  return (
    <div className="py-7">
      <Link href="/projects" className="text-gray hover:text-hover text-sm">
        ← Back to projects
      </Link>

      <article className="mt-8">
        <header className="mb-8">
          <h1 className="text-2xl font-bold italic mb-4">{project.title}</h1>

          {project.techStack && project.techStack.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {project.techStack.map((tech, index) => {
                if (typeof tech === 'number') return null
                return (
                  <span
                    key={index}
                    className="flex items-center gap-2 px-3 py-1.5 text-sm bg-darkGray rounded-md"
                  >
                    {tech.icon && typeof tech.icon === 'object' && (
                      <Image
                        src={tech.icon.url || ''}
                        alt={tech.name}
                        width={16}
                        height={16}
                        className="w-4 h-4 object-contain"
                      />
                    )}
                    {tech.name}
                  </span>
                )
              })}
            </div>
          )}

          <div className="flex gap-4">
            {project.liveUrl && (
              <Link
                href={project.liveUrl}
                target="_blank"
                className="flex items-center gap-1 underline hover:text-hover"
              >
                Visit App
                <RxArrowTopRight size={14} />
              </Link>
            )}
            {project.githubUrl && (
              <Link
                href={project.githubUrl}
                target="_blank"
                className="flex items-center gap-1 underline hover:text-hover"
              >
                GitHub
                <RxArrowTopRight size={14} />
              </Link>
            )}
          </div>
        </header>

        {project.featuredImage && typeof project.featuredImage === 'object' && (
          <div className="mb-8 rounded-lg overflow-hidden">
            <Image
              src={project.featuredImage.url || ''}
              alt={project.featuredImage.alt || project.title}
              width={800}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
        )}

        <div className="prose prose-invert max-w-none">
          {project.content && <RichText data={project.content} />}
        </div>
      </article>
    </div>
  )
}
