import { useCart } from "../context/CartContext.jsx";
import blue from '../assets/bluepack.jpg';
import orange from '../assets/orangepack.jpg';

export default function Collections(){
  const { setCollectionFilter } = useCart();

  const pick = (key) => {
    setCollectionFilter(key);
    // Let the anchor do smooth scroll (see CSS), but also ensure programmatic fallback
    const el = document.getElementById('bestsellers');
    if(el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="collections" className="container section">
      <h2>Bundles (Free Shipping)</h2>
      <div className="grid">
        <a className="collection"  >
          <img src={blue} alt="MagSafe cases"/>
          <span className="label">Blue Phone+Airpods  <li> 15.99$</li> </span>
        </a>
        <a className="collection" href="#bestsellers" onClick={(e)=>{ e.preventDefault(); pick('clear'); }}>
          <img src={orange} alt="Clear cases"/>
          <span className="label">Orange Phone+Airpods  <li> 15.99$</li>
          </span>
         
        </a>
      
      </div>
    </section>
  );
}
