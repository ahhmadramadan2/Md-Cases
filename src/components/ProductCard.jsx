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
