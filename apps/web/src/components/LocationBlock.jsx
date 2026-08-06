import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';
import { business } from '@/data/business';

export function HoursCard() {
  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      <h3 className="flex items-center gap-2 font-serif text-2xl text-primary">
        <Clock className="h-5 w-5" strokeWidth={1.75} /> Hours
      </h3>
      {business.hours.length > 0 ? (
        <ul className="mt-4 space-y-2 text-sm">
          {business.hours.map((h) => (
            <li key={h.day} className="flex justify-between border-b border-border/60 pb-2">
              <span className="text-foreground/80">{h.day}</span>
              <span className="font-medium">{h.time}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {business.hoursNotice}. Hours can change on holidays and long weekends, so we recommend
          checking before you visit.
        </p>
      )}
      <a
        href={business.mapsLink}
        target="_blank"
        rel="noreferrer"
        className="mt-4 inline-block text-sm font-semibold text-[hsl(28_48%_38%)] underline underline-offset-4"
      >
        Check hours on Google
      </a>
    </div>
  );
}

export function MapEmbed({ className = '' }) {
  return (
    <iframe
      title={`Map to ${business.name}`}
      src={business.mapsEmbed}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className={`h-full min-h-[320px] w-full rounded-2xl border border-border ${className}`}
    />
  );
}

export function ActionButtons({ className = '' }) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <a
        href={business.directions}
        target="_blank"
        rel="noreferrer"
        className="inline-flex min-h-[48px] items-center gap-2 rounded-full bg-primary px-6 font-semibold text-primary-foreground transition hover:bg-[hsl(22_32%_28%)] active:scale-[0.98]"
      >
        <MapPin className="h-4 w-4" /> Get Directions
      </a>
      <a
        href={business.phoneHref}
        className="inline-flex min-h-[48px] items-center gap-2 rounded-full border border-primary/30 bg-card px-6 font-semibold text-primary transition hover:bg-secondary active:scale-[0.98]"
      >
        <Phone className="h-4 w-4" /> Call Us
      </a>
    </div>
  );
}
