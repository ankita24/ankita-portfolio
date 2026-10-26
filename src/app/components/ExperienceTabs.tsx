'use client';

import React, { useRef, useState } from 'react';
import type { ExperienceItem } from '@/content/siteContent';

interface ExperienceTabsProps {
  items: ExperienceItem[];
}

const ExperienceTabs: React.FC<ExperienceTabsProps> = ({ items }) => {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const current = items[active];

  const onKeyDown = (e: React.KeyboardEvent, index: number) => {
    let next = index;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next = (index + 1) % items.length;
    else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') next = (index - 1 + items.length) % items.length;
    else return;
    e.preventDefault();
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <div className="grid gap-6 lg:grid-cols-12 lg:gap-10">
      <div
        role="tablist"
        aria-label="Career history"
        className="flex gap-2 overflow-x-auto pb-2 lg:col-span-4 lg:flex-col lg:gap-1 lg:overflow-visible lg:pb-0"
      >
        {items.map((item, i) => {
          const selected = i === active;
          return (
            <button
              key={item.id}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              role="tab"
              id={`tab-${item.id}`}
              aria-selected={selected}
              aria-controls={`panel-${item.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(i)}
              onKeyDown={(e) => onKeyDown(e, i)}
              className={`flex min-h-[44px] shrink-0 flex-col items-start rounded border px-4 py-2.5 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring lg:w-full ${
                selected
                  ? 'border-primary bg-secondary text-primary' :'border-transparent bg-transparent text-muted-foreground hover:text-primary'
              }`}
            >
              <span className="text-sm font-medium">{item.company}</span>
              <span className="mt-0.5 text-xs">{item.period}</span>
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id={`panel-${current.id}`}
        aria-labelledby={`tab-${current.id}`}
        className="rounded border border-border bg-card p-5 sm:p-6 lg:col-span-8"
      >
        <p className="text-xs text-muted-foreground">{current.period}</p>
        <h3 className="mt-1 text-lg font-medium text-card-foreground">{current.title}</h3>
        <p className="text-sm text-primary">{current.company}</p>
        <p className="mt-4 text-base text-muted-foreground">{current.summary}</p>

        <ul className="mt-5 space-y-3">
          {current.points.map((point) => (
            <li key={point} className="flex gap-3 text-base leading-relaxed text-card-foreground">
              <span aria-hidden="true" className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
              <span>{point}</span>
            </li>
          ))}
        </ul>

        {current.tech.length > 0 && (
          <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies used">
            {current.tech.map((t) => (
              <li
                key={t}
                className="rounded border border-transparent bg-secondary px-2.5 py-1 text-xs text-secondary-foreground"
              >
                {t}
              </li>
            ))}
          </ul>
        )}

        {current.placeholder && (
          <p className="mt-5 rounded border border-dashed border-border px-3 py-2 text-sm text-muted-foreground">
            {current.placeholder}
          </p>
        )}

        {current.id === 'infosys' && (
          <p className="mt-4 text-sm text-muted-foreground">
            EDITABLE PLACEHOLDER: June 2018 – Sept 2019 is intentionally left blank. Add context here if you wish.
          </p>
        )}
      </div>
    </div>
  );
};

export default ExperienceTabs;