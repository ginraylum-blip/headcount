// Simple flat silhouettes, drawn upright and facing right in a 100×100 box.
// The shackle line flips them upside down so they hang from the hind legs.

const Chicken = () => (
  <>
    <path d="M26 50 L8 28 L12 44 L4 40 L18 60 Z" />
    <ellipse cx="48" cy="56" rx="27" ry="19" />
    <path d="M62 44 Q64 30 70 26 L78 30 Q74 40 72 52 Z" />
    <circle cx="72" cy="28" r="9" />
    <path d="M80 26 L90 29 L80 33 Z" />
    <path d="M66 20 q2 -6 5 -1 q2 -6 5 0 q3 -4 4 2 L68 22 Z" />
    <path d="M73 36 q2 7 -2 8 q-3 -3 -1 -8 Z" />
    <path d="M42 72 L40 92 M40 92 l-6 2 M40 92 l6 2 M54 72 L56 92 M56 92 l-6 2 M56 92 l6 2" strokeWidth="3" strokeLinecap="round" fill="none" stroke="currentColor" />
  </>
);

const Duck = () => (
  <>
    <path d="M22 56 L8 46 L14 62 Z" />
    <ellipse cx="46" cy="62" rx="28" ry="16" />
    <path d="M60 56 Q62 40 68 34 L78 38 Q72 46 72 58 Z" />
    <circle cx="72" cy="34" r="10" />
    <rect x="78" y="33" width="15" height="6" rx="3" />
    <path d="M40 76 L38 92 M38 92 l-6 1 M38 92 l5 2 M52 76 L54 92 M54 92 l-6 1 M54 92 l6 2" strokeWidth="3" strokeLinecap="round" fill="none" stroke="currentColor" />
  </>
);

const Turkey = () => (
  <>
    <path d="M42 62 L6 52 Q2 30 14 16 Q24 6 36 10 Q44 14 46 30 Z" />
    <ellipse cx="50" cy="60" rx="24" ry="20" />
    <path d="M64 50 Q66 34 70 26 L76 28 Q74 40 72 56 Z" />
    <circle cx="73" cy="24" r="6.5" />
    <path d="M78 22 L86 25 L78 28 Z" />
    <path d="M75 29 q3 6 0 11 q-3 -4 -2 -11 Z" />
    <path d="M44 78 L42 94 M42 94 l-6 1 M42 94 l6 2 M56 78 L58 94 M58 94 l-6 1 M58 94 l6 2" strokeWidth="3" strokeLinecap="round" fill="none" stroke="currentColor" />
  </>
);

const Pig = () => (
  <>
    <ellipse cx="46" cy="48" rx="34" ry="21" />
    <ellipse cx="80" cy="46" rx="14" ry="13" />
    <rect x="88" y="41" width="9" height="11" rx="4" />
    <path d="M72 36 L76 22 L84 36 Z" />
    <rect x="22" y="60" width="8" height="22" rx="3" />
    <rect x="34" y="62" width="8" height="20" rx="3" />
    <rect x="54" y="62" width="8" height="20" rx="3" />
    <rect x="66" y="60" width="8" height="22" rx="3" />
    <path d="M13 44 q-8 -4 -6 -10 q3 -4 6 0 q2 4 -3 5" strokeWidth="3" fill="none" stroke="currentColor" strokeLinecap="round" />
  </>
);

const Cow = () => (
  <>
    <rect x="12" y="28" width="62" height="32" rx="12" />
    <path d="M70 30 L86 24 Q96 26 96 36 L94 50 Q92 56 86 54 L74 44 Z" />
    <path d="M82 24 q-2 -8 -8 -10 M88 24 q2 -8 8 -10" strokeWidth="3.5" fill="none" stroke="currentColor" strokeLinecap="round" />
    <path d="M78 28 L70 22 L76 32 Z" />
    <rect x="16" y="54" width="8" height="30" rx="3" />
    <rect x="28" y="56" width="8" height="28" rx="3" />
    <rect x="52" y="56" width="8" height="28" rx="3" />
    <rect x="64" y="54" width="8" height="30" rx="3" />
    <ellipse cx="44" cy="62" rx="7" ry="4" />
    <path d="M13 32 Q4 44 6 62" strokeWidth="3" fill="none" stroke="currentColor" strokeLinecap="round" />
    <circle cx="6" cy="64" r="3" />
  </>
);

const Sheep = () => (
  <>
    <circle cx="26" cy="42" r="14" />
    <circle cx="40" cy="34" r="15" />
    <circle cx="56" cy="34" r="15" />
    <circle cx="68" cy="44" r="13" />
    <circle cx="48" cy="52" r="16" />
    <circle cx="30" cy="54" r="12" />
    <ellipse cx="82" cy="40" rx="10" ry="13" transform="rotate(20 82 40)" />
    <path d="M76 30 L66 26 L72 36 Z" />
    <rect x="24" y="60" width="6" height="24" rx="2" />
    <rect x="34" y="62" width="6" height="22" rx="2" />
    <rect x="54" y="62" width="6" height="22" rx="2" />
    <rect x="64" y="58" width="6" height="26" rx="2" />
  </>
);

const Goat = () => (
  <>
    <rect x="16" y="34" width="56" height="24" rx="11" />
    <path d="M66 36 L80 20 Q90 18 92 26 L88 38 Q84 42 78 40 L70 48 Z" />
    <path d="M80 20 Q74 6 62 8" strokeWidth="3.5" fill="none" stroke="currentColor" strokeLinecap="round" />
    <path d="M86 38 L84 50 L80 40 Z" />
    <path d="M18 38 L10 30 L14 40 Z" />
    <rect x="20" y="52" width="6" height="32" rx="2" />
    <rect x="30" y="54" width="6" height="30" rx="2" />
    <rect x="54" y="54" width="6" height="30" rx="2" />
    <rect x="64" y="52" width="6" height="32" rx="2" />
  </>
);

const Fish = () => (
  <>
    <path d="M18 50 Q40 26 70 40 L90 26 L86 50 L90 74 L70 60 Q40 74 18 50 Z" />
    <circle cx="30" cy="47" r="3" fill="var(--tile)" />
  </>
);

const SHAPES = { chicken: Chicken, duck: Duck, turkey: Turkey, pig: Pig, cow: Cow, sheep: Sheep, goat: Goat, fish: Fish };

export function Animal({ shape, className, title }) {
  const Shape = SHAPES[shape];
  return (
    <svg viewBox="0 0 100 100" className={className} fill="currentColor" aria-hidden={title ? undefined : true} role={title ? "img" : undefined}>
      {title && <title>{title}</title>}
      <Shape />
    </svg>
  );
}
