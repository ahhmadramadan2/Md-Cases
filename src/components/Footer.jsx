export default function Footer({ year }){
return (
<footer>
<div className="container">
<div className="cols">
<div><div className="brand"><span className="logo">MD</span><span>MD Cases</span></div><p>Premium phone protection designed for everyday life.</p></div>
<div><h5>Shop</h5><a href="#bestsellers">Products</a><a href="#collections">Bundles</a></div>
{/* <div><h5>Company</h5><a href="#">About</a><a href="#">Careers</a></div> */}
{/* <div><h5>Support</h5><a href="#">Help Center</a><a href="#">Warranty</a></div> */}
</div>
<div className="bottom">© {year} MD Labs Inc.</div>
</div>
</footer>
);
}