export default function Subscribe() {
  return (
    <div className="bg-darkGray  rounded-lg py-5 md:p-10 text-center">
      <h2>Subscribe to my newsletter</h2>
      <p className="text-gray py-4 px-10 text-sm">
        Monthly blogs on various different topics like tech, africa,
        programming, my journey and more!
      </p>
      <div className="flex justify-center space-x-2">
        <input
          type="text"
          className="bg-blueish rounded-md py-1.5 px-2 w-2/4 text-darkGray placeholder-gray focus:outline-none "
          placeholder="example@gmail.com"
        />
        <button className="bg-button text-darkGray text-sm px-3 rounded-md">
          Sign up
        </button>
      </div>
    </div>
  );
}
