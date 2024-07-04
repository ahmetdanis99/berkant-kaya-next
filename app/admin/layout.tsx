import React from "react";
import AdminSidebar from "../components/admin/AdminSidebar";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-3">
      <AdminSidebar/>
      {children}
    </div>
  );
}
