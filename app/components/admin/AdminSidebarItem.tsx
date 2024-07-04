import Link from "next/link";
import { IconType } from "react-icons"

interface AdminSidebarItem{
    selected?:boolean,
    name:string,
    icon: IconType
    url:string
}

export default function AdminSidebarItem({selected,name,icon:Icon,url}:AdminSidebarItem) {
    return(
        <Link className={`flex cursor-pointer items-center gap-2 ${selected?"text-black font-bold":"text-white font-medium"}`} href={url}>
            <Icon size={25}/>
            <div>{name}</div>
        </Link>
    )
}