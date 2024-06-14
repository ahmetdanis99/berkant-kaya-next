import React from "react";
import { cardProductProps } from "../detail/DetailClient";

interface CounterProps{
    cardProduct : cardProductProps,
    increaseFunc:() => void;
    decreaseFunc:() => void;
}

export default function Counter({cardProduct,increaseFunc,decreaseFunc}:CounterProps) {
    
    const buttonStyle = "w-8 h-8 border flex items-center justify-center text-lg rounded-md cursor-pointer"
    
    return(
        <div className="flex items-center gap-2">
            <div className={buttonStyle} onClick={decreaseFunc}>-</div>
            <div className="text-lg md:text-xl">{cardProduct?.quantity}</div>
            <div className={buttonStyle} onClick={increaseFunc}>+</div>
        </div>
    )
}
