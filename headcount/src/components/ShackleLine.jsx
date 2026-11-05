import { Animal } from "./Animals.jsx";

// A slaughter-line rail. The parent sets `--p` (scroll progress); the CSS
// moves the line along the rail and lengthens the blood under each animal.
export default function ShackleLine({ shape, count = 16 }) {
  const items = Array.from({ length: count * 2 });
  return (
    <div className="line" aria-hidden="true">
      <div className="rail" />
      <div className="track">
        {items.map((_, i) => (
          <div className="hanger" key={i} style={{ "--i": i % count }}>
            <svg className="hook" viewBox="0 0 20 40">
              <path d="M10 0 V24 q0 9 -6 9 q-4 0 -4 -4" />
            </svg>
            <div className="body">
              <Animal shape={shape} className="carcass" />
              <div className="bleed">
                <span className="stream" />
                <span className="drop" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
