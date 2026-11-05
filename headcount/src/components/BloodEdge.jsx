// The ragged drip band along the top of the hero. Drawn once, grows on load.
const DRIPS = [
  [3, 34], [7, 18], [11, 62], [16, 24], [22, 90], [27, 30], [31, 46], [37, 20],
  [42, 74], [48, 28], [53, 120], [58, 36], [63, 22], [68, 58], [74, 26], [79, 84],
  [84, 32], [89, 48], [94, 22], [98, 66],
];

export default function BloodEdge() {
  return (
    <svg className="blood-edge" viewBox="0 0 1000 140" preserveAspectRatio="none" aria-hidden="true">
      <rect x="0" y="0" width="1000" height="14" />
      {DRIPS.map(([x, len], i) => {
        const cx = x * 10;
        const w = 5 + (i % 4) * 2.5;
        return (
          <g key={i} className="drip" style={{ "--d": `${i * 70}ms` }}>
            <path d={`M${cx - w * 2} 12 Q${cx - w} 14 ${cx - w} ${len} A${w} ${w} 0 0 0 ${cx + w} ${len} Q${cx + w} 14 ${cx + w * 2} 12 Z`} />
          </g>
        );
      })}
    </svg>
  );
}
