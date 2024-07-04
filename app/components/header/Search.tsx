export default function Search() {
  return (
    <div className="hidden md:flex flex-1">
      <input className="py-2 px-3 rounded-md border-none outline-none flex flex-1 text-black" type="text" placeholder="Arama Yap..." />
      <button className="p-2 bg-orange-800 text-sm border border-transparent">Ara</button>
    </div>
  )
}
