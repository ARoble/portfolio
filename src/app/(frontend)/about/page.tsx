import {
  AiOutlineTwitter,
  AiOutlineGithub,
  AiFillLinkedin,
  AiOutlineMail,
} from "react-icons/ai";
import { RxArrowTopRight } from "react-icons/rx";
import Link from "next/link";
import Image from "next/image";
import { getPayload } from 'payload'
import config from '@payload-config'

export const metadata = {
  title: "About | Roble",
  description: "...",
};

export default async function About() {
  const payload = await getPayload({ config })

  const { docs: experiences } = await payload.find({
    collection: 'experiences',
    sort: 'order',
  })
  return (
    <div className=" items-center py-7">
      <div>
        <h2 className="text-2xl font-bold">About Me</h2>
        <h2 className="text-sm text-gray">Get to know me a bit better</h2>
      </div>
      {/* IMAGES */}
      <div className="py-10">
        <div className="grid grid-cols-3 md:grid-cols-4 gap-2">
          <div className="row-span-2">
            <Image
              src="/images/me/hawasa.JPEG"
              className="rounded-md shadow-md h-full object-cover"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "100%" }}
              alt="travel pic"
            />
          </div>
          <div className="col-span-2">
            <Image
              src="/images/me/grad.JPEG"
              className="rounded-md shadow-md "
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "100%" }}
              alt="Bootcamp graduation pic"
            />
          </div>
          <div className="hidden md:block">
            <Image
              src="/images/me/grad2.JPEG"
              className="rounded-md shadow-md h-full object-cover"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "100%" }}
              alt="Bootcamp graduation pic"
            />
          </div>
          <div className="col-span-2">
            <Image
              src="/images/me/week.JPG"
              className="rounded-md shadow-md"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "100%" }}
              alt="coding session pic"
            />
          </div>
          <div className="hidden md:block">
            <Image
              src="/images/me/workshop.JPG"
              className="rounded-md shadow-md h-full object-cover"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "100%" }}
              alt="Workshop photo"
            />
          </div>
        </div>
      </div>
      {/* IMAGES */}

      {/* ABOUT */}
      <div className="py-5">
        <div className="grid grid-cols-2 space-y-2 md:grid-cols-4">
          <div className="text-gray">About</div>
          <div className="col-span-3 ">
            I'm a full-stack developer who thrives on solving problems, whether
            they're in code or the business world. With a keen eye for spotting
            opportunities and a love for building things, I like to think of
            myself as a problem-solver with a twist. When I'm not coding, you
            might find me sharing my knowledge with students at Fikrcamp, an
            online coding bootcamp I started to help others break into the tech
            industry.
            <br />
            <br />
            Recently, I've been teaching more than coding, but I'm always up for
            a new challenge. I'm currently looking for exciting opportunities .
            If you're looking for someone who can tackle tough problems with a
            smile and a bit of flair, let's connect and create something amazing
            together!
          </div>
        </div>
      </div>
      {/* ABOUT */}
      {/* CONTACT */}
      <div className="py-5">
        <div className="grid grid-cols-2 space-y-2 md:grid-cols-4">
          <div className="text-gray">Contact</div>
          <div className="col-span-3 grid grid-cols-2 gap-2">
            <Link
              href="mailto:abdulladif0042@gmail.com"
              target="_blank"
              className="border rounded-md border-dark py-3 px-4 flex items-center justify-between hover:cursor-pointer hover:text-hover"
            >
              <div className="flex items-center">
                <AiOutlineMail size={23} />
                <h4 className="pl-1">Email</h4>
              </div>
              <RxArrowTopRight />
            </Link>

            <Link
              href="https://twitter.com/_arooble"
              target="_blank"
              className="border rounded-md border-dark py-3 px-4 flex items-center justify-between hover:cursor-pointer hover:text-hover"
            >
              <div className="flex items-center">
                <AiOutlineTwitter size={23} />
                <h4 className="pl-1">Twitter</h4>
              </div>
              <RxArrowTopRight />
            </Link>
            <Link
              href="https://github.com/ARoble"
              target="_blank"
              className="border rounded-md border-dark py-3 px-4 flex items-center justify-between hover:cursor-pointer hover:text-hover"
            >
              <div className="flex items-center">
                <AiOutlineGithub size={23} />
                <h4 className="pl-1">Github</h4>
              </div>
              <RxArrowTopRight />
            </Link>

            <Link
              href="https://www.linkedin.com/in/abdulladif-roble-892681118/"
              target="_blank"
              className="border rounded-md border-dark py-3 px-4 flex items-center justify-between hover:cursor-pointer hover:text-hover"
            >
              <div className="flex items-center">
                <AiFillLinkedin size={23} />
                <h4 className="pl-1">LinkedIn</h4>
              </div>
              <RxArrowTopRight />
            </Link>
          </div>
        </div>
      </div>
      {/* CONTACT */}
      {/* WORK */}
      <div className="py-5">
        <div className="grid grid-cols-2 space-y-2 md:grid-cols-4">
          <div className="text-gray">Work</div>
          <div className="col-span-3">
            <p>My past work experiences in the field are listed down below.</p>
            <div className="py-5 space-y-5">
              {experiences.map((exp) => (
                <div
                  key={exp.id}
                  className="flex justify-between hover:text-hover hover:cursor-pointer"
                >
                  <div className="flex items-center space-x-2">
                    {exp.logo && typeof exp.logo === 'object' && (
                      <Image
                        src={exp.logo.url || ''}
                        className="h-14 w-14 rounded-full object-cover"
                        height={56}
                        width={56}
                        alt={exp.company}
                      />
                    )}
                    <div>
                      <h3>{exp.company}</h3>
                      <h4 className="text-gray">{exp.role}</h4>
                    </div>
                  </div>
                  <h4 className="text-gray">
                    {exp.startDate} - {exp.endDate || ''}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* WORK */}
    </div>
  );
}
