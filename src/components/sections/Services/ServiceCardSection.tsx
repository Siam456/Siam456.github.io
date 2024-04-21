import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import ServiceData from '@/utils/services';
import React from 'react';

export default function ServiceCardSection() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {ServiceData.map((service, idx) => (
        <Card key={`service-${idx + 1}`} className="card flex-1 shadow">
          <CardHeader>
            <CardTitle>{service.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4 text-sm text-muted-foreground">
              {service.description}

              <ul className=" ml-5">
                {service.skills.map((skill, index) => (
                  <>
                    <li key={`skill-${index + 1}`} className="list-disc">
                      {skill.name} : {skill.description}
                    </li>
                    {skill.subSkills && skill.subSkills.length > 0 && (
                      <ul>
                        {skill.subSkills.map((subSkill, subIndex) => (
                          <li
                            key={`subSkill-${subIndex + 1}`}
                            className="flex gap-2"
                          >
                            <strong>-</strong>
                            <span>
                              {subSkill.name}: {subSkill.description}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
