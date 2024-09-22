import Link from "next/link";

export default function Sidebar(){
    return (
        <>
            <aside className="fixed gap-8 bg-blue-50 shadow-2xl flex md:hidden flex-col items-center justify-start pt-10 h-[100vh] w-64">
                <Link href="/event">
                  <div className="text-md font-medium text-zinc-800">Event</div>
                </Link>
                <Link href="/">
                  <div className="text-md font-medium text-zinc-800">Catalog</div>
                </Link>
                <Link href="/">
                  <div className="text-md font-medium text-zinc-800">
                    Our Services
                  </div>
                </Link>
                <Link href="/">
                  <div className="text-md font-medium text-zinc-800">About</div>
                </Link>
                <Link href="/">
                  <div className="text-md font-medium text-zinc-800">Contact Us</div>
                </Link>
            </aside>
        </>);
}   