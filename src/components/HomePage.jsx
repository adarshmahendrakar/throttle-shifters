import { ArrowRight, ChevronDown } from "lucide-react";
import { GOOGLE_FORM_URL } from "../data/site";
import { AboutSection } from "./AboutSection";
import { CommunitySection } from "./CommunitySection";
import { GalleryPreview } from "./GalleryPreview";
import { TrustedPartners } from "./TrustedPartners";
import { UpcomingRides } from "./UpcomingRides";

export function HomePage({ onNavigate }) {
  return (
    <section className="home-page">
      <section className="hero">
        <div className="hero-noise" />
        <div className="hero-content">
          <p className="kicker">
            <span /> KARNATAKA'S RIDING COMMUNITY
          </p>
          <h1>
            WHERE
            <br />
            <span>BROTHERHOOD</span>
            <br />
            BEGINS<span className="dot">.</span>
          </h1>
          <p className="hero-copy hero-tagline">
            Miles. Memories. Brotherhood.
          </p>
          <p className="hero-support">
            Not just a destination.
            <br />
            It’s a feeling you earn mile by mile.
          </p>
          <div className="hero-actions">
            <button
              className="primary-button"
              onClick={() => onNavigate("rides")}
            >
              Explore the rides <ArrowRight size={18} />
            </button>
            <button className="text-button" onClick={() => onNavigate("about")}>
              Our story <ChevronDown size={17} />
            </button>
          </div>
        </div>
        <HeroBackdrop />
        <div className="scroll-cue">
          <span /> SCROLL TO EXPLORE
        </div>
      </section>
      <section className="intro-strip welcome-section">
        <div
          className="welcome-visual"
          role="img"
          aria-label="A group of motorcyclists riding together on an open road"
        />
        <div>
          <p className="welcome-kicker">WELCOME TO</p>
          <h2>
            THROTTLE SHIFTERS
            <br />
            <i>BIKING COMMUNITY</i>
          </h2>
          <h3>THE BROTHERHOOD BEGINS.</h3>
          <p>
            More than a ride. More than a destination.
            <br />A community built on passion, brotherhood, and the love of the
            road.
            <br />
            Ride with us, make memories, and find your people beyond the next
            turn.
          </p>
          <div className="welcome-actions">
            <button
              className="primary-button"
              onClick={() => onNavigate("about")}
            >
              Know more <ArrowRight size={18} />
            </button>
            <button
              className="primary-button"
              onClick={() => onNavigate("rides")}
            >
              Explore our rides <ArrowRight size={18} />
            </button>

            <a
              className="primary-button"
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noreferrer"
            >
              Become a Shifter <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
      <AboutSection onNavigate={onNavigate} />
      <UpcomingRides />
      <CommunitySection />
      <GalleryPreview onNavigate={onNavigate} />
      <TrustedPartners />
    </section>
  );
}

function HeroBackdrop() {
  return (
    <div className="hero-bike" aria-hidden="true">
      <div className="sun" />
      <div className="mountains mountain-one" />
      <div className="mountains mountain-two" />
      <div className="road" />
      <div className="bike-silhouette">
        <span className="wheel wheel-left" />
        <span className="wheel wheel-right" />
        <span className="frame" />
        <span className="rider" />
      </div>
      <div className="coordinates">12° 58' N &nbsp; 77° 35' E</div>
    </div>
  );
}
