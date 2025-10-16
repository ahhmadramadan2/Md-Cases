
import showcaseVid from "../assets/showcase.mp4";
export default function Hero(){
return (
<section className="container hero">
<div>
<span className="badge">Drop-tested to 10ft</span>
<h1>Protective. Minimal. Built for real life.</h1>
<p>Our slim, grippy cases keep your phone safe without bulk — MagSafe compatible, scratch-resistant, and backed by a lifetime warranty.</p>
<div className="cta-row">
<a className="btn btn-cta" href="#bestsellers">Shop Products</a>
<a className="btn" href="#collections">Browse Bundles</a>
</div>
<div className="trust">★ ★ ★ ★ ★ 4.8/5  </div>
</div>
<div className="hero-card"><video autoPlay muted loop playsInline>
  <source src={showcaseVid} type="video/mp4" />
</video></div>
</section>
);
}