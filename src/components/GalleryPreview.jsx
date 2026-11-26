import { ArrowRight, X } from "lucide-react";
import { useEffect, useState } from "react";

const allGalleryImages = Object.entries(
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

function shuffleImages(images) {
  return [...images].sort(() => Math.random() - 0.5).slice(0, 6);
}

export function GalleryPreview({ onNavigate }) {
  const [galleryImages, setGalleryImages] = useState(() =>
    shuffleImages(allGalleryImages),
  );
  const [shuffleVersion, setShuffleVersion] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const shuffleTimer = window.setInterval(() => {
      setGalleryImages(shuffleImages(allGalleryImages));
      setShuffleVersion((version) => version + 1);
    }, 5000);

    return () => window.clearInterval(shuffleTimer);
  }, []);

  useEffect(() => {
    if (!selectedImage) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") setSelectedImage(null);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedImage]);

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
          <button
            className="gallery-tile"
            key={`${image.src}-${shuffleVersion}`}
            style={{ "--gallery-tile-index": index }}
            onClick={() => setSelectedImage(image)}
            aria-label={`Open ${image.alt}`}
          >
            <img src={image.src} alt={image.alt} loading="lazy" />
          </button>
        ))}
      </div>

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
