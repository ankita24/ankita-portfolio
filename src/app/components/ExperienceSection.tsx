import React from 'react';
import ExperienceTabs from './ExperienceTabs';
import { experience } from '@/content/siteContent';

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="border-t border-border px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-section-xl font-medium">Experience</h2>
        <div className="mt-6">
          <ExperienceTabs items={experience} />
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;