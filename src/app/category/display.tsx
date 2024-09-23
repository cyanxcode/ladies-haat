import ComponentCard from "@/components/ComponentCard";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

interface Props{
    data: [];
}

export default function Display({data}: Props){
    const searchParams = useSearchParams();
    const title = searchParams.get("group");
    const categorizedData = data.filter((item: any) => item.group === title?.toLowerCase());


    return (
        <div>
            <h2 className="text-3xl font-semibold m-10">{title}</h2>
            <div className=" grid grid-cols-2 sm:grid-cols-auto-fill-200 justify-evenly gap-10 flex-wrap px-10">
            {categorizedData.map((category: any) => {
                return (
                    <Link key={category.id} href={`/${title}/${category.tag}`}>
                        <ComponentCard text={category.title} img={category.image}/>
                    </Link>
                );
            })}
            </div>
        </div>
    );
}