import Announcement from "./components/Announcement.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Features from "./components/Features.jsx";
import Collections from "./components/Collections.jsx";
import Bestsellers from "./components/Bestsellers.jsx";
import Reviews from "./components/Reviews.jsx";
import Newsletter from "./components/Newsletter.jsx";
import Footer from "./components/Footer.jsx";
import CartDrawer from "./components/Cartdrawer.jsx";
import SizesBox from "./components/SizesBox.jsx";


export default function App(){
const year = new Date().getFullYear();
return (
<div>

<Header />
<Hero />
<section className="container">
<Features />
</section>
<Collections />
<SizesBox />  
<Bestsellers />
<Reviews />

<Footer year={year} />
<CartDrawer />
</div>
);
}