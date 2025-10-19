import { useState } from "react";
import { useCart } from "../context/CartContext.jsx";

export default function ProductCard({ product }){
  const { addToCart } = useCart();
  const [variantKey, setVariantKey] = useState(product?.variants?.[0]?.key || 'default');
  const stars = "★".repeat(Math.round(product.rating));
  const variant = (product.variants||[]).find(v=>v.key===variantKey) || product.variants?.[0];
  const img = (variant?.img) || product.img;

  return (

    <div className="product" data-tag={product.tag}>
      
      <div className="media">
        <img src={img} alt={product.title} loading="lazy"/>
        {!!product.compareAt && <span className="badge">Sale</span>}
      </div>
      <div className="body">
        <p className="title">{product.title}</p>
       <p className="subtitle" style={{ whiteSpace: 'pre-line' }}>
  {product.subtitle}
</p>
{product.category === "phone" && (
  <div className="product-sizes">
    <h5 className="sizes-title"> SIZE:</h5>
    <div className="sizes-grid">
      <div className="sizes-row">
        <span>iPhone 11</span>
        <span>iPhone 11 Pro</span>
        <span>iPhone 11 Pro Max</span>
      </div>
      <div className="sizes-row">
        <span>iPhone 12</span>
        <span>iPhone 12 Pro</span>
        <span>iPhone 12 Pro Max</span>
      </div>
      <div className="sizes-row">
        <span>iPhone 13</span>
        <span>iPhone 13 Pro</span>
        <span>iPhone 13 Pro Max</span>
      </div>
      <div className="sizes-row">
        <span>iPhone 14</span>
        <span>iPhone 14 Pro</span>
        <span>iPhone 14 Pro Max</span>
      </div>
      <div className="sizes-row">
        <span>iPhone 15</span>
        <span>iPhone 15 Pro</span>
        <span>iPhone 15 Pro Max</span>
      </div>
      <div className="sizes-row">
        <span>iPhone 16</span>
        <span>iPhone 16 Pro</span>
        <span>iPhone 16 Pro Max</span>
      </div>
    </div>
  </div>
)}
{product.category === "airpods" && (
  <div className="product-sizes">
    <h5 className="sizes-title">SELECT MODEL:</h5>
    <div className="sizes-grid">
      <div className="sizes-row">
        <span>AirPods Pro (1st Gen)</span>
        <span>AirPods Pro (2nd Gen)</span>
      </div>
      <div className="sizes-row">
        <span>AirPods (2nd Gen)</span>
        <span>AirPods (3rd Gen)</span>
      </div>
    </div>
  </div>
)}


        {/* Colorway selector */}
        {product.variants && (
          <div className="swatches" aria-label="Choose color" style={{display:'flex', gap:8, margin:'6px 0 8px'}}>
            {product.variants.map(v => (
              <button
                key={v.key}
                className={`swatch-btn ${variantKey===v.key? 'selected':''}`}
                onClick={()=>setVariantKey(v.key)}
                title={v.label}
              >
                <span className="swatch" style={{ background: v.colorHex }} />
              </button>
            ))}
          </div>
        )}

        <div className="price">
          <span className="now">${product.price + (variant?.priceDelta||0)}</span>
          {!!product.compareAt && <span className="was">${product.compareAt}</span>}
        </div>
        <div className="rating">{stars}<span>({product.rating})</span></div>
        
      </div>
      
    </div>
    
  );
}
