"use client"

import { IoBagOutline } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";
import {useState} from "react"
import Sidebar from "./Sidebar";

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <nav className="w-full h-16 flex items-center justify-between border-b border-zinc-300 px-10">
        <button className="block md:hidden" onClick={() => setSidebarOpen(!sidebarOpen)}>
          {!sidebarOpen && <IoIosMenu size={30}/>}
          {sidebarOpen && <RxCross2 size={30}/>}
        </button>
        <Link href="/">
          <h2 className="text-xl font-bold">Ladies Haat</h2>
        </Link>
        <div className="gap-8 hidden md:flex">
          <Link href="/event">
            <div className="text-md font-medium text-zinc-600">Event</div>
          </Link>
          <Link href="/">
            <div className="text-md font-medium text-zinc-600">Catalog</div>
          </Link>
          <Link href="/">
            <div className="text-md font-medium text-zinc-600">
              Our Services
            </div>
          </Link>
          <Link href="/">
            <div className="text-md font-medium text-zinc-600">About</div>
          </Link>
          <Link href="/">
            <div className="text-md font-medium text-zinc-600">Contact Us</div>
          </Link>
        </div>
        <div className="flex gap-8">
          <Link href="/cart">
            <IoBagOutline size={30} />
          </Link>
        </div>
      </nav>{sidebarOpen && <Sidebar/>}
    </>
  );
}