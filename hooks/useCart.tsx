"use client";
import { cardProductProps } from "@/app/components/detail/DetailClient";
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

interface cartContextPorps {
  productCartQty: number;
  cartProducts: cardProductProps[] | null;
  addToBasket: (product: cardProductProps) => void;
  removeFromCart: (product: cardProductProps) => void;
}

const CartContext = createContext<cartContextPorps | null>(null);

interface cardContextProviderProps {
  [propName: string]: any;
}

export const CartContextProvider = (props: cardContextProviderProps) => {
  const [productCartQty, setProductCartQty] = useState(0);
  const [cartProducts, setCartProduct] = useState<cardProductProps[] | null>(null);

  useEffect(() => {
    let getItem: any = localStorage.getItem("cart");
    if (getItem) {
      try {
        const getItemParse = JSON.parse(getItem);
        if (Array.isArray(getItemParse)) {
          setCartProduct(getItemParse);
        }
      } catch (error) {
        console.error("Error parsing cart data from localStorage", error);
      }
    }
  }, []);

  const addToBasket = useCallback((product: cardProductProps) => {
    setCartProduct((prev) => {
      let updatedCart;
      if (prev) {
        updatedCart = [...prev, product];
      } else {
        updatedCart = [product];
      }
      toast.success("Ürün Sepete Eklendi!");
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  }, []);

  const removeFromCart = useCallback((product: cardProductProps) => {
    if (cartProducts) {
      const filteredProducts = cartProducts.filter((cart) => cart.id !== product.id);

      setCartProduct(filteredProducts);
      toast.success("Ürün Sepetten Silindi!");
      localStorage.setItem("cart", JSON.stringify(filteredProducts));
      return filteredProducts;
    }
  }, [cartProducts]);

  const value = {
    productCartQty,
    addToBasket,
    cartProducts,
    removeFromCart,
  };

  return <CartContext.Provider value={value} {...props} />;
};

export default function useCart() {
  const context = useContext(CartContext);

  if (context == null) {
    throw new Error("Bir hata mevcut");
  }
  return context;
}
