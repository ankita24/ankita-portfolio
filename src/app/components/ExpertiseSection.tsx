import React from 'react';
import { skillGroups } from '@/content/siteContent';

const ExpertiseSection: React.FC = () => {
  return (
    <section id="expertise" className="border-t border-border px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-section-xl font-medium">Technical Expertise</h2>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.title} className="rounded border border-border bg-card p-5">
              <h3 className="text-sm font-medium text-foreground">{group.title}</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded border border-transparent bg-secondary px-2.5 py-1 text-sm text-secondary-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;