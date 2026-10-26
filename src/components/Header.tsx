'use client';

import React, { useEffect, useState } from 'react';
import Icon from '@/components/ui/AppIcon';
import { navLinks, profile } from '@/content/siteContent';

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6"
      >
        <a href="/" className="text-[15px] font-medium text-navy" aria-label={`${profile.name} home`}>
          {profile.name}
        </a>

        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-navy transition-colors hover:text-primary focus-visible:outline-none focus-visible:text-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded border border-border text-foreground md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? 'XMarkIcon' : 'Bars3Icon'} size={20} variant="outline" />
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="fixed inset-x-0 top-14 bottom-0 bg-background md:hidden">
          <ul className="flex flex-col px-6 pt-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border py-3 text-base text-navy hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;