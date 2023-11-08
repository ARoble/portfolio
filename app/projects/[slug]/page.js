import { Metadata } from "next";

export async function generateMetadata({ params }) {
  // read route params
  const slug = params.slug;

  return {
    title: `${slug} | Roble`,
    description: "...",
  };
}

export default function Single({ params }) {
  return (
    <div className=" py-7">
      <h2 className="text-2xl font-bold">Ecommerece Site</h2>
      <div className="py-3">
        <h2 className="text-gray pb-1">Tech stack</h2>
        <div className="flex space-x-1 ">
          <div className="flex items-center space-x-1 border border-dark py-1 px-1.5 rounded-sm bg-darkGray ">
            <img src="/react.png" className="h-4" />
            <h2 className="text-xs">React</h2>
          </div>
          <div className="flex items-center space-x-1 border border-dark py-1 px-1.5 rounded-sm bg-darkGray ">
            <img src="/node.png" className="h-4" />
            <h2 className="text-xs">Node JS</h2>
          </div>
          <div className="flex items-center space-x-1 border border-dark py-1 px-1.5 rounded-sm bg-darkGray ">
            <img src="/mongo.png" className="h-4" />
            <h2 className="text-xs">MongoDB</h2>
          </div>
          <div className="flex items-center space-x-1 border border-dark py-1 px-1.5 rounded-sm bg-darkGray ">
            <img src="/tailwind.png" className="h-3" />
            <h2 className="text-xs">Tailwind CSS</h2>
          </div>
        </div>
      </div>

      <div className="py-10">
        <p>
          I'm a passionate full stack developer with a strong knack for
          problem-solving. When I'm not immersed in coding, you can find me on
          the football field, where I love to kick the ball around, strategize,
          and enjoy the thrill of the game. Additionally, I occasionally find
          time to hit the gym, where I challenge myself to lift weights and work
          on my physical strength. Combining my love for technology with my
          enthusiasm for sports and fitness, I bring a well-rounded perspective
          to every project I tackle. Let's build innovative solutions together!
          Feel free to personalize and adapt this bio to your preferences and
          style for your portfolio website.
        </p>
        <br />
        <p>
          I'm a passionate full stack developer with a strong knack for
          problem-solving. When I'm not immersed in coding, you can find me on
          the football field, where I love to kick the ball around, strategize,
          and enjoy the thrill of the game. Additionally, I occasionally find
          time to hit the gym, where I challenge myself to lift weights and work
          on my physical strength. Combining my love for technology with my
          enthusiasm for sports and fitness, I bring a well-rounded perspective
          to every project I tackle. Let's build innovative solutions together!
          Feel free to personalize and adapt this bio to your preferences and
          style for your portfolio website.
        </p>
      </div>
    </div>
  );
}
