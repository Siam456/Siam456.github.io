import React from 'react';

export default function EducationCard({
  degree,
  field,
  institution,
  location,
  duration,
}: {
  degree: string;
  field: string;
  institution: string;
  location: string;
  duration: string;
}) {
  return (
    <div className="group relative w-full py-6 pl-8 sm:pl-80">
      <div className="mb-1 text-2xl font-medium text-indigo-500 sm:mb-0">
        {degree}
      </div>

      <div className="mb-1 flex flex-col items-start before:absolute before:left-2 before:h-full before:-translate-x-1/2 before:translate-y-3 before:self-start before:bg-slate-300 before:px-px after:absolute after:left-2 after:box-content after:h-3 after:w-3 after:-translate-x-1/2 after:translate-y-1.5 after:rounded-full  after:bg-indigo-600 group-last:before:hidden sm:flex-row sm:before:left-0 sm:before:ml-[16rem] sm:after:left-0 sm:after:ml-[16rem]">
        <time className="left-0 mb-3 inline-flex h-6 translate-y-0.5 items-center justify-center rounded-full text-xs font-semibold uppercase text-primary dark:text-gray-200 sm:absolute sm:mb-0">
          {duration}
        </time>
      </div>
      <p className="text-sm italic">{field}</p>
      <div className="text-sm text-muted-foreground">{location}</div>
      <div>{institution}</div>
    </div>
  );
}
