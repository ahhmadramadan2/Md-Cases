import { useCart } from "../context/CartContext.jsx";


export default function Header(){
// const { cartCount, openCart } = useCart();
return (
<header>
<div className="container nav">
<a className="brand" href="#"><span className="logo">MD</span><span>MD Cases</span></a>
<nav className="nav-links">
<a href="#collections">Bundles</a>
<a href="#bestsellers">Products</a>
<a href="#reviews">Reviews</a>
{/* <a href="#support">Support</a> */}
</nav>

</div>
</header>
);
}