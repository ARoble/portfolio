"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
export default function Intro() {
  const [gif, setGif] = useState(false);

  return (
    <div className="relative">
      <h2 className="text-2xl font-bold">Abdulladif Roble</h2>

      <h2 className="text-sm text-gray">
        Im a full-stack developer and an{" "}
        <u
          className="hover:text-white hover:cursor-pointer"
          onMouseOver={() => setGif(!gif)}
          onMouseOut={() => setGif(!gif)}
        >
          Arsenal
        </u>{" "}
        fan 🔴
      </h2>
      {gif && (
        <Image
          className="absolute left-40  h-32 rounded"
          src={"/arsenal.gif"}
          width={270}
          height={128}
          alt=""
        />
      )}
    </div>
  );
}
