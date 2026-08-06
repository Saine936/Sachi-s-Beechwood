import React, { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Search } from 'lucide-react';
import { menu, menuNote, priceNote } from '@/data/menu';
import { business } from '@/data/business';
import { img } from '@/data/images';

export default function MenuPage() {
  const [query, setQuery] = useState('');
  const q = query.trim().toLowerCase();

  const sections = useMemo(
    () =>
      menu
        .map((s) => ({ ...s, items: s.items.filter((it) => it.name.toLowerCase().includes(q)) }))
        .filter((s) => s.items.length > 0),
    [q]
  );

  const goTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <Helmet>
        <title>Menu | Sachi&rsquo;s @ Beechwood, Ottawa</title>
        <meta
          name="description"
          content="Full menu at Sachi's @ Beechwood in Ottawa: all-day breakfast, omelettes, sandwiches, wraps, coffee, matcha, bakery, smoothies, crepes and Italian gelato."
        />
      </Helmet>

      <section className="border-b border-border bg-[hsl(34_38%_92%)] paper-grain px-5 py-16">
        <div className="mx-auto w-full max-w-[72rem]">
          <p className="font-script text-3xl text-[hsl(28_48%_40%)]">Our</p>
          <h1 className="font-serif text-5xl text-primary sm:text-6xl">Menu</h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Breakfast is served all day. {priceNote}
          </p>
        </div>
      </section>

      <div className="sticky top-[68px] z-30 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto w-full max-w-[72rem] px-5 py-4">
          <label className="relative block max-w-md">
            <span className="sr-only">Search menu items</span>
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search menu items"
              className="min-h-[44px] w-full rounded-full border border-input bg-card pl-11 pr-4 text-sm outline-none focus:ring-2 focus:ring-ring"
            />
          </label>
          <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
            {menu.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => goTo(s.id)}
                className="whitespace-nowrap rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold uppercase tracking-wide text-primary transition hover:bg-secondary active:scale-[0.98]"
              >
                {s.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-[72rem] px-5 py-16">
        {sections.length === 0 && (
          <p className="rounded-2xl border border-border bg-card p-8 text-center text-muted-foreground">
            No menu items match &ldquo;{query}&rdquo;. Try another search.
          </p>
        )}
        <div className="space-y-16">
          {sections.map((s) => (
            <section key={s.id} id={s.id} className="scroll-mt-48">
              <h2 className="font-serif text-3xl text-primary sm:text-4xl">{s.title}</h2>
              {s.blurb && <p className="mt-2 max-w-2xl text-sm text-muted-foreground">{s.blurb}</p>}
              <ul className="mt-6 grid gap-x-12 gap-y-1 md:grid-cols-2">
                {s.items.map((it) => (
                  <li
                    key={`${s.id}-${it.name}`}
                    className="flex items-baseline gap-3 border-b border-dotted border-border py-3"
                  >
                    <span className="font-medium text-foreground">{it.name}</span>
                    <span className="flex-1" />
                    <span className="shrink-0 text-sm text-muted-foreground">
                      {it.price ?? 'Confirm in café'}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-border bg-card p-6 text-sm text-muted-foreground">
          <p>{menuNote}</p>
          <p className="mt-2">
            Call us at{' '}
            <a className="underline underline-offset-4" href={business.phoneHref}>
              {business.phoneDisplay}
            </a>{' '}
            to confirm prices, dietary details or availability.
          </p>
        </div>

        <section className="mt-16">
          <h2 className="font-serif text-3xl text-primary">From the café</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              [img.bakery, 'Croissants, danishes and muffins in the bakery basket'],
              [img.gelato, 'Italian gelato flavours in the display case'],
              [img.breakfast, 'All-day breakfast plate with coffee'],
            ].map(([src, alt]) => (
              <img
                key={src}
                src={src}
                alt={alt}
                loading="lazy"
                className="aspect-[4/3] w-full rounded-2xl object-cover"
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
