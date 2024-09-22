import { useSearchParams } from "next/navigation";

export default function Display(){
    const searchParams = useSearchParams();
    const title = searchParams.get("group");

    return (
        <div>
            <h2 className="text-3xl font-semibold m-10">{title}</h2>
        </div>
    );
}