import abcIndia from "../assets/partners logos/abc logo.png";
import torq99 from "../assets/partners logos/torq99.jpeg";

const partners = [
  { name: "Torq99", src: torq99 },
  { name: "ABC India", src: abcIndia },
];

export function TrustedPartners() {
  return (
    <section className="trusted-partners">
      <div className="trusted-partners-heading">
        <p className="section-label">THE ROADS TOGETHER </p>
        <h2>
          TRUSTED
          <br />
          <i>PARTNERS.</i>
        </h2>
        <p>
          GOOD RIDES. GREAT PARTNERS. STRONGER COMMUNITY. <br /> 
          We believe great
          communities grow stronger through great partnerships. We collaborate
          with brands that share our passion for riding, quality, adventure, and
          the biking community.
        </p>
      </div>
      <div className="partner-logos" aria-label="Trusted partners">
        {partners.map((partner) => (
          <div className="partner-logo-card" key={partner.name}>
            <img src={partner.src} alt={`${partner.name} logo`} />
          </div>
        ))}
      </div>
    </section>
  );
}
