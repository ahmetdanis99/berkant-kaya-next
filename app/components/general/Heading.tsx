interface HeadingProps{
    center?: boolean
    text:string
}

export default function Heading({center,text}:HeadingProps) {
  return (
    <div className={`text-slate-500 my-3 md:my-5 px-3 md:px-10 md:text-xl ${center ? "text-center" : "text-start"}`}>{text}</div>
  )
}
