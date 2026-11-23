import { ArrowRight } from "lucide-react";
import mountainRide from "../assets/Community/WhatsApp Image 2026-11-24 at 2.54.23 AM.jpeg";
import rockyRide from "../assets/Community/WhatsApp Image 2026-11-24 at 2.55.29 AM.jpeg";
import groupRide from "../assets/Community/WhatsApp Image 2026-11-24 at 3.01.26 AM.jpeg";
import bikeLineup from "../assets/Community/WhatsApp Image 2026-11-24 at 3.09.24 AM.jpeg";
import bannerRide from "../assets/Community/WhatsApp Image 2026-11-24 at 3.13.15 AM.jpeg";
import beachRide from "../assets/Community/WhatsApp Image 2026-11-24 at 3.19.01 AM.jpeg";

const galleryImages = [
  { src: mountainRide, alt: "Throttle Shifters riders on a mountain trail" },
  {
    src: rockyRide,
    alt: "Throttle Shifters riders with motorcycles on rocky terrain",
  },
  { src: groupRide, alt: "Throttle Shifters group holding the club flag" },
  { src: bikeLineup, alt: "Throttle Shifters motorcycles lined up for a ride" },
  {
    src: bannerRide,
    alt: "Throttle Shifters riders posing with the club banner",
  },
  { src: beachRide, alt: "Throttle Shifters motorcycles beside the sea" },
];

export function GalleryPreview({ onNavigate }) {
  return (
    <section className="gallery-preview">
      <div className="gallery-heading">
        <p className="section-label">THE RIDE DIARY</p>
        <h2>
          OUR RIDE
          <br />
          <i>MEMORIES.</i>
        </h2>
        <p>Every road leaves a mark. Every ride leaves a story.</p>
        <button
          className="primary-button"
          onClick={() => onNavigate("gallery")}
        >
          Explore the gallery <ArrowRight size={18} />
        </button>
      </div>
      <div className="gallery-grid">
        {galleryImages.map((image, index) => (
          <div className="gallery-tile" key={`${image.alt}-${index}`}>
            <img src={image.src} alt={image.alt} loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  );
}
