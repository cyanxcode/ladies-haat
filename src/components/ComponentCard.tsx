import React from "react";
import Image from "next/image";
interface Props {
  text: string;
  img: string;
}

export default function Cards({ text, img }: Props) {
  return (
    <>
      <div className="h-auto relative rounded-xl overflow-hidden">
        <Image
          src={img}
          width={100}
          height={100}
          className="w-full h-auto"
          alt={text}
        />
        <div className="font-medium text-lg lg:text-2xl lg:font-bold absolute bottom-2 text-white leading-5 ml-4 mb-4 z-30 pr-10">
          {text}
        </div>
      </div>
    </>
  );
}