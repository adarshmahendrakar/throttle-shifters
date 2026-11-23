import { ArrowRight, MessageCircle } from "lucide-react";
import poster from "../assets/upcomingRidesPosters/Year-End Ride to BR Hills.png";
import { upcomingRides } from "../data/site";

const posterByRide = { "year-end-ride": poster };

export function UpcomingRides() {
  return (
    <section className="upcoming-rides" id="upcoming-rides">
      <div className="upcoming-heading">
        <h2>
          TSK <i>UPCOMING</i>
          <br />
          RIDES.
        </h2>
        <p>Pick a road. Bring your people. Let the next story begin.</p>
      </div>
      <div className="ride-list">
        {upcomingRides.map((ride) => (
          <article className="ride-card" key={ride.id}>
            <img
              className="ride-poster"
              src={posterByRide[ride.poster]}
              alt={`${ride.title} poster`}
            />
            <div className="ride-details">
              <p className="ride-date">{ride.date}</p>
              <h3>{ride.title}</h3>
              <p className="ride-route">{ride.route}</p>
              <div className="ride-actions">
                <a
                  className="primary-button"
                  href={ride.joinFormUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Join the ride <ArrowRight size={18} />
                </a>
                <a
                  className="secondary-button"
                  href={ride.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle size={17} /> Chat on WhatsApp
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
