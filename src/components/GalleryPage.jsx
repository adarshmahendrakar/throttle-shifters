import { ArrowLeft, X } from "lucide-react";
import { useState } from "react";

const communityImages = Object.entries(
  import.meta.glob("../assets/Community/*.{jpeg,jpg,png,webp}", {
    eager: true,
    import: "default",
    query: "?url",
  }),
)
  .sort(([first], [second]) =>
    first.localeCompare(second, undefined, { numeric: true }),
  )
  .map(([path, src]) => ({
    src,
    alt: path
      .split("/")
      .pop()
      .replace(/\.[^/.]+$/, "")
      .replace(/WhatsApp Image \d{4}-\d{2}-\d{2} at /, "Ride memory "),
  }));

export function GalleryPage({ onNavigate }) {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="gallery-page">
      <section className="gallery-hero">
        <div>
          <p className="kicker">
            <span /> THE RIDE DIARY
          </p>
          <h1>
            STORIES
            <br />
            <i>IN MOTION.</i>
          </h1>
          <p>Every road leaves a mark. Every ride leaves a story.</p>
          <button className="primary-button" onClick={() => onNavigate("home")}>
            <ArrowLeft size={18} /> Back to home
          </button>
        </div>
        <div className="gallery-count">
          {/* <strong>{String(communityImages.length).padStart(2, "0")}</strong> */}
          <span>
            MEMORIES
            <br />
            CAPTURED
          </span>
        </div>
      </section>

      <section className="gallery-archive">
        <div className="gallery-archive-heading">
          <p className="section-label">THE ARCHIVE</p>
          <h2>
            ROADS, RIDERS
            <br />
            <i>&amp; REASONS.</i>
          </h2>
          <p>
            A collection of the places we have explored, the people we have met,
            and the moments that keep us riding.
          </p>
        </div>
        <div className="gallery-archive-grid">
          {communityImages.map((image, index) => (
            <button
              className="gallery-archive-tile"
              key={image.src}
              onClick={() => setSelectedImage(image)}
              aria-label={`Open gallery image ${index + 1}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading={index < 6 ? "eager" : "lazy"}
              />
              <span>{String(index + 1).padStart(2, "0")}</span>
            </button>
          ))}
        </div>
      </section>

      {selectedImage && (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Expanded gallery image"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="gallery-lightbox-close"
            onClick={() => setSelectedImage(null)}
            aria-label="Close image"
          >
            <X size={24} />
          </button>
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
