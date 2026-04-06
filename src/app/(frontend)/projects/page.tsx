import Link from 'next/link'
import Image from 'next/image'
import { getPayload } from 'payload'
import config from '@payload-config'

export const metadata = {
  title: 'Projects | Roble',
  description: '...',
}

export default async function Projects() {
  const payload = await getPayload({ config })

  const { docs: projects } = await payload.find({
    collection: 'projects',
    where: {
      status: { equals: 'published' },
    },
    sort: '-createdAt',
  })

  return (
    <div className="items-center py-7">
      <div>
        <h2 className="text-2xl font-bold">Projects</h2>
        <h2 className="text-sm text-gray">
          List of projects i have been working on
        </h2>
      </div>
      <div className="py-10 space-y-6">
        {projects.length === 0 ? (
          <p className="text-gray">No projects yet.</p>
        ) : (
          projects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.slug}`}
              className="grid md:grid-cols-2 gap-4 hover:cursor-pointer"
            >
              <div>
                {project.featuredImage &&
                  typeof project.featuredImage === 'object' && (
                    <Image
                      src={project.featuredImage.url || ''}
                      width={400}
                      height={200}
                      alt={project.featuredImage.alt || project.title}
                      className="rounded md:h-[130px] lg:h-[140px] object-cover object-top w-full"
                    />
                  )}
              </div>
              <div className="flex flex-col justify-start">
                <h3 className="hover:text-hover">{project.title}</h3>
                <p className="text-gray py-2 text-sm">
                  {project.shortDescription}
                </p>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  )
}
