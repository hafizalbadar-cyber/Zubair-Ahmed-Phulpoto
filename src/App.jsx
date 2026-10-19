import { useEffect, useState } from "react";
import { CONTACT, PROFILE, ROLES, GALLERY } from "./data";
import Icon from "./Icon";

const TOP = [
  ["about", "About"],
  ["roles", "Roles"],
  ["legacy", "Legacy"],
  ["gallery", "Gallery"],
  ["contact", "Contact"],
];
const BOTTOM = [
  ["top", "Home", "home"],
  ["roles", "Roles", "briefcase"],
  ["gallery", "Gallery", "image"],
  ["contact", "Contact", "phone"],
];
const wa = `https://wa.me/${CONTACT.phone}`;

function RoleCard({ r }) {
  const [more, setMore] = useState(false);
  return (
    <article className="rc">
      <div className="rh">
        <span className="ic"><Icon name={r.icon} /></span>
        <div>
          <span className="tag">{r.tag}</span>
          <h3>{r.title}</h3>
          <p className="org">{r.org}</p>
        </div>
      </div>
      <p className={more ? "" : "clamp"}>{r.text}</p>
      <button className="more" aria-expanded={more} onClick={() => setMore(!more)}>
        {more ? "Show less" : "Read more"}
      </button>
      {r.chips.length > 0 && (
        <ul className="chips">{r.chips.map((c) => <li key={c}>{c}</li>)}</ul>
      )}
    </article>
  );
}

export default function App() {
  const [active, setActive] = useState("top");

  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ["top", "about", "roles", "legacy", "gallery", "contact"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  const share = () => {
    const data = { title: PROFILE.name, text: `${PROFILE.name}, ${PROFILE.heroRole}`, url: location.href };
    if (navigator.share) navigator.share(data).catch(() => {});
    else navigator.clipboard?.writeText(location.href);
  };
  const cur = active === "about" ? "top" : active === "legacy" ? "roles" : active;

  const contact = [
    ["whatsapp", "WhatsApp", "Message now", wa],
    ["phone", "Phone", CONTACT.phoneLabel, `tel:+${CONTACT.phone}`],
    ["facebook", "Facebook", CONTACT.facebookName, CONTACT.facebook],
    ["map-marker", "Location", "Head Office", CONTACT.maps],
  ];

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>

      <header>
        <div className="wrap bar">
          <a className="brand" href="#top">Hafiz Zubair Ahmed Phulpoto</a>
          <nav aria-label="Main">
            <ul>
              {TOP.map(([id, label]) => (
                <li key={id}><a href={`#${id}`} className={active === id ? "on" : ""}>{label}</a></li>
              ))}
            </ul>
          </nav>
          <button className="share" aria-label="Share" onClick={share}><Icon name="share" /></button>
        </div>
      </header>

      <main id="main">
        <div id="top" className="hero">
          <div className="wrap">
            <div>
              <h1>{PROFILE.name}</h1>
              <p className="role"><b>{PROFILE.heroRole}</b>{PROFILE.heroRest}</p>
              <div className="cta">
                <a className="btn p" href="#contact">Get in touch</a>
                <a className="btn s" href="#roles">View his roles</a>
              </div>
            </div>
            <div className="pic">
              <img src="/images/portrait.webp" width="540" height="641" alt="Portrait of Hafiz Zubair Ahmed Phulpoto" fetchPriority="high" decoding="async" />
            </div>
          </div>
        </div>

        <section id="about">
          <div className="wrap two">
            <div>
              <p className="kick">About</p>
              <h2>{PROFILE.aboutTitle}</h2>
              <p className="lead">{PROFILE.about}</p>
            </div>
            <p className="quote">{PROFILE.quote}</p>
          </div>
        </section>

        <section id="roles" className="alt">
          <div className="wrap">
            <p className="kick">Roles</p>
            <h2>Seven Major roles in service of Khairpur</h2>
            <p className="lead">From peace and religion to education, farming and business, each role serves the people of Khairpur.</p>
            <div className="rg">{ROLES.map((r) => <RoleCard key={r.org} r={r} />)}</div>
          </div>
        </section>

        <section id="legacy">
          <div className="wrap two">
            <div>
              <p className="kick">Legacy</p>
              <h2>Carrying forward a legacy of service</h2>
            </div>
            <p className="lead">{PROFILE.legacy}</p>
          </div>
        </section>

        <section id="gallery" className="alt">
          <div className="wrap">
            <p className="kick">Gallery</p>
            <h2>Among the people</h2>
            <div className="gal">
              <figure className="a">
                <img src={GALLERY[0].src} width={GALLERY[0].w} height={GALLERY[0].h} loading="lazy" decoding="async" alt={GALLERY[0].alt} />
                <figcaption>{GALLERY[0].caption}</figcaption>
              </figure>
              <figure className="b">
                <img src={GALLERY[1].src} width={GALLERY[1].w} height={GALLERY[1].h} loading="lazy" decoding="async" alt={GALLERY[1].alt} style={{ height: "100%" }} />
                <figcaption>{GALLERY[1].caption}</figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="wrap">
            <p className="kick">Contact</p>
            <h2>Reach out</h2>
            <p className="lead">For meetings, community matters or media requests, contact the office directly.</p>
            <div className="contact">
              {contact.map(([icon, small, big, href]) => (
                <a key={small} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                  <span className="ic"><Icon name={icon} /></span>
                  <span><small>{small}</small><strong>{big}</strong></span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          <p>Hafiz Zubair Ahmed Phulpoto Sahib &middot; Khairpur, Sindh, Pakistan</p>
          <p>All rights are reserved.</p>
          <p>
            Designed &amp; Developed by{" "}
            <a href={`https://wa.me/${CONTACT.developerWhatsApp}`} target="_blank" rel="noopener noreferrer">{CONTACT.developerName}</a>
          </p>
        </div>
      </footer>

      <a className="fab" href={wa} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp"><Icon name="whatsapp" /></a>
      <nav className="bnav" aria-label="Quick navigation">
        {BOTTOM.map(([id, label, icon]) => (
          <a key={id} href={`#${id}`} className={cur === id ? "on" : ""} aria-current={cur === id ? "true" : undefined}>
            <span><Icon name={icon} /></span>{label}
          </a>
        ))}
      </nav>
    </>
  );
}
