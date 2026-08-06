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
    instagram: '#', // TODO: add real Instagram URL
    facebook: '#', // TODO: add real Facebook URL
  },
  // Hours are not verified. Fill in below to publish them; leave empty to show the confirm notice.
  hours: [],
  hoursNotice: "Please confirm today's hours on Google",
};

export const fullAddress = `${business.street}, ${business.city}, ${business.province} ${business.postalCode}`;
