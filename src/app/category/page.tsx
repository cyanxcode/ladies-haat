"use client"

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { IoArrowBack, IoBagOutline } from "react-icons/io5";

export default function Category(){
    const searchParams = useSearchParams();
    const title = searchParams.get("group");


    return (
    <>
    <div className="w-full h-16 flex items-center gap-12 justify-between border-b border-zinc-300 px-10 ">
        <Link href="/">
          <IoArrowBack size={25} />
        </Link>
        <Link href="/cart">
          <IoBagOutline size={30} />
        </Link>
    </div>
    <h2 className="text-3xl font-semibold m-10">{title}</h2>
    </>)
}