import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu as MenuIcon, X, MapPin, Phone, Instagram, Facebook } from 'lucide-react';
import { business, fullAddress } from '@/data/business';

const nav = [
  { to: '/', label: 'Home' },
  { to: '/menu', label: 'Menu' },
  { to: '/about', label: 'About' },
  { to: '/reviews', label: 'Reviews' },
  { to: '/visit', label: 'Visit Us' },
  { to: '/contact', label: 'Contact' },
];

export function Wordmark({ className = '' }) {
  return (
    <Link to="/" className={`group inline-flex flex-col leading-none ${className}`}>
      <span className="font-script text-2xl text-[hsl(28_48%_38%)] sm:text-3xl">Sachi&rsquo;s</span>
      <span className="text-[0.62rem] uppercase tracking-[0.32em] text-primary/80">@ Beechwood</span>
    </Link>
  );
}

export default function SiteLayout({ children }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="sticky top-0 z-50 border-b border-border/70 bg-[hsl(38_44%_96%_/_0.92)] backdrop-blur">
        <div className="mx-auto flex w-full max-w-[80rem] items-center justify-between gap-4 px-5 py-3">
          <Wordmark />
          <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
            {nav.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-[hsl(28_48%_38%)] ${
                    isActive ? 'text-[hsl(28_48%_38%)]' : 'text-foreground/75'
                  }`
                }
              >
                {n.label}
              </NavLink>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a
              href={business.directions}
              target="_blank"
              rel="noreferrer"
              className="hidden min-h-[44px] items-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground transition hover:bg-[hsl(22_32%_28%)] active:scale-[0.98] sm:inline-flex"
            >
              <MapPin className="h-4 w-4" strokeWidth={1.75} /> Get Directions
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? 'Close menu' : 'Open menu'}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-primary lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="fixed inset-x-0 top-[68px] z-[60] max-h-[calc(100dvh-68px)] overflow-y-auto border-t border-border bg-background px-5 pb-8 pt-4 lg:hidden">
            <nav aria-label="Mobile" className="flex flex-col">
              {nav.map((n) => (
                <NavLink
                  key={n.to}
                  to={n.to}
                  className={({ isActive }) =>
                    `border-b border-border/60 py-4 font-serif text-2xl ${
                      isActive ? 'text-[hsl(28_48%_38%)]' : 'text-foreground'
                    }`
                  }
                >
                  {n.label}
                </NavLink>
              ))}
            </nav>
            <div className="mt-6 grid gap-3">
              <a
                href={business.directions}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-primary px-5 font-semibold text-primary-foreground"
              >
                <MapPin className="h-4 w-4" /> Get Directions
              </a>
              <a
                href={business.phoneHref}
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-primary/30 px-5 font-semibold text-primary"
              >
                <Phone className="h-4 w-4" /> {business.phoneDisplay}
              </a>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">{children}</main>

      <footer className="mt-24 border-t border-border bg-[hsl(30_26%_92%)] paper-grain">
        <div className="mx-auto grid w-full max-w-[80rem] gap-10 px-5 py-14 md:grid-cols-4">
          <div className="md:col-span-2">
            <Wordmark />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              A cozy neighbourhood café in the heart of Ottawa — specialty coffee, fresh breakfast
              and lunch, pastries, desserts, crepes and Italian gelato.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Under new management since June 2026
            </p>
            <div className="mt-4 flex gap-3">
              <a
                href={business.social.instagram}
                aria-label="Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary/25 text-primary transition hover:bg-primary hover:text-primary-foreground"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={business.social.facebook}
                aria-label="Facebook"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary/25 text-primary transition hover:bg-primary hover:text-primary-foreground"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div>
            <h2 className="text-xs uppercase tracking-[0.22em] text-primary/70">Visit</h2>
            <address className="mt-4 space-y-1 text-sm not-italic text-muted-foreground">
              <p>{business.street}</p>
              <p>
                {business.city}, {business.province} {business.postalCode}
              </p>
              <p>
                <a className="underline underline-offset-4" href={business.phoneHref}>
                  {business.phoneDisplay}
                </a>
              </p>
              <p>
                <a
                  className="underline underline-offset-4"
                  href={business.mapsLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  View on Google Maps
                </a>
              </p>
            </address>
          </div>
          <div>
            <h2 className="text-xs uppercase tracking-[0.22em] text-primary/70">Explore</h2>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {nav.map((n) => (
                <li key={n.to}>
                  <Link className="transition hover:text-primary" to={n.to}>
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-border/70 px-5 py-5 text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} {business.name} · {fullAddress}
        </div>
      </footer>
    </div>
  );
}
