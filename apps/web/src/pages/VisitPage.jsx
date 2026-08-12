import React from 'react';
import { Helmet } from 'react-helmet';
import { business } from '@/data/business';
import { img } from '@/data/images';
import { HoursCard, MapEmbed, ActionButtons } from '@/components/LocationBlock';

const gallery = [
  [img.interior, 'Café interior with wooden tables and seating'],
  [img.patio, 'Flower-filled café patio'],
  [img.caramelLatte, 'Salted caramel iced latte'],
  [img.breakfast, 'All-day breakfast plate with coffee'],
  [img.bakery, 'Croissants, danishes and muffins'],
  [img.gelato, 'Italian gelato display case'],
];

export default function VisitPage() {
  return (
    <>
      <Helmet>
        <title>Visit Us | Café with Patio in Beechwood, Ottawa</title>
        <meta
          name="description"
          content="Find Sachi's @ Beechwood at 18 Beechwood Ave., Unit 103, Ottawa. Map, directions, phone number, hours and photos of the café, patio, drinks and gelato."
        />
      </Helmet>

      <section className="mx-auto grid w-full max-w-[80rem] gap-10 px-5 py-16 lg:grid-cols-2">
        <div>
          <h1 className="font-serif text-5xl text-primary">Visit us</h1>
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
          <p className="mt-6 max-w-md rounded-2xl border border-[hsl(var(--sage))]/40 bg-[hsl(var(--sage))]/10 p-4 text-sm text-foreground/80">
            Planning a holiday or long-weekend visit? Please confirm our hours on Google or give us
            a call before heading over.
          </p>
        </div>
        <MapEmbed className="min-h-[420px]" />
      </section>

    </>
  );
}
