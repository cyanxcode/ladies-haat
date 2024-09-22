import ComponentCard from "@/components/ComponentCard";
import { useSearchParams } from "next/navigation";

interface Props{
    data: [];
}

export default function Display({data}: Props){
    const searchParams = useSearchParams();
    const title = searchParams.get("group");
    console.log(data);


    return (
        <div>
            <h2 className="text-3xl font-semibold m-10">{title}</h2>
            <div className=" grid grid-cols-2 sm:grid-cols-auto-fill-200 justify-evenly gap-10 flex-wrap px-10">
            {data.map((category) => {
                return <ComponentCard text="Oversized"/>;
            })}
            </div>
        </div>
    );
}