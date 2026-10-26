import React from 'react';
import Icon from '@/components/ui/AppIcon';
import { doseItUp, wise } from '@/content/siteContent';

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="border-t border-border px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-section-xl font-medium">Projects</h2>

        {/* Flagship: DoseItUp */}
        <article className="mt-6 overflow-hidden rounded border border-border bg-card">
          <div className="grid lg:grid-cols-12">
            <div className="p-5 sm:p-6 lg:col-span-7">
              <p className="text-xs text-muted-foreground">Flagship · Independent build</p>
              <h3 className="mt-2 text-xl font-medium text-card-foreground">{doseItUp.name}</h3>
              <p className="mt-1 text-sm text-primary">{doseItUp.tagline}</p>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">{doseItUp.intro}</p>

              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href={doseItUp.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  Visit Website
                  <Icon name="ArrowUpRightIcon" size={14} variant="outline" />
                </a>
                <a
                  href={doseItUp.android}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded border border-border px-4 py-2 text-sm font-medium text-card-foreground transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  Android App
                  <Icon name="ArrowUpRightIcon" size={14} variant="outline" />
                </a>
              </div>
            </div>

            <div className="border-t border-border bg-secondary p-5 sm:p-6 lg:col-span-5 lg:border-l lg:border-t-0">
              <h4 className="text-sm font-medium text-foreground">Architecture</h4>
              <ul className="mt-3">
                {doseItUp.architecture.map((a) => (
                  <li
                    key={a.layer}
                    className="flex flex-col gap-0.5 border-b border-border py-3 first:pt-0 last:border-b-0"
                  >
                    <span className="text-sm font-medium text-secondary-foreground">{a.layer}</span>
                    <span className="text-sm text-muted-foreground">{a.detail}</span>
                  </li>
                ))}
              </ul>
              <ul className="mt-4 flex flex-wrap gap-2" aria-label="DoseItUp technologies">
                {doseItUp.tech.map((t) => (
                  <li key={t} className="rounded border border-transparent bg-secondary px-2.5 py-1 text-xs text-secondary-foreground">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>

        {/* DoseItUp detail */}
        <div className="mt-4 grid gap-4 lg:grid-cols-3">
          <div className="rounded border border-border p-5">
            <h4 className="text-sm font-medium text-foreground">The problem</h4>
            <p className="mt-2 text-base leading-relaxed text-muted-foreground">{doseItUp.problem}</p>
          </div>
          <div className="rounded border border-border p-5">
            <h4 className="text-sm font-medium text-foreground">The solution</h4>
            <p className="mt-2 text-base leading-relaxed text-muted-foreground">{doseItUp.solution}</p>
          </div>
          <div className="rounded border border-border bg-card p-5">
            <h4 className="text-sm font-medium text-foreground">My role</h4>
            <p className="mt-2 text-base leading-relaxed text-muted-foreground">{doseItUp.role}</p>
          </div>
        </div>

        <div className="mt-4 rounded border border-border p-5">
          <h4 className="text-sm font-medium text-foreground">Key features</h4>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {doseItUp.features.map((f) => (
              <li key={f} className="flex items-start gap-2 text-base text-foreground">
                <Icon name="CheckIcon" size={16} variant="outline" className="mt-1 shrink-0 text-primary" />
                {f}
              </li>
            ))}
          </ul>
        </div>

        {/* WISE */}
        <article className="mt-4 grid gap-6 rounded border border-border bg-card p-5 sm:p-6 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <p className="text-xs text-muted-foreground">{wise.context}</p>
            <h3 className="mt-2 text-xl font-medium text-card-foreground">{wise.name}</h3>
            <p className="mt-1 text-sm text-primary">{wise.tagline}</p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">{wise.description}</p>
          </div>
          <div className="flex flex-col justify-between rounded bg-secondary p-4 lg:col-span-5">
            <ul className="flex flex-wrap gap-2" aria-label="WISE technologies">
              {wise.tech.map((t) => (
                <li key={t} className="rounded border border-border bg-card px-2.5 py-1 text-xs text-secondary-foreground">
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-4 border-t border-border pt-3 text-sm leading-relaxed text-muted-foreground">
              {wise.note}
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default ProjectsSection;