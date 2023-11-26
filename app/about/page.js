import {
  AiOutlineTwitter,
  AiOutlineGithub,
  AiFillLinkedin,
  AiOutlineMail,
} from "react-icons/ai";
import { RxArrowTopRight } from "react-icons/rx";
import Link from "next/link";

export const metadata = {
  title: "About | Roble",
  description: "...",
};

export default function About() {
  return (
    <div className=" items-center py-7">
      <div>
        <h2 className="text-2xl font-bold">About Me</h2>
        <h2 className="text-sm text-gray">Get to know me a bit better</h2>
      </div>
      {/* IMAGES */}
      <div className="py-10">
        <div className="grid grid-cols-4 gap-2">
          <div className="row-span-2">
            <img
              src="/hawasa.JPEG"
              className="rounded-md shadow-md h-full object-cover"
            />
          </div>
          <div className="col-span-2">
            <img src="/grad.JPEG" className="rounded-md shadow-md " />
          </div>
          <div className="">
            <img
              src="/grad2.JPEG"
              className="rounded-md shadow-md h-full object-cover"
            />
          </div>
          <div className="col-span-2">
            <img src="/week.JPG" className="rounded-md shadow-md" />
          </div>
          <div>
            <img
              src="/workshop.JPG"
              className="rounded-md shadow-md h-full object-cover"
            />
          </div>
        </div>
      </div>
      {/* IMAGES */}

      {/* ABOUT */}
      <div className="py-5">
        <div className="grid grid-cols-4">
          <div className="text-gray">About</div>
          <div className="col-span-3 ">
            I'm a passionate full stack developer with a strong knack for
            problem-solving. When I'm not immersed in coding, you can find me on
            the football field, where I love to kick the ball around,
            strategize, and enjoy the thrill of the game. <br />
            <br />
            Additionally, I occasionally find time to hit the gym, where I
            challenge myself to lift weights and work on my physical strength.
            Combining my love for technology with my enthusiasm for sports and
            fitness, I bring a well-rounded perspective to every project I
            tackle. Let's build innovative solutions together!
          </div>
        </div>
      </div>
      {/* ABOUT */}
      {/* CONTACT */}
      <div className="py-5">
        <div className="grid grid-cols-4">
          <div className="text-gray">Contact</div>
          <div className="col-span-3 grid grid-cols-2 gap-2">
            <div className="border rounded-md border-dark py-3 px-4 flex items-center justify-between">
              <div className="flex items-center">
                <AiOutlineMail size={23} />
                <h2 className="pl-1">Email</h2>
              </div>
              <RxArrowTopRight />
            </div>
            <Link
              href="https://twitter.com/_arooble"
              target="_blank"
              className="border rounded-md border-dark py-3 px-4 flex items-center justify-between hover:cursor-pointer hover:text-gray"
            >
              <div className="flex items-center">
                <AiOutlineTwitter size={23} />
                <h2 className="pl-1">Twitter</h2>
              </div>
              <RxArrowTopRight />
            </Link>
            <Link
              href="https://github.com/ARoble"
              target="_blank"
              className="border rounded-md border-dark py-3 px-4 flex items-center justify-between hover:cursor-pointer hover:text-gray"
            >
              <div className="flex items-center">
                <AiOutlineGithub size={23} />
                <h2 className="pl-1">Github</h2>
              </div>
              <RxArrowTopRight />
            </Link>

            <Link
              href="https://www.linkedin.com/in/abdulladif-roble-892681118/"
              target="_blank"
              className="border rounded-md border-dark py-3 px-4 flex items-center justify-between hover:cursor-pointer hover:text-gray"
            >
              <div className="flex items-center">
                <AiFillLinkedin size={23} />
                <h2 className="pl-1">LinkedIn</h2>
              </div>
              <RxArrowTopRight />
            </Link>
          </div>
        </div>
      </div>
      {/* CONTACT */}
      {/* ABOUT */}
      <div className="py-5">
        <div className="grid grid-cols-4">
          <div className="text-gray">Work</div>
          <div className="col-span-3 ">
            <p>
              I'm a passionate full stack developer with a strong knack for
              problem-solving. When I'm not immersed in coding, you can find
            </p>
            <div className="py-5 space-y-5">
              {/* JOB */}
              <Link
                href="https://www.fikrcamp.com"
                target="_blank"
                className="flex justify-between hover:text-gray hover:cursor-pointer"
              >
                <div className="flex items-center space-x-2">
                  <img src="/fikrcamplogo.png" className="h-14 rounded-full" />
                  <div>
                    <h1>Fikrcamp</h1>
                    <h1 className="text-gray">Lead Instructor</h1>
                  </div>
                </div>
                <h2 className="text-gray">2021 - </h2>
              </Link>
              {/* JOB */}
              {/* JOB */}
              <Link
                href="https://www.dalbofood.com"
                target="_blank"
                className="flex justify-between hover:text-gray hover:cursor-pointer"
              >
                <div className="flex items-center space-x-2">
                  <img src="/dalbofood.jpg" className="h-14 rounded-full" />
                  <div>
                    <h1>Dalbofood</h1>
                    <h1 className="text-gray">Web developer</h1>
                  </div>
                </div>
                <h2 className="text-gray">2017 - 2018</h2>
              </Link>
              {/* JOB */}
            </div>
          </div>
        </div>
      </div>
      {/* ABOUT */}
    </div>
  );
}
