import {
  AiOutlineTwitter,
  AiOutlineGithub,
  AiFillLinkedin,
  AiOutlineEnvironment,
} from 'react-icons/ai'
import Link from 'next/link'
import Image from 'next/image'
import Intro from '../components/Intro'
import { getPayload } from 'payload'
import config from '@payload-config'

export const metadata = {
  title: 'Home | Roble',
  description: '...',
}

export default async function Home() {
  const payload = await getPayload({ config })

  const { docs: familiarTech } = await payload.find({
    collection: 'tech-stacks',
    where: {
      familiar: { equals: true },
    },
  })
  return (
    <div className="py-5">
      <Intro />
      <div className="flex items-center space-x-5 pt-8">
        <div className="relative h-28 w-28 rounded-full overflow-hidden flex-shrink-0">
          <Image
            src="/images/roble1.jpg"
            className="object-cover object-center"
            fill
            alt="Roble"
          />
        </div>
        <div className="space-y-1.5">
          <div>
            <Link
              href="https://twitter.com/_arooble"
              target="_blank"
              className="flex items-center space-x-1 hover:cursor-pointer hover:text-hover"
            >
              <h2>
                <AiOutlineTwitter size="20" />
              </h2>
              <span className="text-xs">@_arooble</span>
            </Link>
          </div>
          <div>
            <Link
              href="https://github.com/ARoble"
              target="_blank"
              className="flex items-center space-x-1 hover:cursor-pointer hover:text-hover"
            >
              <h2>
                <AiOutlineGithub size="20" />
              </h2>
              <span className="text-xs">@ARoble</span>
            </Link>
          </div>
          <div>
            <Link
              href="https://linkedin.com/in/a-roble"
              target="_blank"
              className="flex items-center space-x-1 hover:cursor-pointer hover:text-hover"
            >
              <h2>
                <AiFillLinkedin size="20" />
              </h2>
              <span className="text-xs">@Abdulladif_roble</span>
            </Link>
          </div>
          <div className="flex items-center space-x-1 ">
            <h2>
              <AiOutlineEnvironment size="20" />
            </h2>
            <span className="text-xs">Copenhagen, Denmark</span>
          </div>
        </div>
      </div>
      <div className="md:mr-20 py-5">
        <p className="">
          Hey there 👋🏾, I'm Roble! I'm a full-stack developer who gets a kick out of
          problem-solving, whether it's in code or on the football field. When I'm not pulling my
          hair out solving bugs, you can find me chasing a ball.
        </p>
      </div>
      {/* TECHNOLOGIES  */}
      <div className="py-5">
        <h3 className="text-gray">What im familiar with:</h3>
        <div className="flex flex-wrap gap-1 mt-4">
          {familiarTech.map((tech) => (
            <div
              key={tech.id}
              className="flex items-center space-x-1 py-1.5 px-2 rounded-sm bg-darkGray hover:cursor-pointer"
            >
              {tech.icon && typeof tech.icon === 'object' && (
                <Image
                  src={tech.icon.url || ''}
                  height={16}
                  width={16}
                  alt={tech.name}
                  className="w-4 h-4 object-contain"
                />
              )}
              <h2 className="text-xs">{tech.name}</h2>
            </div>
          ))}
        </div>
      </div>
      {/* TECHNOLOGIES  */}
      {/* CURRENTLY LEARNING  */}
      <div className="py-2">
        <h3 className="text-gray">Currently learning:</h3>
        <div className="flex flex-wrap gap-1 mt-4">
          <div className="flex items-center space-x-1  py-1.5 px-2  rounded-sm bg-darkGray hover:cursor-pointer">
            <Image src="/images/aws.png" height={16} width={16} alt="AWS services" />
            <h2 className="text-xs">AWS</h2>
          </div>
        </div>
      </div>
      {/* CURRENTLY LEARNING  */}
      {/* BLOG SECTION */}
      <div className="py-5">
        <h3 className="text-gray">Latests posts</h3>

        {/* <Blogs blogs={blogs} /> */}

        <Link href="/blog" className="text-gray underline hover:text-hover hover:cursor-pointer">
          See all
        </Link>
      </div>
    </div>
  )
}
