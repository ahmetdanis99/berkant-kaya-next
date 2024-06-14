"use client";

import { RxAvatar } from "react-icons/rx";
import Avatar from "../general/Avatar";
import { Rating } from "@mui/material";

export default function Comment({product}:{product:any}) {
  return (
    <div className="border w-full md:w-1/3 p-2 rounded-lg my-3">
      <div className="flex items-center gap-1">
        <RxAvatar size="45" />
        <div>
          <div>{product?.user?.name}</div>
          <Rating name="read-only" value={product?.user?.rating} readOnly />
        </div>
      </div>
      <div className="text-slate-500">
        {product.comment}
      </div>
    </div>
  );
}
