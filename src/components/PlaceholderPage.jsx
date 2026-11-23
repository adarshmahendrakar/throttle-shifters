import { ArrowRight } from "lucide-react";

export function PlaceholderPage({ copy, onNavigate }) {
  return (
    <section className="placeholder-page">
      <p className="kicker">
        <span /> {copy.eyebrow.toUpperCase()}
      </p>
      <h1>
        {copy.title.split("\n").map((line, index) => (
          <span key={line}>
            {line}
            {index === 0 && copy.title.includes("\n") ? <br /> : null}
          </span>
        ))}
      </h1>
      <p className="placeholder-copy">{copy.text}</p>
      <button className="primary-button" onClick={() => onNavigate("home")}>
        Back to home <ArrowRight size={18} />
      </button>
      <div className="page-number">PAGE / COMING SOON</div>
    </section>
  );
}
