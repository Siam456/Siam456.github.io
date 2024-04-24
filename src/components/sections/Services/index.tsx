import React from 'react';
// import { CodeBracketIcon } from '@heroicons/react/24/solid';

import SectionTitle from '../SectionTitle';
import ServiceCardSection from './ServiceCardSection';

export default function ServiceSection() {
  return (
    <section
      id="services"
      className="container relative
  items-center justify-between gap-10 space-y-2"
    >
      <div>
        <SectionTitle
          title="Services"
          description="I provide a range of services to help you achieve your goals."
        />

        <ServiceCardSection />
      </div>
    </section>
  );
}
