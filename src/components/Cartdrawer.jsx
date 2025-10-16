import { useCart } from "../context/CartContext.jsx";


export default function CartDrawer(){
const { cart, subtotal, drawerOpen, closeCart, changeQty } = useCart();
return (
<div className={`drawer ${drawerOpen ? 'open' : ''}`} aria-hidden={!drawerOpen} role="dialog" aria-label="Shopping cart">
<div className="backdrop" onClick={closeCart}></div>
<div className="panel">
<div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
<h3 style={{margin:0}}>Your Cart</h3>
<button className="btn" onClick={closeCart} aria-label="Close cart">Close</button>
</div>
<div className="cart-items">
{cart.length===0 ? (
<p>Your cart is empty.</p>
) : (
cart.map(c=> (
<div className="cart-item" key={c.id}>
<img src={c.img} alt={c.title}/>
<div>
<div style={{fontWeight:600}}>{c.title}</div>
<div className="subtitle">{c.subtitle}</div>
<div>${(c.price*c.qty).toFixed(2)}</div>
</div>
<div className="qty">
<button onClick={()=>changeQty(c.id,-1)}>-</button>
<span>{c.qty}</span>
<button onClick={()=>changeQty(c.id,1)}>+</button>
</div>
</div>
))
)}
</div>
<div className="checkout">
<div style={{display:'flex',justifyContent:'space-between',marginBottom:10}}>
<strong>Subtotal</strong>
<strong>${subtotal.toFixed(2)}</strong>
</div>
<button className="btn btn-cta" style={{width:'100%'}}>Checkout</button>
</div>
</div>
</div>
);
}