import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import ExpertiseSection from './components/ExpertiseSection';
import ContactSection from './components/ContactSection';
import { profile, about } from '@/content/siteContent';

export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile?.name,
    jobTitle: profile?.role,
    email: `mailto:${profile?.email}`,
    address: { '@type': 'PostalAddress', addressLocality: 'Hyderabad', addressRegion: 'Telangana', addressCountry: 'IN' },
    alumniOf: 'IIIT Bhubaneswar',
    description: about?.paragraphs?.[0],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <ExpertiseSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}