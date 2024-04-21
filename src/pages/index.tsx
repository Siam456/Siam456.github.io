import React from 'react';

import HomeSection from '@/components/sections/home';
import ServiceSection from '@/components/sections/Services';
import ExperienceSection from '@/components/sections/experinces';
import RecommendationSection from '@/components/sections/Recommendations';
import ProjectSection from '@/components/sections/projects';
import ContactSection from '@/components/sections/contact';

function Home() {
  return (
    <div className="mb-4 ">
      <HomeSection />
      <ServiceSection />
      <ProjectSection />
      <ExperienceSection />
      <RecommendationSection />

      <ContactSection />
    </div>
  );
}

Home.layout = 'base';
export default Home;
