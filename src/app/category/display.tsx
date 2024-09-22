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
        </div>
    );
}