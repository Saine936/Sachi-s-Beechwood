import React from 'react';
import { Helmet } from 'react-helmet';
import { Star } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { business } from '@/data/business';

const quotes = [
  'The gelato is absolutely top-tier.',
  'The strawberry matcha was a 10/10.',
  'One of my favourite spots to study and get work done.',
  'The food was excellent and affordable, and the staff was warm and welcoming.',
];

const themes = [
  ['Friendly new management', 'Guests mention feeling welcomed by the team.'],
  ['Excellent service', 'Attentive, unhurried and helpful.'],
  ['Relaxing atmosphere', 'A calm room to sit and stay a while.'],
  ['Great for study and work', 'Comfortable seating for laptops and books.'],
  ['Beautiful patio', 'Flower-filled seating for warmer days.'],
  ['Delicious, affordable food', 'Fresh breakfast and lunch at fair prices.'],
  ['Excellent matcha', 'Strawberry and mango matcha come up often.'],
  ['High-quality gelato', 'Italian gelato is a repeat favourite.'],
];

export default function ReviewsPage() {
  return (
    <>
      <Helmet>
        <title>Reviews | Sachi&rsquo;s @ Beechwood, Ottawa Café</title>
        <meta
          name="description"
          content="What guests say about Sachi's @ Beechwood — 4.4 stars from 106 Google reviews for matcha, gelato, friendly service and a relaxing Ottawa study café."
        />
      </Helmet>

      <section className="border-b border-border bg-[hsl(34_38%_92%)] paper-grain px-5 py-16">
        <div className="mx-auto w-full max-w-[72rem]">
          <h1 className="font-serif text-5xl text-primary">Reviews</h1>
          <p className="mt-3 flex flex-wrap items-center gap-2 text-muted-foreground">
            <Star className="h-4 w-4 fill-[hsl(38_70%_50%)] text-[hsl(38_70%_50%)]" />
            {business.rating} on Google · {business.reviewCount} reviews
          </p>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
            The quotes below are excerpts from customer reviews.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[72rem] px-5 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {quotes.map((q, idx) => (
            <Reveal key={q} delay={idx * 0.06}>
              <blockquote className="h-full rounded-3xl border border-border bg-card p-8">
                <p className="font-serif text-2xl italic leading-snug text-primary">
                  &ldquo;{q}&rdquo;
                </p>
                <footer className="mt-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Customer review excerpt
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>

        <h2 className="mt-16 font-serif text-3xl text-primary">What comes up again and again</h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {themes.map(([t, d]) => (
            <li key={t} className="rounded-2xl border border-border bg-card p-5">
              <h3 className="font-serif text-xl text-primary">{t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{d}</p>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex flex-wrap gap-3">
          <a
            href={business.googleReviews}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-[48px] items-center rounded-full bg-primary px-7 font-semibold text-primary-foreground transition hover:bg-[hsl(22_32%_28%)]"
          >
            Read More Reviews on Google
          </a>
          <a
            href={business.writeReview}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-[48px] items-center rounded-full border border-primary/30 bg-card px-7 font-semibold text-primary transition hover:bg-secondary"
          >
            Write a Review
          </a>
        </div>
      </section>
    </>
  );
}
