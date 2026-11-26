export const GOOGLE_FORM_URL = 'https://forms.gle/oKjY3zW9uKN9NMzF9'

export const navItems = [
  { label: 'Home', path: 'home' },
  { label: 'Upcoming Rides', path: 'rides' },
  { label: 'Gallery', path: 'gallery' },
  { label: 'About us', path: 'about' },
  { label: 'Contact us', path: 'contact' },
  // { label: 'Partners', path: 'partners' },
]

export const pageCopy = {
  rides: { eyebrow: 'The next chapter', title: 'Chase the horizon.', text: 'From early-morning mountain runs to long weekends on the open road, every ride is an invitation to go further.' },
  gallery: { eyebrow: 'The ride diary', title: 'Stories in motion.', text: 'A placeholder for the roads we have taken, the people we have met, and the moments that stay with us long after the engine cools.' },
  about: { eyebrow: 'Our pack', title: 'Built by riders.\nBound by the road.', text: 'Throttle Shifters is a Karnataka-based biking community for people who believe the best memories begin when the city disappears in the mirrors.' },
  contact: { eyebrow: 'Stay in touch', title: 'Let’s talk\ntwo wheels.', text: 'Have a route in mind, want to collaborate, or simply want to say hello? This space will soon have all the ways to reach the pack.' },
  partners: { eyebrow: 'Ride with us', title: 'Stronger\ntogether.', text: 'A placeholder for the brands, creators, and communities helping us build better roads and bigger memories.' },
}

// Each ride owns its registration link and WhatsApp destination.
// Replace the joinFormUrl value with the ride's actual Google Form URL.
export const upcomingRides = [
  {
    id: 'year-end-ride-2026',
    title: 'Ride No. 7 — Year End Ride',
    date: 'December 27, 2026',
    route: 'BR Hills & K-Gudi Sightseeing',
    poster: 'year-end-ride',
    joinFormUrl: 'https://forms.gle/9ivVaAf8oq6n1zve7',
    whatsappUrl: 'https://wa.me/918073074480?text=Hi%20Throttle%20Shifters%2C%20I%20want%20to%20know%20more%20about%20the%20Year%20End%20Ride.',
  },
]
