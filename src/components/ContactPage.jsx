import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react'

const phoneContacts = [
  { name: 'Adarsh', number: '+91 8073074480', href: 'tel:+918073074480' },
  { name: 'Sagar', number: '+91 96866 14137', href: 'tel:+919686614137' },
  { name: 'Ganesh', number: '+91 70903 45459', href: 'tel:+917090345459' },
]

export function ContactPage({ onNavigate }) {
  return <section className="contact-page">
    <section className="contact-hero">
      <p className="kicker"><span /> STAY IN TOUCH</p>
      <h1>LET’S TALK<br /><i>TWO WHEELS.</i></h1>
      <p>Have a route in mind, want to collaborate, or simply want to say hello? Reach out to the pack.</p>
    </section>

    <section className="contact-details">
      <div className="contact-intro">
        <p className="section-label">CONTACT THE PACK</p>
        <h2>THE ROAD IS<br /><i>ALWAYS OPEN.</i></h2>
        <p>Whether you are looking to join a ride, connect with fellow riders, or build something together, we would love to hear from you.</p>
        <button className="text-button" onClick={() => onNavigate('rides')}>See upcoming rides <ArrowRight size={18} /></button>
      </div>
      <div className="contact-cards">
        <div className="contact-card"><MapPin size={21} /><div><p className="contact-card-label">ADDRESS</p><p>Bangalore, Karnataka, India</p></div></div>
        <div className="contact-card"><Mail size={21} /><div><p className="contact-card-label">EMAIL</p><a href="mailto:throttleshifters2026@gmail.com">throttleshifters2026@gmail.com</a></div></div>
        <div className="contact-card contact-phone-card"><Phone size={21} /><div><p className="contact-card-label">PHONE</p>{phoneContacts.map((contact) => <a key={contact.name} href={contact.href}><strong>{contact.name}</strong><span>{contact.number}</span></a>)}</div></div>
        <div className="contact-card"><div className="contact-social-icons"><span>◎</span><span>▶</span></div><div><p className="contact-card-label">FOLLOW US</p><div className="contact-social-links"><a href="https://www.instagram.com/throttleshifters?fqnt=NGJucW9ueGN3YnJo&utm_source=qr" target="_blank" rel="noreferrer">Instagram <span>@throttleshifters</span></a><a href="https://youtube.com/@throttleshiftersofficial?si=NFcR6hvCzmGoNXFD" target="_blank" rel="noreferrer">YouTube <span>Throttle Shifters</span></a></div></div></div>
      </div>
    </section>

    <section className="contact-closing"><p className="section-label">THROTTLE SHIFTERS / KARNATAKA, INDIA</p><h2>EVERY GOOD<br /><i>JOURNEY STARTS</i><br />WITH A HELLO.</h2><a className="primary-button" href="mailto:throttleshifters2026@gmail.com">Send us an email <ArrowRight size={18} /></a></section>
  </section>
}
