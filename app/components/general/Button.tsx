import React from "react";
import { IconType } from "react-icons";

interface ButtonProps {
  text: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  small?: boolean;
  outline?: boolean;
  icon?: IconType;
  disabled?: boolean;
}

export default function Button({ text, onClick, small, outline, icon: Icon, disabled}: ButtonProps) {
  return (
    <button
      className={`flex items-center justify-center gap-2 my-1 rounded-lg p-3 ${
        outline ? "border text-black" : "bg-black text-white"
      } 
  ${small ? "w-[250px]" : "w-full"}`}
      onClick={onClick}
      disabled={disabled}
    >
      {Icon && <Icon />} 
      {text}
    </button>
  );
}
