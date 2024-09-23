
import Link from "next/link";
import { IoArrowBack, IoBagOutline } from "react-icons/io5";

export default function Event(){
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
            <div className="flex flex-col w-full items-center mt-12 gap-12 px-10">
                <h2 className="text-3xl font-bold">Welcome to Event Page</h2>
                <h3 className="text-xl font-semibold text-center">Win Exciting Prizes like Speaker, Earbuds, Soundbar, Smart Watch and a lot more.</h3>
                <div className="flex justify-center items-center rounded-full text-lg w-96 h-12 text-white bg-blue-700 font-semibold">
                    Participate in Lucky Draw
                </div>
            </div>
        </>
    );
}