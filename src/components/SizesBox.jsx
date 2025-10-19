export default function SizesBox() {
  return (
    <section className="sizes-box container section">
      {/* PHONE SIZES */}
      <h2>Models:</h2>
      <div className="product-sizes">
        <h5 className="sizes-title">PHONES:</h5>
        <div className="sizes-grid">
          <div className="sizes-row sizes-row--3">
            <span>iPhone 11</span>
            <span>iPhone 11 Pro</span>
            <span>iPhone 11 Pro Max</span>
          </div>
          <div className="sizes-row sizes-row--3">
            <span>iPhone 12</span>
            <span>iPhone 12 Pro</span>
            <span>iPhone 12 Pro Max</span>
          </div>
          <div className="sizes-row sizes-row--3">
            <span>iPhone 13</span>
            <span>iPhone 13 Pro</span>
            <span>iPhone 13 Pro Max</span>
          </div>
          <div className="sizes-row sizes-row--3">
            <span>iPhone 14</span>
            <span>iPhone 14 Pro</span>
            <span>iPhone 14 Pro Max</span>
          </div>
          <div className="sizes-row sizes-row--3">
            <span>iPhone 15</span>
            <span>iPhone 15 Pro</span>
            <span>iPhone 15 Pro Max</span>
          </div>
          <div className="sizes-row sizes-row--3">
            <span>iPhone 16</span>
            <span>iPhone 16 Pro</span>
            <span>iPhone 16 Pro Max</span>
          </div>
        </div>
      </div>

      {/* AIRPODS MODELS */}
      <div className="product-sizes">
        <h5 className="sizes-title">AIRPODS:</h5>
        <div className="sizes-grid">
          <div className="sizes-row sizes-row--2">
            <span>AirPods Pro (1st Gen)</span>
            <span>AirPods Pro (2nd Gen)</span>
          </div>
          <div className="sizes-row sizes-row--2">
            <span>AirPods (2nd Gen)</span>
            <span>AirPods (3rd Gen)</span>
          </div>
        </div>
      </div>
    </section>
  );
}
