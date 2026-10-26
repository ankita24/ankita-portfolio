import React from 'react';
import { about } from '@/content/siteContent';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="border-t border-border px-4 py-12 sm:px-6">
      <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-7">
          <h2 className="text-section-xl font-medium">About</h2>
          <p className="mt-2 text-base text-muted-foreground">{about.heading}</p>
          <div className="mt-6 space-y-4">
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 24)} className="max-w-2xl text-base leading-relaxed text-foreground">
                {p}
              </p>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5">
          <dl className="rounded border border-border bg-card p-5">
            {about.facts.map((f) => (
              <div key={f.label} className="border-b border-border py-3 first:pt-0 last:border-b-0 last:pb-0">
                <dt className="text-xs text-muted-foreground">{f.label}</dt>
                <dd className="mt-1 text-sm text-card-foreground">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;