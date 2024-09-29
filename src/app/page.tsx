import Chipsbar from "@/components/Chips/Chipsbar";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Chipsbar />
      <div className="w-full grid place-content-center mt-52">
        <div className="text-3xl font-light">Launching Soon...</div>
      </div>
    </>
  );
}
