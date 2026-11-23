import { ArrowRight, MapPinned } from "lucide-react";
import { UpcomingRides } from "./UpcomingRides";

export function RidesEventsPage({ onNavigate }) {
  return (
    <section className="rides-events-page">
      <section className="rides-hero">
        <div className="rides-hero-content">
          <p className="kicker">
            <span /> THE RIDE CALENDAR
          </p>
          <h1>
            CHASE THE
            <br />
            <i>HORIZON.</i>
          </h1>
          <p>
            From quick escapes to unforgettable weekends, every ride is a new
            story waiting to be written.
          </p>
          <button className="primary-button" onClick={() => onNavigate("home")}>
            Back to home <ArrowRight size={18} />
          </button>
        </div>
        <div className="rides-hero-mark">
          <MapPinned size={20} /> KARNATAKA / INDIA
        </div>
      </section>

      <UpcomingRides />

      <section className="rides-intro">
        <p className="section-label">RIDE WITH THE PACK</p>
        <h2>
          ONE ROAD.
          <br />
          <i>MANY STORIES.</i>
        </h2>
        <div className="rides-intro-copy">
          <p>
            There is always another turn to take. Join the Throttle Shifters
            pack for rides built around good roads, good people, and memories
            that last long after the engines cool.
          </p>
          <div className="ride-stats">
            <span>
              <strong>07</strong> RIDES AND COUNTING
            </span>
            <span>
              <strong>∞</strong> MILES TO GO
            </span>
          </div>
        </div>
      </section>

      <section className="rides-cta">
        <p className="section-label">READY WHEN YOU ARE</p>
        <h2>
          YOUR NEXT
          <br />
          <i>STORY STARTS HERE.</i>
        </h2>
        <button className="text-button" onClick={() => onNavigate("contact")}>
          Talk to the pack <ArrowRight size={18} />
        </button>
      </section>
    </section>
  );
}
