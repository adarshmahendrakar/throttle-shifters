import { ArrowRight, ShieldCheck } from "lucide-react";
import { GOOGLE_FORM_URL } from "../data/site";
import mountainRide from "../assets/Community/WhatsApp Image 2026-11-24 at 2.55.08 AM.jpeg";
import groupRide from "../assets/Community/WhatsApp Image 2026-11-24 at 3.01.26 AM.jpeg";
import forestBikes from "../assets/Community/WhatsApp Image 2026-11-24 at 3.16.39 AM.jpeg";
import bannerRide from "../assets/Community/WhatsApp Image 2026-11-24 at 3.13.15 AM.jpeg";
import roadRide from "../assets/Community/WhatsApp Image 2026-11-24 at 3.09.43 AM.jpeg";
import beachRide from "../assets/Community/WhatsApp Image 2026-11-24 at 3.19.01 AM.jpeg";
import adarshPhoto from "../assets/admins/WhatsApp Image 2026-11-24 at 4.24.09 AM.jpeg";
import sagarPhoto from "../assets/admins/WhatsApp Image 2026-11-24 at 4.26.06 AM.jpeg";
import ganeshPhoto from "../assets/admins/WhatsApp Image 2026-11-24 at 4.26.45 AM.jpeg";
import abhishekPhoto from "../assets/admins/abhishek-placeholder.jpeg";
import nikhilPhoto from "../assets/admins/nikhil-placeholder.svg";

const values = [
  {
    title: "BROTHERHOOD",
    text: "The best rides are shared. We stand by each other on and off the road, building friendships that go beyond motorcycles.",
    image: groupRide,
  },
  {
    title: "DISCIPLINE & SAFETY",
    text: "The thrill of riding comes with responsibility. We respect the road, ride responsibly, and prioritize every rider’s safety.",
    image: roadRide,
    icon: true,
  },
  {
    title: "ADVENTURE",
    text: "There is always another road to explore, another place to discover, and another experience waiting for us.",
    image: mountainRide,
  },
  {
    title: "RESPECT & UNITY",
    text: "Different styles, motorcycles, experiences, and perspectives — united by our shared love for riding.",
    image: bannerRide,
  },
  {
    title: "MEMORIES & EXPERIENCES",
    text: "We ride to experience more than roads. We create stories and share moments that stay with us for a lifetime.",
    image: beachRide,
  },
];

const admins = [
  { name: "Adarsh", handle: "@tripping_hunt", role: "Founder", caption: "Corner & Sweep Captain", image: adarshPhoto },
  { name: "Sagar", handle: "@j.v.sagar", role: "Co-Founder", caption: "Road Captain", image:ganeshPhoto  },
  { name: "Pavan Ganesh", handle: "@pavan_ganesh", role: "Admin", caption: "Lead Captain", image: sagarPhoto },
  { name: "Abhishek", handle: "@abinb15", role: "Media Admin", caption: "Capturing the ride stories", image: abhishekPhoto },
  { name: "Nikhil", handle: "@nikhil_n_murthy_", role: "YouTube Admin", caption: "Turning miles into memories", image: nikhilPhoto },
];

export function AboutPage({ onNavigate }) {
  return (
    <section className="about-page">
      <section className="about-page-hero">
        <div>
          <p className="kicker">
            <span /> ABOUT THROTTLE SHIFTERS
          </p>
          <h1>
            WE RIDE FOR THE JOURNEY.
            <br />
            <i>WE STAY FOR THE BROTHERHOOD.</i>
          </h1>
          <p>
            A shared passion for motorcycles. A bond built on the road. A
            community that goes beyond the ride.
          </p>
        </div>
        <div
          className="about-hero-photo"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(10,10,10,.08), rgba(10,10,10,.72)), url("${mountainRide}")`,
          }}
        />
      </section>

      <section className="about-story-block about-who-we-are">
        <div
          className="about-story-image"
          style={{ backgroundImage: `url("${groupRide}")` }}
        />
        <div className="about-story-copy">
          <p className="section-label">WHO WE ARE</p>
          <h2>
            MORE THAN JUST A<br />
            <i>RIDING COMMUNITY.</i>
          </h2>
          <p>
            Throttle Shifters is a motorcycle community built around the passion
            for riding, the spirit of adventure, and the bond between riders.
          </p>
          <p>
            We bring together people from different backgrounds, different
            journeys, and different machines, united by one common passion — the
            love for the road.
          </p>
          <p>
            From early morning rides and weekend escapes to long-distance
            adventures and unforgettable experiences, we believe every ride has
            something to offer and every rider has a story worth sharing.
          </p>
          <p>
            We are here to explore, connect, support, and create memories that
            last long after the ride ends.
          </p>
          <strong>
            We are Throttle Shifters. And this is more than riding.
          </strong>
        </div>
      </section>

      <section className="about-story-block about-our-story">
        <div className="about-story-copy">
          <p className="section-label">OUR STORY</p>
          <h2>
            IT STARTED WITH A PASSION.
            <br />
            <i>IT GREW INTO A BROTHERHOOD.</i>
          </h2>
          <p>
            Every great journey starts somewhere. Ours starts with the sound of
            engines, the excitement of an open road, and the feeling of being
            surrounded by people who share the same passion.
          </p>
          <p>
            What brings us together isn’t the motorcycle we ride, the distance
            we cover, or the destination we reach. It’s the connection we build
            along the way.
          </p>
          <p>
            Every ride adds a memory. Every road introduces a new experience.
            Every member adds something unique to the community.
          </p>
          <p>And as the miles continue, so does our story.</p>
        </div>
        <div
          className="about-story-image"
          style={{ backgroundImage: `url("${forestBikes}")` }}
        />
      </section>

      <section className="about-admins">
        <div className="about-admin-heading">
          <p className="section-label">THE PEOPLE BEHIND THE PACK</p>
          <h2>ADMINS OF<br /><i>THROTTLE SHIFTERS.</i></h2>
          <p>Meet the riders who keep the community moving, connected, and growing with every mile.</p>
        </div>
        <div className="about-admin-grid">
          {admins.map((admin) => <article className="about-admin-card" key={admin.name}>
            <div className="about-admin-photo"><img src={admin.image} alt={`${admin.name}, ${admin.role}`} /></div>
            <div className="about-admin-info"><h3>{admin.name}</h3><a href={`https://www.instagram.com/${admin.handle.slice(1)}`} target="_blank" rel="noreferrer">{admin.handle}</a><p>{admin.role}</p><span>{admin.caption}</span></div>
          </article>)}
        </div>
      </section>

      <section className="about-values">
        <div className="about-section-heading">
          <p className="section-label">WHAT WE STAND FOR</p>
          <h2>
            THE VALUES
            <br />
            <i>WE RIDE BY.</i>
          </h2>
        </div>
        <div className="about-values-grid">
          {values.map((value) => (
            <article
              className="about-value-card"
              key={value.title}
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(0,0,0,.08), rgba(0,0,0,.9)), url("${value.image}")`,
              }}
            >
              <div>
                <p>
                  {value.icon && <ShieldCheck size={16} />} {value.title}
                </p>
                <span>{value.text}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-mission-vision">
        <div>
          <p className="section-label">OUR MISSION</p>
          <h2>
            BRING RIDERS TOGETHER.
            <br />
            <i>MAKE EVERY RIDE MEAN SOMETHING.</i>
          </h2>
          <p>
            Our mission is to build a strong, welcoming, and disciplined
            motorcycle community where riders connect through shared
            experiences, explore new destinations, and create meaningful bonds.
          </p>
          <p>
            We aim to make every ride more than just a journey from one place to
            another — an opportunity to build friendships, discover new roads,
            encourage responsible riding, and strengthen the spirit of
            brotherhood.
          </p>
        </div>
        <div>
          <p className="section-label">OUR VISION</p>
          <h2>
            A BROTHERHOOD THAT
            <br />
            <i>GROWS WITH EVERY MILE.</i>
          </h2>
          <p>
            We envision Throttle Shifters becoming a recognized riding community
            where the spirit of brotherhood, responsible riding, adventure, and
            togetherness continues to grow.
          </p>
          <p>
            A community where riders feel welcomed, journeys are celebrated,
            friendships are built, and the passion for riding brings people
            together wherever the road takes us.
          </p>
        </div>
      </section>

      <section
        className="about-philosophy"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(8,8,8,.92), rgba(8,8,8,.4)), url("${roadRide}")`,
        }}
      >
        <div>
          <p className="section-label">OUR RIDING PHILOSOPHY</p>
          <h2>
            RIDE WITH PASSION.
            <br />
            <i>RIDE WITH PURPOSE.</i>
          </h2>
          <p>
            We don’t believe riding is about proving who’s faster or who owns
            the biggest machine. It’s about enjoying the journey, respecting the
            road, and making sure everyone gets home safely.
          </p>
          <p>
            We ride with discipline, look out for one another, respect fellow
            road users, and never leave a rider behind when they need support.
          </p>
          <strong>
            Because the best ride isn’t measured by speed — it’s measured by the
            memories we make and the people we ride with.
          </strong>
        </div>
      </section>

      <section className="about-closing">
        <p className="section-label">THROTTLE SHIFTERS</p>
        <h2>
          THE BROTHERHOOD
          <br />
          <i>BEGINS.</i>
        </h2>
        <p>
          Different roads. Different stories. One community. One brotherhood.
        </p>
        <div className="about-closing-lines">
          <span>WE RIDE TOGETHER.</span>
          <span>WE GROW TOGETHER.</span>
          <span>WE STAY TOGETHER.</span>
        </div>
        <a
          className="primary-button"
          href={GOOGLE_FORM_URL}
          target="_blank"
          rel="noreferrer"
        >
          Join the community <ArrowRight size={18} />
        </a>
        <button className="text-button" onClick={() => onNavigate("home")}>
          Back to home <ArrowRight size={18} />
        </button>
      </section>
    </section>
  );
}
