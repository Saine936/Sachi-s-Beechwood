import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Star, Coffee, Croissant, IceCream2, Sun, ArrowRight } from 'lucide-react';
import Reveal from '@/components/Reveal';
import Seo from '@/components/Seo';
import { business, fullAddress } from '@/data/business';
import { img } from '@/data/images';
import { menu } from '@/data/menu';
import { HoursCard, MapEmbed, ActionButtons } from '@/components/LocationBlock';

const favourites = [
  { name: 'Strawberry Matcha', desc: 'Ceremonial matcha layered over fresh strawberry — a guest favourite.', image: img.strawberryMatcha },
  { name: 'Mango Matcha', desc: 'Bright mango and earthy matcha over ice.', image: img.strawberryMatcha },
  { name: 'Chicken Pesto Panini', desc: 'Grilled chicken, pesto and melted cheese, pressed warm.', image: img.panini },
  { name: 'Salted Caramel Iced Latte', desc: 'Espresso, cold milk and salted caramel over ice.', image: img.caramelLatte },
  { name: 'All-Day Breakfast', desc: 'Eggs, bagels and croissant sandwiches served open to close.', image: img.breakfast },
  { name: 'Fresh Crepes', desc: 'Sweet or savoury, made to order — sugar, maple or Nutella and banana.', image: img.crepe },
  { name: 'Italian Gelato', desc: 'Scooped from the case in medium, large or as an affogato.', image: img.gelato },
  { name: 'Pastries & Croissants', desc: 'Butter, almond and hazelnut croissants, danishes and muffins.', image: img.bakery },
];

const reasons = [
  { icon: Coffee, title: 'Specialty coffee & matcha', text: 'Espresso drinks, chai, and matcha made with care by people who drink it themselves.' },
  { icon: Croissant, title: 'Fresh breakfast & lunch', text: 'Bagels, omelettes, paninis and wraps, at neighbourhood prices.' },
  { icon: IceCream2, title: 'Italian gelato & desserts', text: 'Gelato, tiramisu, cheesecake, brownies and made-to-order crepes.' },
  { icon: Sun, title: 'Cozy patio & warm welcome', text: 'A flower-filled patio, comfortable seating and friendly service.' },
];

const reviewQuotes = [
  'The gelato is absolutely top-tier.',
  'The strawberry matcha was a 10/10.',
  'One of my favourite spots to study and get work done.',
  'The food was excellent and affordable, and the staff was warm and welcoming.',
];

export default function HomePage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CafeOrCoffeeShop',
    name: business.name,
    telephone: business.phoneDisplay,
    priceRange: 'CA$10–20',
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.street,
      addressLocality: business.city,
      addressRegion: 'ON',
      postalCode: business.postalCode,
      addressCountry: 'CA',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: business.rating,
      reviewCount: business.reviewCount,
    },
    servesCuisine: ['Coffee', 'Breakfast', 'Lunch', 'Desserts', 'Gelato'],
  };

  return (
    <>
      <Helmet>
        <title>Sachi&rsquo;s @ Beechwood | Café in Beechwood, Ottawa</title>
        <meta
          name="description"
          content="Sachi's @ Beechwood is a cozy café in Beechwood, Ottawa serving specialty coffee, matcha, fresh breakfast and lunch, pastries, crepes and Italian gelato."
        />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>
      <Seo
        title="Sachi's @ Beechwood | Café in Beechwood, Ottawa"
        description="Specialty coffee, fresh breakfast and lunch, pastries, desserts and Italian gelato in the heart of Ottawa."
        image={img.hero}
        siteName={business.name}
      />

      {/* Hero */}
      <section className="relative min-h-[100dvh] w-full overflow-hidden">
        <img
          src={img.hero}
          alt="Café table with a latte, croissant and breakfast plate in warm morning light"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(24_28%_12%_/_0.86)] via-[hsl(24_28%_12%_/_0.62)] to-transparent" />
        <div className="relative mx-auto flex min-h-[100dvh] w-full max-w-[80rem] flex-col justify-center px-5 py-28">
          <Reveal>
            <p className="font-script text-3xl text-[hsl(28_60%_74%)]">Bonjour, Beechwood</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-3 max-w-3xl font-serif text-[clamp(2.6rem,7vw,5rem)] leading-[1.02] text-[hsl(40_50%_97%)]">
              Your neighbourhood café on Beechwood
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[hsl(38_30%_88%)]">
              Specialty coffee, fresh breakfast and lunch, pastries, desserts and Italian
              gelato—served in a warm and welcoming space in the heart of Ottawa.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/menu"
                className="inline-flex min-h-[48px] items-center gap-2 rounded-full bg-[hsl(28_48%_58%)] px-7 font-semibold text-[hsl(24_30%_14%)] transition hover:bg-[hsl(28_52%_64%)] active:scale-[0.98]"
              >
                View Our Menu <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={business.directions}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[48px] items-center gap-2 rounded-full border border-[hsl(40_50%_92%_/_0.6)] px-7 font-semibold text-[hsl(40_50%_97%)] transition hover:bg-[hsl(40_50%_97%_/_0.12)] active:scale-[0.98]"
              >
                Get Directions
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.32}>
            <p className="mt-8 flex flex-wrap items-center gap-2 text-sm text-[hsl(38_30%_86%)]">
              <Star className="h-4 w-4 fill-[hsl(38_80%_62%)] text-[hsl(38_80%_62%)]" />
              {business.rating} on Google · {business.reviewCount} reviews · {business.priceRange}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Welcome */}
      <section className="mx-auto w-full max-w-[72rem] px-5 py-24">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <Reveal>
            <div>
              <h2 className="font-serif text-4xl leading-tight text-primary sm:text-5xl">
                Good coffee, great food and a place to connect
              </h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                Sachi&rsquo;s is the kind of café you can settle into. Come for your morning coffee,
                stay for breakfast or lunch, spread out your books for an afternoon of studying or
                remote work, bring the family on a weekend outing, or catch up with a friend over
                gelato.
              </p>
              <ul className="mt-7 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                {[
                  'Comfortable seating',
                  'Relaxing atmosphere',
                  'Flower-filled patio',
                  'Friendly service',
                  'Board games',
                  'Community events',
                  'Live screenings of selected major sporting events',
                ].map((f) => (
                  <li key={f} className="flex gap-3 text-sm text-foreground/85">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(var(--sage))]" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative">
              <img
                src={img.patio}
                alt="Flower-filled café patio with wooden chairs in afternoon sun"
                loading="lazy"
                className="aspect-[4/3] w-full rounded-[1.75rem] object-cover shadow-[0_24px_60px_-30px_hsl(24_40%_20%_/_0.6)]"
              />
              <img
                src={img.interior}
                alt="Warm café interior with wooden tables and comfortable seating"
                loading="lazy"
                className="absolute -bottom-10 -left-6 hidden w-44 rounded-2xl border-4 border-background object-cover shadow-xl sm:block"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Popular choices */}
      <section className="bg-[hsl(34_38%_92%)] paper-grain py-24">
        <div className="mx-auto w-full max-w-[80rem] px-5">
          <Reveal>
            <p className="font-script text-3xl text-[hsl(28_48%_40%)]">Guest favourites</p>
            <h2 className="mt-1 font-serif text-4xl text-primary sm:text-5xl">Popular choices</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {favourites.map((f, idx) => (
              <Reveal key={f.name} delay={idx * 0.05}>
                <article className="group h-full overflow-hidden rounded-3xl bg-card shadow-[0_16px_40px_-28px_hsl(24_40%_20%_/_0.7)] transition duration-300 hover:-translate-y-1">
                  <img
                    src={f.image}
                    alt={f.name}
                    loading="lazy"
                    className="aspect-square w-full object-cover"
                  />
                  <div className="p-5">
                    <h3 className="font-serif text-2xl text-primary">{f.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Menu preview */}
      <section className="mx-auto w-full max-w-[72rem] px-5 py-24">
        <Reveal>
          <h2 className="font-serif text-4xl text-primary sm:text-5xl">On the menu</h2>
          <p className="mt-3 max-w-xl text-muted-foreground">
            Breakfast served all day, lunch made to order, and a case full of pastries and gelato.
          </p>
        </Reveal>
        <div className="mt-10 divide-y divide-border border-y border-border">
          {menu.map((c, idx) => (
            <Reveal key={c.id} delay={Math.min(idx * 0.03, 0.3)}>
              <Link
                to={`/menu#${c.id}`}
                className="group flex items-baseline justify-between gap-6 py-4 transition hover:px-2"
              >
                <span className="font-serif text-2xl text-primary sm:text-3xl">{c.title}</span>
                <span className="hidden flex-1 border-b border-dotted border-border sm:block" />
                <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground group-hover:text-[hsl(28_48%_40%)]">
                  {c.items.length} items
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
        <Link
          to="/menu"
          className="mt-10 inline-flex min-h-[48px] items-center gap-2 rounded-full bg-primary px-7 font-semibold text-primary-foreground transition hover:bg-[hsl(22_32%_28%)] active:scale-[0.98]"
        >
          See Full Menu <ArrowRight className="h-4 w-4" />
        </Link>
      </section>

      {/* Why people love */}
      <section className="bg-[hsl(24_28%_16%)] py-24 text-[hsl(40_40%_94%)]">
        <div className="mx-auto w-full max-w-[80rem] px-5">
          <h2 className="font-serif text-4xl sm:text-5xl">Why people love Sachi&rsquo;s</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((r, idx) => (
              <Reveal key={r.title} delay={idx * 0.06}>
                <div className="h-full rounded-3xl border border-[hsl(40_40%_94%_/_0.16)] bg-[hsl(40_40%_94%_/_0.05)] p-7">
                  <r.icon className="h-7 w-7 text-[hsl(28_52%_66%)]" strokeWidth={1.5} />
                  <h3 className="mt-5 font-serif text-2xl">{r.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[hsl(38_20%_80%)]">{r.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews preview */}
      <section className="mx-auto w-full max-w-[72rem] px-5 py-24">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
            Excerpts from customer reviews
          </p>
          <h2 className="mt-2 font-serif text-4xl text-primary sm:text-5xl">
            What guests are saying
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {reviewQuotes.map((q, idx) => (
            <Reveal key={q} delay={idx * 0.06}>
              <blockquote className="h-full rounded-3xl border border-border bg-card p-7">
                <p className="font-serif text-2xl italic leading-snug text-primary">&ldquo;{q}&rdquo;</p>
                <footer className="mt-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Customer review excerpt
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
        <Link
          to="/reviews"
          className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[hsl(28_48%_38%)] underline underline-offset-4"
        >
          Read more reviews <ArrowRight className="h-4 w-4" />
        </Link>
      </section>

      {/* Location */}
      <section className="bg-[hsl(34_38%_92%)] paper-grain py-24">
        <div className="mx-auto grid w-full max-w-[80rem] gap-10 px-5 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-4xl text-primary sm:text-5xl">Visit us in Beechwood</h2>
            <address className="mt-6 space-y-1 text-lg not-italic text-foreground/85">
              <p>{business.street}</p>
              <p>
                {business.city}, {business.province} {business.postalCode}
              </p>
              <p>
                <a className="underline underline-offset-4" href={business.phoneHref}>
                  {business.phoneDisplay}
                </a>
              </p>
            </address>
            <ActionButtons className="mt-7" />
            <div className="mt-8 max-w-md">
              <HoursCard />
            </div>
            <p className="sr-only">{fullAddress}</p>
          </div>
          <MapEmbed className="min-h-[420px]" />
        </div>
      </section>
    </>
  );
}
