import { IconType } from "react-icons";

interface ChoiceInputProps {
  text: string;
  icon: IconType;
  onClick: (value: string) => void;
  selected?: boolean;
}

export default function ChoiceInput({ text, icon: Icon, onClick, selected }: ChoiceInputProps) {
  return (
    <div onClick={()=>onClick(text)} className={`flex my-3 cursor-pointer px-4 py-2 rounded-md items-center gap-2 justify-center h-16 border ${selected?"border-black":"border-gray-200"}`}>
      <Icon />
      <span className="text-slate-700 text-lg">{text}</span>
    </div>
  );
}
