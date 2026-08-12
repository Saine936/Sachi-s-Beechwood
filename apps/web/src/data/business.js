// Edit business details here — used across the whole site.
export const business = {
  name: "Sachi's @ Beechwood",
  tagline: 'Your neighbourhood café on Beechwood',
  street: '18 Beechwood Ave., Unit 103',
  city: 'Ottawa',
  province: 'Ontario',
  postalCode: 'K1M 2H9',
  phoneDisplay: '(613) 291-0740',
  phoneHref: 'tel:+16132910740',
  email: 'hello@sachisbeechwood.ca',
  priceRange: '$10–20 per person',
  rating: '4.4',
  reviewCount: '106',
  mapsEmbed:
    'https://www.google.com/maps?q=18+Beechwood+Ave+Unit+103+Ottawa+ON+K1M+2H9&output=embed',
  mapsLink:
    'https://www.google.com/maps/search/?api=1&query=18+Beechwood+Ave+Unit+103+Ottawa+ON+K1M+2H9',
  directions:
    'https://www.google.com/maps/dir/?api=1&destination=18+Beechwood+Ave+Unit+103+Ottawa+ON+K1M+2H9',
  // Replace with the café's real Google review URLs when available.
  googleReviews: 'https://www.google.com/maps/search/?api=1&query=Sachi%27s+Beechwood+Ottawa',
  writeReview: 'https://www.google.com/maps/search/?api=1&query=Sachi%27s+Beechwood+Ottawa',
  social: {
   
    facebook: 'https://www.facebook.com/profile.php?id=61582266736234#', // TODO: add real Facebook URL
  },
  
hours: [
  { day: 'Monday', time: '7:00 AM–7:00 PM' },
  { day: 'Tuesday', time: '7:00 AM–7:00 PM' },
  { day: 'Wednesday', time: '7:00 AM–7:00 PM' },
  { day: 'Thursday', time: '7:00 AM–7:00 PM' },
  { day: 'Friday', time: '7:00 AM–7:00 PM' },
  { day: 'Saturday', time: '7:00 AM–7:00 PM' },
  { day: 'Sunday', time: '7:00 AM–7:00 PM' },
],
hoursNotice: '',
};

export const fullAddress = `${business.street}, ${business.city}, ${business.province} ${business.postalCode}`;
