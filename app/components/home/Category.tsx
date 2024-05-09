"use client";
export default function Category() {
  const categoryList = [
    {
      name: "Ayakkabı",
    },
    {
      name: "Ayakkabı",
    },
    {
      name: "Ayakkabı",
    },
    {
      name: "Ayakkabı",
    },
    {
      name: "Ayakkabı",
    },
    {
      name: "Ayakkabı",
    },
    {
      name: "Ayakkabı",
    },
  ];
  return (
    <div className="flex items-center justify-center gap-3 md:gap-10 px-3 md:px-10 py-5 md:py-8 overflow-x-auto">
      {categoryList.map((category, index) => (
        <div className="border text-slate-500 rounded-full min-w-[120px] flex flex-1 cursor-pointer items-center justify-center px-4 py-2 text-center" key={index}>{category.name}</div>
      ))}
    </div>
  );
}
