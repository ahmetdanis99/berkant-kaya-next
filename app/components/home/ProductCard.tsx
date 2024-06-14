"use client";
import TextClip from "@/utils/TextClip";
import { Rating } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ProductCard({ product }: { product: any }) {
  const router = useRouter();

  let productRating = product?.reviews?.reduce((acc: number, item: any) => item.rating, 0) / product?.reviews.length;

  return (
    <div onClick={() => router.push(`product/${product.id}`)} className="flex flex-col flex-1 w-[240px] shadow-lg p-2 rounded-md cursor-pointer">
      <div className="relative h-[150px]">
        <Image src={product.image} fill alt="" className="object-contain"/>
      </div>
      <div className="text-center mt-2 space-y-1">
        <div>{TextClip(product.name)}</div>
        <Rating name="read-only" value={productRating} readOnly />
        <div className="text-orange-600 font-bold text-lg md:text-xl">{product.price}₺</div>
      </div>
    </div>
  );
}
