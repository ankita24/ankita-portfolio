import React from 'react';
import { profile } from '@/content/siteContent';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-start gap-4 px-4 py-8 sm:px-6 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-muted-foreground">
          © <span suppressHydrationWarning>2026</span> {profile.name}
        </p>

        <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <li>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href={`mailto:${profile.email}`}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Email
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;