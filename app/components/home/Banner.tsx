import Image from "next/image";

export default function Banner() {
  return (
    <div className="h-[237px] flex bg-black items-center justify-center">
        <div className="h-[137px] relative w-full">
            <Image src={"/hepsi.jpeg"} fill alt="" className="object-cover"/>
        </div>
    </div>
  )
}
