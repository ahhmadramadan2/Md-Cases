import { useMemo } from "react";
import { products } from "../data/products.js";
import ProductCard from "./ProductCard.jsx";
import { useCart } from "../context/CartContext.jsx";

function EmptyState({ current, clearFilter }){
  return (
    <div style={{border:'1px solid #222', borderRadius:16, padding:20, background:'#111'}}>
      <p style={{margin:0, color:'#d1d5db'}}>No products found.</p>
      <div style={{marginTop:10, display:'flex', gap:8}}>
        <button className="btn" onClick={clearFilter}>Show All</button>
      </div>
    </div>
  );
}

export default function Bestsellers(){
  const { collectionFilter, setCollectionFilter, colorFilter, setColorFilter } = useCart();

  // Build color options based on current category selection
  const availableColors = [
  { key: 'green',  label: 'Green',  colorHex: '#22c55e' },
  { key: 'blue',   label: 'Blue',   colorHex: '#3b82f6' },
  { key: 'red',    label: 'Red',    colorHex: '#ef4444' },
  { key: 'orange', label: 'Orange', colorHex: '#f97316' },
  { key: 'yellow', label: 'Yellow', colorHex: '#eab308' },
  { key: 'purple', label: 'Purple', colorHex: '#9b10d2ff' },
];

  const filtered = useMemo(()=>{
    let list = collectionFilter==='all' ? products : products.filter(p=>p.category===collectionFilter);
    if(colorFilter!=="any"){
      list = list.filter(p=> (p.variants||[]).some(v=>v.key===colorFilter));
    }
    return list;
  },[collectionFilter, colorFilter]);

  const categoryChips = [
    { key: "all", label: "All" },
    { key: "phone", label: "Phone Cases" },
    { key: "airpods", label: "AirPods Cases" },
  ];

  return (
    <section id="bestsellers" className="container section">
      <h2>Products</h2>

      {/* Category chips */}
      <div className="filters" style={{marginBottom:8}}>
        {categoryChips.map(f => (
          <button
            key={f.key}
            className={`chip ${collectionFilter===f.key? 'active': ''}`}
            onClick={()=>setCollectionFilter(f.key)}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Color filter row (built from variants) */}
      <div className="filters" style={{marginTop:6}}>
        <button className={`chip ${colorFilter==='any'?'active':''}`} onClick={()=>setColorFilter('any')}>All Colors</button>
        {availableColors.map(c=> (
          <button
            key={c.key}
            className={`chip ${colorFilter===c.key?'active':''}`}
            onClick={()=>setColorFilter(c.key)}
            title={c.label}
          >
            <span className="swatch" style={{ background:c.colorHex }} /> {c.label}
          </button>
        ))}
      </div>

      <div className="grid" style={{marginTop:12}}>
        {filtered.length === 0 ? (
          <EmptyState clearFilter={()=>{ setCollectionFilter('all'); setColorFilter('any'); }} />
        ) : (
          filtered.map(p=> <ProductCard key={p.id} product={p} />)
        )}
      </div>
    </section>
  );
}
