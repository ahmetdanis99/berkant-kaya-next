"use client";
import { MdBorderOuter, MdDashboard, MdOutlineCreate } from "react-icons/md";
import AdminSidebarItem from "./AdminSidebarItem";
import { usePathname } from "next/navigation";

export default function AdminSidebar() {
  const pathname = usePathname();
  const adminPanel = [
    {
      name: "Özetler",
      icon: MdDashboard,
      url: "/admin",
    },
    {
      name: "Ürün Oluştur",
      icon: MdBorderOuter,
      url: "/admin/create",
    },
    {
      name: "Siparislerim",
      icon: MdOutlineCreate,
      url: "/admin/order",
    },
  ];
  return (
    <div className="w-1/6 border-r h-screen p-4 bg-orange-600">
      <div className="space-y-4">
        {adminPanel.map((admin, i) => (
          <AdminSidebarItem key={i} selected={pathname == admin.url} name={admin.name} icon={admin.icon} url={admin.url} />
        ))}
      </div>
    </div>
  );
}
