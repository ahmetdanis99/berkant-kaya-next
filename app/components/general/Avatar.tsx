import Image from "next/image"
import { RxAvatar } from "react-icons/rx"

interface AvatarProps{
    image?:string
}

export default function Avatar({image}:AvatarProps) {
    if(image) return <Image src={image} fill alt="" />
    return <div><RxAvatar size="25"/></div>
}