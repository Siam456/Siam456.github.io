import EducationCard from '@/components/card/Education';

import EducationData from '@/utils/education';
import React from 'react';

export default function EducationTabSection() {
  return (
    <div className="my-5">
      <div>
        <div className="my-6 flex flex-col items-center justify-center">
          <div className=" md:ml-36 lg:ml-[15rem]">
            {EducationData.map((data, idx) => (
              <EducationCard
                key={`education-${idx + 1}`}
                degree={data.degree}
                duration={data.duration}
                field={data.field}
                institution={data.institution}
                location={data.location}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
