import { ArrowRight, X } from 'lucide-react'
import poster from '../assets/upcomingRidesPosters/Year-End Ride to BR Hills.png'
import { GOOGLE_FORM_URL, upcomingRides } from '../data/site'

export function UpcomingRideModal({ onClose, onNavigate }) {
  const ride = upcomingRides[0]

  return <div className="ride-modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="ride-modal-title" onClick={onClose}>
    <div className="ride-modal" onClick={(event) => event.stopPropagation()}>
      <button className="ride-modal-close" onClick={onClose} aria-label="Close upcoming ride announcement"><X size={22} /></button>
      <div className="ride-modal-header">
        <div><p className="section-label">WELCOME TO THROTTLE SHIFTERS</p><h2 id="ride-modal-title">JOIN THE<br /><i>COMMUNITY.</i></h2></div>
        <a className="primary-button ride-community-button" href={GOOGLE_FORM_URL} target="_blank" rel="noreferrer">Join the community <ArrowRight size={18} /></a>
      </div>
      <div className="ride-modal-scroll">
        <p className="ride-modal-kicker">UPCOMING RIDE</p>
        <img className="ride-modal-poster" src={poster} alt={`${ride.title} poster`} />
        <div className="ride-modal-details"><p className="ride-date">{ride.date}</p><h3>{ride.title}</h3><p className="ride-route">{ride.route}</p><p className="ride-modal-copy">The next story is waiting. Join the pack for a day of open roads, shared miles, and unforgettable memories.</p><button className="secondary-button ride-modal-rides-button" onClick={() => { onClose(); onNavigate('rides') }}>View upcoming rides <ArrowRight size={18} /></button><div className="ride-actions"><a className="primary-button" href={ride.joinFormUrl} target="_blank" rel="noreferrer">Join the ride <ArrowRight size={18} /></a><a className="secondary-button" href={ride.whatsappUrl} target="_blank" rel="noreferrer">Chat on WhatsApp</a></div></div>
      </div>
    </div>
  </div>
}
