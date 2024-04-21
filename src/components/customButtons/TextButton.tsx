import Link from 'next/link';
import React from 'react';

export default function TextButton({
  text,
  href,
  className,
  icon,
}: {
  text: string;
  href: string;
  className?: string;
  icon?: React.ReactNode;
}) {
  return (
    <Link
      className={`${className} flex items-center gap-1 fill-blue-700 text-sm font-medium text-blue-700 hover:underline dark:fill-blue-400 dark:text-blue-400`}
      href={href}
    >
      {icon}
      {text}
    </Link>
  );
}

TextButton.defaultProps = {
  className: '',
  icon: null,
};
