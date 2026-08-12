import React from 'react';
import { Helmet } from 'react-helmet';
import Reveal from '@/components/Reveal';
import { img } from '@/data/images';
import { ActionButtons } from '@/components/LocationBlock';

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About | Sachi&rsquo;s @ Beechwood Café, Ottawa</title>
        <meta
          name="description"
          content="Sachi's @ Beechwood is a cozy Beechwood coffee shop in Ottawa under new management since June 2026 — friendly service, specialty coffee and fresh, affordable food."
        />
      </Helmet>

      <section className="mx-auto grid w-full max-w-[72rem] items-center gap-12 px-5 py-20 md:grid-cols-2">
        <Reveal>
          <div>
            <p className="font-script text-3xl text-[hsl(28_48%_40%)]">Our café</p>
            <h1 className="mt-1 font-serif text-5xl leading-tight text-primary">
              A warm corner of Beechwood
            </h1>
            <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
              <p>
                Sachi&rsquo;s @ Beechwood is a cozy neighbourhood café in the heart of Ottawa. We
                serve specialty coffee, espresso-based drinks, teas, smoothies, fresh breakfast and
                lunch, pastries, desserts, crepes and Italian gelato.
              </p>
              <p>
                The café has been <strong>under new management since June 2026</strong>, with a
                simple focus: friendly, attentive service, food that is fresh and affordable, and a
                room that people actually want to spend time in.
              </p>
              <p>
                Whether you are meeting friends, working remotely, studying, out with family or just
                stopping in for your morning coffee, there is a seat here for you — indoors or on
                the flower-filled patio.
              </p>
              <p>
                We are part of the Beechwood community, and we like it that way: community
                gatherings, board games on the shelf, and live screenings of selected major sporting
                events.
              </p>
            </div>
            <ActionButtons className="mt-8" />
          </div>
        </Reveal>
        
      </section>
    </>
  );
}
