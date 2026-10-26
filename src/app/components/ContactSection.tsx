import React from 'react';
import Icon from '@/components/ui/AppIcon';
import { contact, profile } from '@/content/siteContent';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="border-t border-border px-4 py-12 sm:px-6">
      <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-7">
          <h2 className="text-section-xl font-medium">Contact</h2>
          <p className="mt-2 text-base text-muted-foreground">{contact.heading}</p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-foreground">{contact.body}</p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-6 inline-flex items-center gap-2 rounded bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <Icon name="EnvelopeIcon" size={16} variant="outline" />
            {profile.email}
          </a>
        </div>

        <ul className="lg:col-span-5">
          <li className="border-b border-border">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-h-[44px] items-center justify-between gap-4 py-3"
            >
              <span className="text-sm text-foreground group-hover:text-primary">LinkedIn</span>
              <Icon name="ArrowUpRightIcon" size={16} variant="outline" className="text-muted-foreground group-hover:text-primary" />
            </a>
          </li>
          <li className="border-b border-border">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-h-[44px] items-center justify-between gap-4 py-3"
            >
              <span className="text-sm text-foreground group-hover:text-primary">GitHub</span>
              <Icon name="ArrowUpRightIcon" size={16} variant="outline" className="text-muted-foreground group-hover:text-primary" />
            </a>
          </li>
          <li>
            <a
              href={profile.resumePath}
              download={profile.resumeFileName}
              className="group flex min-h-[44px] items-center justify-between gap-4 py-3"
            >
              <span className="text-sm text-foreground group-hover:text-primary">Resume (PDF)</span>
              <Icon name="ArrowDownTrayIcon" size={16} variant="outline" className="text-muted-foreground group-hover:text-primary" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ContactSection;