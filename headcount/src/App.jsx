import { useMemo, useState } from "react";
import { LAND, WATER, OTHER, FILMS, FISH_PHOTO, FIELD_PHOTO, KILLED_GROUPS, ALL_PER_SECOND, SECONDS_PER_YEAR, perSecond } from "./data.js";
import { useNow, useScrollProgress, useScrollVar, startOfToday, startOfYear, fmt, fmtBig, fmtDuration } from "./hooks.js";
import BloodEdge from "./components/BloodEdge.jsx";
import ShackleLine from "./components/ShackleLine.jsx";
import { Animal } from "./components/Animals.jsx";
import { BOOKS } from "./books.js";
import { PAYPAL_URL, AMAZON_TAG, SITE_NAME } from "./config.js";

const LINE_LENGTH = 16;

export default function App() {
  const [openedAt] = useState(() => Date.now());

  return (
    <>
      <Hero openedAt={openedAt} />
      <main>
        {LAND.map((a) => (
          <SpeciesSection key={a.id} animal={a} openedAt={openedAt} />
        ))}
        <WaterSection openedAt={openedAt} />
        <Ledger openedAt={openedAt} />
        <Films />
        <Method />
        <Books />
        <Support />
      </main>
      <footer className="foot">
        <p>
          {SITE_NAME}. Figures are projections from annual statistics, recalculated in your browser.
        </p>
      </footer>
    </>
  );
}

function Hero({ openedAt }) {
  const now = useNow(50);
  const sinceMidnight = (now - startOfToday(now)) / 1000;
  const killed = fmt(sinceMidnight * ALL_PER_SECOND);
  const zone = useMemo(() => {
    try {
      return Intl.DateTimeFormat().resolvedOptions().timeZone.replace(/_/g, " ");
    } catch {
      return "";
    }
  }, []);

  const ref = useScrollVar({ mode: "exit" });

  return (
    <header className="hero" ref={ref}>
      <BloodEdge />
      <div className="hero-inner">
        <p className="wordmark">{SITE_NAME}</p>
        <p className="hero-lede">Since midnight today{zone && ` in ${zone}`}</p>
        <p className="hero-count" style={{ "--len": killed.length }}>
          {killed}
        </p>
        <h1 className="hero-title">animals have been killed for food.</h1>
        <ul className="hero-breakdown">
          {KILLED_GROUPS.map((g) => (
            <li key={g.label}>
              <span className="hb-num">{fmt(sinceMidnight * perSecond(g.annual))}</span> {g.label}
            </li>
          ))}
        </ul>
        <p className="hero-sub">
          About {fmt(ALL_PER_SECOND)} every second. {fmt(((now - openedAt) / 1000) * ALL_PER_SECOND)} since you
          opened this page.
        </p>
        <p className="hero-links">
          <a href="#watch">Watch</a>
          <a href="#reading">Further reading</a>
          <a href="#support">Donate</a>
        </p>
      </div>
      <p className="hero-disclaimer">
        These are projections, not live counts. Each figure spreads a published annual total evenly across the year,
        starting from midnight on your device’s clock. Fish, shrimp and crab numbers are estimated from tonnes caught or
        farmed, so they are far less certain than the land animal counts.
      </p>
    </header>
  );
}

function Counts({ annual, openedAt, now }) {
  const rate = perSecond(annual);
  return (
    <dl className="counts">
      <div>
        <dt>Since you arrived</dt>
        <dd className="count-main">{fmt(((now - openedAt) / 1000) * rate)}</dd>
      </div>
      <div>
        <dt>Today so far</dt>
        <dd>{fmt(((now - startOfToday(now)) / 1000) * rate)}</dd>
      </div>
      <div>
        <dt>This year so far</dt>
        <dd>{fmt(((now - startOfYear(now)) / 1000) * rate)}</dd>
      </div>
      <div>
        <dt>Per year</dt>
        <dd>{fmtBig(annual)}</dd>
      </div>
    </dl>
  );
}

function Credit({ photo }) {
  return (
    <span className="credit">
      Photo: {photo.credit},{" "}
      <a href={photo.page} target="_blank" rel="noreferrer">
        {photo.license}
      </a>
    </span>
  );
}

function LifeBars({ life, name }) {
  const share = (life.killedAt / life.natural) * 100;
  const shareText = share < 10 ? share.toFixed(1) : Math.round(share);
  return (
    <>
      <div
        className="lifebar"
        role="img"
        aria-label={`${name} can live ${life.naturalLabel}. They are killed at ${life.killedLabel}, ${shareText}% of a natural life.`}
      >
        <div className="lifebar-row">
          <span className="lifebar-label">Could live</span>
          <span className="lifebar-track">
            <span className="lifebar-fill natural" />
          </span>
          <span className="lifebar-value">{life.naturalLabel}</span>
        </div>
        <div className="lifebar-row">
          <span className="lifebar-label">Is killed at</span>
          <span className="lifebar-track">
            <span className="lifebar-fill killed" style={{ width: `${Math.max(share, 0.8)}%` }} />
          </span>
          <span className="lifebar-value">{life.killedLabel}</span>
        </div>
      </div>
      <p className="lifebar-share">That is {shareText}% of a natural life.</p>
    </>
  );
}

// Each animal is a three-part scene: their photo pins to the screen, the story
// scrolls up over it while the colour drains out, then the kill floor slides
// up and covers the photo.
function SpeciesSection({ animal, openedAt }) {
  const copyRef = useScrollVar({ name: "--f", mode: "pin", writeTo: "parent" });
  const floorRef = useScrollVar();
  const now = useNow(100);
  const rate = perSecond(animal.annual);
  const lineSpan = LINE_LENGTH / rate;
  const { photo, life } = animal;

  return (
    <section className={`species species-${animal.shape}`} aria-labelledby={`${animal.id}-h`}>
      <div className="field-photo">
        <img src={photo.src} alt={photo.alt} loading="lazy" style={{ objectPosition: photo.focus }} />
        <Credit photo={photo} />
      </div>
      <div className="field-copy" ref={copyRef}>
        <div className="field-copy-inner">
          <h2 id={`${animal.id}-h`}>{animal.name}</h2>
          <p className="field-fact">{life.fact}</p>
          <LifeBars life={life} name={animal.name} />
        </div>
      </div>
      <div className="floor" ref={floorRef}>
        <p className="floor-head">
          {animal.name} {animal.verb}
        </p>
        <Counts annual={animal.annual} openedAt={openedAt} now={now} />
        <ShackleLine shape={animal.shape} count={LINE_LENGTH} />
        <p className="caption">
          The {LINE_LENGTH} {animal.name.toLowerCase()} on this line are the last {fmtDuration(lineSpan)}.{" "}
          <a href={animal.source.url} target="_blank" rel="noreferrer">
            {animal.source.name}
          </a>
        </p>
      </div>
    </section>
  );
}

function WaterSection({ openedAt }) {
  const ref = useScrollProgress();
  const now = useNow(100);
  const fish = useMemo(
    () =>
      Array.from({ length: 72 }, (_, i) => ({
        x: (i * 37) % 100,
        y: ((i * 53) % 60) - 10,
        s: 0.6 + ((i * 17) % 10) / 14,
        r: ((i * 29) % 40) - 20,
        fall: 30 + ((i * 41) % 70),
        flip: i % 3 === 0,
      })),
    []
  );

  return (
    <section className="water" ref={ref} aria-labelledby="water-h">
      <div className="net" aria-hidden="true">
        {fish.map((f, i) => (
          <span
            key={i}
            className="fish"
            style={{
              "--x": `${f.x}%`,
              "--y": `${f.y}%`,
              "--s": f.s,
              "--r": `${f.r}deg`,
              "--fall": `${f.fall}vh`,
              "--flip": f.flip ? -1 : 1,
            }}
          >
            <Animal shape="fish" />
          </span>
        ))}
      </div>
      <div className="water-inner">
        <h2 id="water-h">In the water</h2>
        <p className="water-lede">
          Fish are counted by the tonne, so these numbers are estimates converted from weight, with wide error bars. They
          are still the largest numbers on this page.
        </p>
        <figure className="water-photo">
          <img src={FISH_PHOTO.src} alt={FISH_PHOTO.alt} loading="lazy" />
          <figcaption>
            Fish have pain receptors and change their behaviour after injury. Most are counted only by weight.
            <Credit photo={FISH_PHOTO} />
          </figcaption>
        </figure>
        <div className="water-list">
          {WATER.map((w) => (
            <article key={w.id} className="water-item">
              <h3>{w.name}</h3>
              <p className="water-verb">{w.verb}</p>
              <Counts annual={w.annual} openedAt={openedAt} now={now} />
              <a href={w.source.url} target="_blank" rel="noreferrer">
                {w.source.name}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Ledger({ openedAt }) {
  const now = useNow(100);
  const seconds = (now - openedAt) / 1000;
  return (
    <section className="ledger" aria-labelledby="ledger-h">
      <h2 id="ledger-h">Alongside the meat</h2>
      <div className="ledger-scroll">
        <table>
          <thead>
            <tr>
              <th scope="col">What</th>
              <th scope="col" className="num">Since you arrived</th>
              <th scope="col" className="num">Per year</th>
              <th scope="col">Source</th>
            </tr>
          </thead>
          <tbody>
            {OTHER.map((o) => (
              <tr key={o.id}>
                <th scope="row">{o.name}</th>
                <td className="num">
                  {fmt(seconds * perSecond(o.annual))} <span className="unit">{o.unit}</span>
                </td>
                <td className="num">{fmtBig(o.annual)}</td>
                <td>
                  <a href={o.source.url} target="_blank" rel="noreferrer">
                    {o.source.name}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function Films() {
  const ref = useScrollVar();
  return (
    <section className="films" id="watch" aria-labelledby="films-h" ref={ref}>
      <div className="films-bg" aria-hidden="true">
        <div className="films-bg-pin">
          <img src={FIELD_PHOTO.src} alt="" loading="lazy" />
        </div>
      </div>
      <h2 id="films-h">See where it happens</h2>
      <p className="films-lede">
        The numbers on this page come from places most people never see. These full-length documentaries are free to
        watch.
      </p>
      <p className="films-warning" role="note">
        These films show slaughter and life inside farms, filmed largely with hidden cameras. Many people find them
        distressing. Dominion’s makers keep a{" "}
        <a href="https://dominionmovement.com/self-care" target="_blank" rel="noreferrer">
          self-care page
        </a>{" "}
        for viewers.
      </p>
      <ul className="film-list">
        {FILMS.map((f) => (
          <li key={f.title} className="film">
            <div className="film-head">
              <h3>{f.title}</h3>
              <p className="film-meta">
                {f.year}, {f.place}, {f.length}
              </p>
            </div>
            <p className="film-about">{f.about}</p>
            <a className="film-link" href={f.url} target="_blank" rel="noreferrer">
              {f.action}
            </a>
          </li>
        ))}
      </ul>
      <p className="films-credit">
        <Credit photo={FIELD_PHOTO} />
      </p>
    </section>
  );
}

function Method() {
  return (
    <section className="prose" id="method" aria-labelledby="method-h">
      <h2 id="method-h">How the numbers work</h2>
      <p>
        Each counter takes one published annual total and divides it by the {fmt(SECONDS_PER_YEAR)} seconds in an
        average year. Every tenth of a second your browser multiplies that rate by the time elapsed. Nothing is
        fetched live, and no slaughterhouse reports in real time.
      </p>
      <p>
        That means the counters are smooth where reality is lumpy. Slaughter stops on weekends in some places, spikes
        before holidays in others, and fishing follows seasons. The yearly totals are right; the second-by-second
        rhythm is an average.
      </p>
      <p>
        Land animal figures are head counts from FAOSTAT. Aquatic figures are estimated by converting tonnes caught or
        farmed into individuals using average body weights, so treat them as orders of magnitude.
      </p>
    </section>
  );
}

function amazonLink(url) {
  if (!AMAZON_TAG) return url;
  const u = new URL(url);
  u.searchParams.set("tag", AMAZON_TAG);
  return u.toString();
}

function Books() {
  const categories = [...new Set(BOOKS.map((b) => b.category))];
  return (
    <section className="books" id="reading" aria-labelledby="books-h">
      <h2 id="books-h">Further reading</h2>
      <p className="books-lede">
        Books on where food comes from, what it costs the planet, and how to read numbers like the ones above.
      </p>
      {categories.map((cat) => (
        <div className="shelf" key={cat}>
          <h3>{cat}</h3>
          <ul className="shelf-row">
            {BOOKS.filter((b) => b.category === cat).map((b) => (
              <li className="book" key={b.title}>
                <a href={amazonLink(b.amazonUrl)} target="_blank" rel="noreferrer sponsored">
                  <img src={b.cover} alt={`Cover of ${b.title}`} loading="lazy" width="160" height="240" />
                  <span className="book-title">{b.title}</span>
                </a>
                <span className="book-author">{b.author}</span>
                <p className="book-desc">{b.description}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <p className="disclosure">
        Some links are Amazon affiliate links. If you buy through them, the site may earn a small commission at no extra
        cost to you.
      </p>
    </section>
  );
}

function Support() {
  return (
    <section className="prose support" id="support" aria-labelledby="support-h">
      <h2 id="support-h">Donate</h2>
      <p>
        {SITE_NAME} is built and maintained by one person. Donations pay for hosting and the time it takes to
        keep the data current, and help put these numbers in front of more people. The site stays free either way.
      </p>
      <a className="support-link" href={PAYPAL_URL} target="_blank" rel="noreferrer">
        Donate with PayPal
      </a>
    </section>
  );
}
