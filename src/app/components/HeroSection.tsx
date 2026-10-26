import React from 'react';
import { profile, openToRoles } from '@/content/siteContent';

const HeroSection: React.FC = () => {
  return (
    <section className="px-4 pt-16 pb-12 sm:px-6 sm:pt-20 lg:pt-24">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-hero-xl max-w-2xl font-normal text-foreground">
          Hi, I&apos;m Ankita.
          <br />
          Senior Software Engineer building web and mobile products.
        </h1>

        <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
          I have 9+ years of experience in frontend and full-stack development, with a focus on React,
          TypeScript, and scalable application architecture.
        </p>

        <div className="mt-5 max-w-xl">
          <p className="text-sm font-medium text-foreground">Open to roles</p>
          <ul className="mt-2 flex flex-wrap gap-2">
            {openToRoles.map((role) =>
            <li
              key={role}
              className="rounded border border-border bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground">

                {role}
              </li>
            )}
          </ul>
        </div>

        <div className="mt-7 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="inline-flex items-center rounded bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            View My Work
          </a>
          <a
            href={profile.resumePath}
            download={profile.resumeFileName}
            className="inline-flex items-center rounded border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Download Resume
          </a>
          <a
            href="#contact"
            className="inline-flex items-center px-2 py-2 text-sm font-medium text-primary underline underline-offset-4 hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;