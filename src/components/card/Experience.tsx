import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from '../ui/card';

export default function ExperienceCard({
  title,
  duration,
  workMode,
  description,
  skills,
}: {
  title: string;
  duration: string;
  workMode: string;
  description?: string[];
  skills?: string[];
}) {
  const [showAllSkills, setShowAllSkills] = useState(false);

  return (
    <div className="is-active group relative flex items-center justify-between md:justify-normal md:even:flex-row-reverse">
      <div
        className="after:border-1 ml-[15px] flex h-3 w-3 shrink-0 items-center justify-center rounded-full shadow before:absolute before:left-2 before:h-full before:-translate-x-1/2 group-[.is-active]:bg-indigo-600 md:order-1 md:group-odd:ml-7 md:group-odd:translate-x-1/2 md:group-even:mr-7 md:group-even:-translate-x-1/2 
                  "
      />

      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] ">
        <Card className=" w-full">
          <CardHeader>
            <p>{title}</p>
            <span>
              <p className=" text-sm text-muted-foreground">{duration}</p>
              {workMode && (
                <p className=" text-sm text-muted-foreground">{workMode}</p>
              )}
            </span>
          </CardHeader>
          {(description && description.length > 0) ||
          (skills && skills.length > 0) ? (
            <CardContent className="flex flex-col gap-4  text-sm text-muted-foreground">
              <ul className="ml-5 list-disc space-y-2 ">
                {description &&
                  description.length > 0 &&
                  description.map((desc, idx) => (
                    <li key={`desc-${idx + 1}`}>{desc}</li>
                  ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-2">
                {skills &&
                  skills
                    .slice(0, showAllSkills ? skills.length : 2)
                    .map((skill, idx) => (
                      <span
                        key={`skill-${idx + 1}`}
                        className="rounded-md bg-accent-foreground bg-opacity-10 px-2 py-1 text-xs text-accent"
                      >
                        {skill}
                      </span>
                    ))}

                {skills &&
                  skills.length > 2 &&
                  (!showAllSkills ? (
                    <button
                      className="rounded-md bg-accent-foreground bg-opacity-10 px-2 py-1 text-xs text-accent"
                      onClick={() => setShowAllSkills(true)}
                    >
                      +{skills.length - 2} other skills
                    </button>
                  ) : (
                    <button
                      className="rounded-md bg-accent-foreground bg-opacity-10 px-2 py-1 text-xs text-accent"
                      onClick={() => setShowAllSkills(false)}
                    >
                      - Show less
                    </button>
                  ))}
              </div>
            </CardContent>
          ) : null}
        </Card>
      </div>
    </div>
  );
}

ExperienceCard.defaultProps = {
  description: [],
  skills: [],
};
