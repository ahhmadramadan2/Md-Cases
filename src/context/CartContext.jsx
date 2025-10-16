import React, { createContext, useContext, useMemo, useState, useEffect } from "react";
import { products as seed } from "../data/products.js";

const CartCtx = createContext();

export function CartProvider({ children }){
  const [cart, setCart] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  // Filters
  const [collectionFilter, setCollectionFilter] = useState("all"); // 'phone' | 'airpods' | 'all'
  const [colorFilter, setColorFilter] = useState("any"); // color key or 'any'

  const cartCount = cart.reduce((s,i)=>s+i.qty,0);
  const subtotal = cart.reduce((s,i)=>s+i.price*i.qty,0);

  function openCart(){ setDrawerOpen(true); }
  function closeCart(){ setDrawerOpen(false); }

  function addToCart({ id, variantKey }){
    const base = seed.find(p=>p.id===id);
    if(!base) return;
    const variant = base.variants?.find(v=>v.key===variantKey) || base.variants?.[0] || { key:"default", label:"Default", priceDelta:0 };
    const price = base.price + (variant.priceDelta||0);
    const cartKey = `${id}:${variant.key}`;

    setCart(prev => {
      const existing = prev.find(c=>c.cartKey===cartKey);
      if(existing){ return prev.map(c=> c.cartKey===cartKey? {...c, qty:c.qty+1 } : c ); }
      return [...prev, { cartKey, id, title: base.title, subtitle: base.subtitle, category: base.category, variantKey: variant.key, variantLabel: variant.label, colorHex: variant.colorHex, price, img: (variant.img || base.img), qty:1 }];
    });
    openCart();
  }

  function changeQty(cartKey, delta){
    setCart(prev => prev.map(c=> c.cartKey===cartKey? {...c, qty:c.qty+delta }:c).filter(c=>c.qty>0));
  }

  useEffect(()=>{
    const onEsc = e => { if(e.key==='Escape') closeCart(); };
    window.addEventListener('keydown', onEsc);
    return () => window.removeEventListener('keydown', onEsc);
  },[]);

  const value = useMemo(() => ({
    cart,
    cartCount,
    subtotal,
    drawerOpen,
    openCart,
    closeCart,
    addToCart,
    changeQty,
    // shared filters
    collectionFilter,
    setCollectionFilter,
    colorFilter,
    setColorFilter,
  }), [cart, cartCount, subtotal, drawerOpen, collectionFilter, colorFilter]);

  return <CartCtx.Provider value={value}>{children}</CartCtx.Provider>;
}

export function useCart(){
  const ctx = useContext(CartCtx);
  if(!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
