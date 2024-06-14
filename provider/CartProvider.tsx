import { CartContextProvider } from "@/hooks/useCart";
import React from "react";

export default function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <CartContextProvider>{children}</CartContextProvider>;
}
