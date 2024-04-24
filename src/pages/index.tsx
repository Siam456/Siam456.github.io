import React from 'react';

import HomeSection from '@/components/sections/home';
import ServiceSection from '@/components/sections/Services';
import ExperienceSection from '@/components/sections/experinces';
import RecommendationSection from '@/components/sections/Recommendations';
import ProjectSection from '@/components/sections/projects';
import ContactSection from '@/components/sections/contact';
import TechnologyExpertise from '@/components/sections/TechnologyExpertise';

function Home() {
  return (
    <div className="mb-4 ">
      <HomeSection />
      <ServiceSection />
      <ProjectSection />
      <ExperienceSection />
      <TechnologyExpertise />
      <RecommendationSection />

      <ContactSection />
    </div>
  );
}

Home.layout = 'base';
export default Home;
