import React from 'react';
import ExperienceCard from '@/components/card/Experience';
import ExperinceData from '@/utils/experience';

export default function ExperinceTabSection() {
  return (
    <div className=" mx-auto w-full rounded-md  md:p-5">
      {ExperinceData.map((experience, index: number) => (
        <div key={`experience-${index + 1}`}>
          <div className="mb-6 ml-auto flex gap-4 md:w-[calc(50%+30px)]">
            <img
              src="/img/brain_station_23.png"
              alt="hero"
              className=" h-16 w-16 rounded-full object-cover"
            />
            <div>
              <h1 className="text-2xl opacity-80">{experience.company}</h1>
              <p className=" text-muted-foreground">{experience.location}</p>
            </div>
          </div>

          <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:-translate-x-px before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent md:before:mx-auto md:before:translate-x-0">
            {experience.roles.map((role, rolesIndex: number) => (
              <ExperienceCard
                key={`role-${rolesIndex + 1}`}
                title={role.title}
                duration={`${role.startDate} - ${role.endDate} · ${role.duration}`}
                workMode={`${role.workMode} · Full-time`}
                description={role.description}
                skills={role.skills}
              />
            ))}
          </div>

          {index + 1 !== ExperinceData.length && <hr className="my-10" />}
        </div>
      ))}
    </div>
  );
}
