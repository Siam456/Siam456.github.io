import React from 'react';

export default function SectionTitle({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <div
      className="
     my-12 flex flex-col items-center space-y-1"
    >
      <h1 className="animate-fadeUp text-4xl font-bold opacity-80">{title}</h1>

      {description ? (
        <p className="animate-fadeUp text-muted-foreground">{description}</p>
      ) : null}
    </div>
  );
}

SectionTitle.defaultProps = {
  description: null,
};
