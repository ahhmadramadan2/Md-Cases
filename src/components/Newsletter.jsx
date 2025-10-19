export default function Newsletter(){
function onSubmit(e){
e.preventDefault();
alert('Thanks! Please check your inbox.');
}
return (
<section className="container section">
<div className="newsletter">
<div>
<h3>Join the MD list</h3>
<p>Get early access to drops, exclusive deals, and tips to keep your phone pristine.</p>
</div>
<form onSubmit={onSubmit}>
<div style={{display:'flex',gap:10}}>
<input type="email" placeholder="you@example.com" required />
<button className="btn btn-cta" type="submit">Subscribe</button>
</div>
</form>
</div>
</section>
);
}