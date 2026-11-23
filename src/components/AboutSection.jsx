import logo from "../assets/Logo/89D4AA06-811C-483D-8555-19D17C622C6F Background Removed.png";
import rideTogether from "../assets/imgs/Throttle Shifters_ Ride Together.png";

export function AboutSection({ onNavigate }) {
  return (
    <section className="about-section">
  
      <div className="about-content">
        <p className="welcome-kicker">ABOUT THROTTLE SHIFTERS</p>
        <h2>
          MORE THAN JUST A<br />
          <i>RIDING COMMUNITY.</i>
        </h2>
        <p>
          Throttle Shifters was born from a passion for motorcycles and a desire
          to bring riders together.
          <br />
          What started with a love for the ride has grown into a community where
          roads become memories, strangers become friends, and every journey
          brings us closer.
          <br />
          We ride together, explore together, support each other, and create
          stories that stay with us long after the engines go silent.
          <br />
          We're not just here to ride. We're here to belong.
        </p>
        <button className="primary-button" onClick={() => onNavigate("about")}>
          Our story <span aria-hidden="true">→</span>
        </button>
      </div>
          <div
        className="about-visuals"
        aria-label="Throttle Shifters riders and logo"
      >
        <div
          className="about-photo about-photo-main"
          role="img"
          aria-label="Throttle Shifters riders standing together on the road"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(10,10,10,.04), rgba(10,10,10,.8)), url("${rideTogether}")`,
          }}
        />
      </div>
    </section>
  );
}
