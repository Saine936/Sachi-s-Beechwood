import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Instagram, Facebook } from 'lucide-react';
import { business } from '@/data/business';
import { HoursCard } from '@/components/LocationBlock';

/*
  DEVELOPER NOTE: this form is not connected to a backend or email service.
  Submissions are validated in the browser only and are NOT delivered anywhere.
  To connect it, post the form values to a mail service or backend endpoint
  inside handleSubmit() below.
*/

const empty = { name: '', email: '', phone: '', subject: '', message: '' };

export default function ContactPage() {
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  const set = (k) => (e) => setValues((v) => ({ ...v, [k]: e.target.value }));

  const validate = () => {
    const err = {};
    if (!values.name.trim()) err.name = 'Please enter your name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) err.email = 'Please enter a valid email address.';
    if (!values.subject.trim()) err.subject = 'Please add a subject.';
    if (values.message.trim().length < 10) err.message = 'Please write at least 10 characters.';
    return err;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validate();
    setErrors(err);
    if (Object.keys(err).length > 0) {
      setStatus('error');
      return;
    }
    setStatus('success');
    setValues(empty);
  };

  const field =
    'min-h-[44px] w-full rounded-xl border border-input bg-card px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-ring';

  return (
    <>
      <Helmet>
        <title>Contact | Sachi&rsquo;s @ Beechwood Café, Ottawa</title>
        <meta
          name="description"
          content="Contact Sachi's @ Beechwood in Ottawa — phone, address, map, hours and a message form for questions about the café, catering or events."
        />
      </Helmet>

      <section className="mx-auto grid w-full max-w-[72rem] gap-12 px-5 py-16 lg:grid-cols-2">
        <div>
          <h1 className="font-serif text-5xl text-primary">Contact us</h1>
          <p className="mt-3 text-muted-foreground">
            Questions about the menu, events or a large order? Send us a note or give us a call.
          </p>

          <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-5">
            {[
              ['name', 'Name', 'text', true],
              ['email', 'Email', 'email', true],
              ['phone', 'Phone (optional)', 'tel', false],
              ['subject', 'Subject', 'text', true],
            ].map(([key, label, type, req]) => (
              <div key={key} className="grid gap-2">
                <label htmlFor={key} className="text-sm font-medium">
                  {label}
                </label>
                <input
                  id={key}
                  name={key}
                  type={type}
                  required={req}
                  value={values[key]}
                  onChange={set(key)}
                  aria-invalid={Boolean(errors[key])}
                  className={field}
                />
                {errors[key] && <p className="text-sm text-destructive">{errors[key]}</p>}
              </div>
            ))}
            <div className="grid gap-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={values.message}
                onChange={set('message')}
                aria-invalid={Boolean(errors.message)}
                className={`${field} min-h-[140px]`}
              />
              {errors.message && <p className="text-sm text-destructive">{errors.message}</p>}
            </div>

            <button
              type="submit"
              className="inline-flex min-h-[48px] items-center rounded-full bg-primary px-7 font-semibold text-primary-foreground transition hover:bg-[hsl(22_32%_28%)] active:scale-[0.98]"
            >
              Send Message
            </button>

            <div aria-live="polite">
              {status === 'success' && (
                <p className="rounded-xl border border-[hsl(var(--sage))]/50 bg-[hsl(var(--sage))]/10 p-4 text-sm">
                  Thanks — your message has been prepared. Please note this form is not yet
                  connected to an email service, so for anything urgent please call us at{' '}
                  <a className="underline underline-offset-4" href={business.phoneHref}>
                    {business.phoneDisplay}
                  </a>
                  .
                </p>
              )}
              {status === 'error' && Object.keys(errors).length > 0 && (
                <p className="rounded-xl border border-destructive/40 bg-destructive/10 p-4 text-sm text-destructive">
                  Please fix the highlighted fields and try again.
                </p>
              )}
            </div>
          </form>
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl border border-border bg-card p-6">
            <h2 className="font-serif text-2xl text-primary">Find us</h2>
            <address className="mt-3 space-y-1 text-sm not-italic text-muted-foreground">
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
                  Open in Google Maps
                </a>
              </p>
            </address>
            <div className="mt-4 flex gap-3">
              <a
                href={business.social.instagram}
                aria-label="Instagram"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-primary/25 text-primary transition hover:bg-primary hover:text-primary-foreground"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={business.social.facebook}
                aria-label="Facebook"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-primary/25 text-primary transition hover:bg-primary hover:text-primary-foreground"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>
          <HoursCard />
          <iframe
            title="Map to Sachi's @ Beechwood"
            src={business.mapsEmbed}
            loading="lazy"
            className="h-[300px] w-full rounded-2xl border border-border"
          />
        </div>
      </section>
    </>
  );
}
