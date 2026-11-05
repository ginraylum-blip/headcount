import { useEffect, useRef, useState } from "react";

// Re-renders every `ms` milliseconds and returns Date.now().
export function useNow(ms = 100) {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), ms);
    return () => clearInterval(id);
  }, [ms]);
  return now;
}

// Writes a 0–1 scroll progress for the element into a CSS variable, without
// re-rendering React. Modes:
//   "through": 0 as the element enters at the bottom, 1 as it leaves at the top
//   "exit":    0 while the element's top is at the top of the screen, 1 once it has scrolled out
//   "pin":     0 when the element's top reaches the top of the screen, 1 when its bottom
//              reaches the bottom (for tall elements that drive a sticky scene)
// `writeTo: "parent"` puts the variable on the parent so siblings can use it.
export function useScrollVar({ name = "--p", mode = "through", writeTo = "self" } = {}) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const target = writeTo === "parent" ? el.parentElement : el;
    let frame = 0;
    const update = () => {
      frame = 0;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      let p;
      if (mode === "exit") p = -r.top / Math.max(1, r.height);
      else if (mode === "pin") p = -r.top / Math.max(1, r.height - vh);
      else p = (vh - r.top) / (vh + r.height);
      p = Math.min(1, Math.max(0, p));
      target.style.setProperty(name, p.toFixed(4));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [name, mode, writeTo]);
  return ref;
}

export const useScrollProgress = () => useScrollVar();

export function startOfToday(now) {
  const d = new Date(now);
  d.setHours(0, 0, 0, 0);
  return d.getTime();
}

export function startOfYear(now) {
  return new Date(new Date(now).getFullYear(), 0, 1).getTime();
}

const whole = new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 });
export const fmt = (n) => whole.format(Math.floor(n));

export function fmtDuration(seconds) {
  if (seconds < 1) return `${(seconds * 1000).toFixed(seconds < 0.01 ? 1 : 0)} milliseconds`;
  if (seconds < 60) return `${seconds.toFixed(seconds < 10 ? 1 : 0)} seconds`;
  return `${(seconds / 60).toFixed(1)} minutes`;
}

const big = new Intl.NumberFormat("en-US", { notation: "compact", maximumFractionDigits: 1 });
export const fmtBig = (n) => big.format(n);
