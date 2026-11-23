import communityImage from '../assets/imgs/Sunset Riders, One Brotherhood.png'

export function CommunitySection() {
  return <section className="community-section">
    <div className="community-visual"><img src={communityImage} alt="Throttle Shifters riders watching the sunset together" /></div>
    <div className="community-content">
      <p className="welcome-kicker">THE HEART OF THROTTLE SHIFTERS</p>
      <h2>DIFFERENT RIDERS.<br /><i>ONE BROTHERHOOD.</i></h2>
      <p>We come from different backgrounds, ride different machines, and follow different paths. But when the engines start, we share one thing — the love for the ride.</p>
      <p>At Throttle Shifters, no one is just another rider. Every member is part of the journey, the memories, and the brotherhood we continue to build.</p>
      <p className="community-close">The road brings us together.<br /><strong>Brotherhood keeps us together.</strong></p>
    </div>
  </section>
}
