import React from 'react';

function Typography({
  variant,
  children,
  className,
}: {
  variant?: string;
  children: React.ReactNode;
  className?: string;
}) {
  if (variant === 'h1') {
    return (
      <h1
        className={`mb-0 p-0 text-4xl font-semibold leading-3 dark:text-gray-200 ${className}`}
      >
        {children}
      </h1>
    );
  }
  if (variant === 'h2') {
    return (
      <h2
        className={`mb-0 p-0 text-3xl font-semibold leading-3 dark:text-gray-200 ${className}`}
      >
        {children}
      </h2>
    );
  }
  if (variant === 'h3') {
    return (
      <h3
        className={`mb-0 p-0 text-2xl font-semibold leading-3 dark:text-gray-200 ${className}`}
      >
        {children}
      </h3>
    );
  }
  if (variant === 'h4') {
    return (
      <h4
        className={`mb-0 text-xl font-semibold leading-3 dark:text-gray-200 ${className}`}
      >
        {children}
      </h4>
    );
  }
  if (variant === 'h5') {
    return (
      <h5
        className={`mb-0 text-lg font-semibold leading-3 dark:text-gray-200 ${className}`}
      >
        {children}
      </h5>
    );
  }
  if (variant === 'h6') {
    return (
      <h6
        className={`mb-0 text-base font-semibold leading-3 dark:text-gray-200 ${className}`}
      >
        {children}
      </h6>
    );
  }
  if (variant === 'small') {
    return (
      <small
        className={` text-sm  leading-3 dark:text-gray-300/80 ${className}`}
      >
        {children}
      </small>
    );
  }
  if (variant === 'base') {
    return (
      <p className={`text-base leading-3 dark:text-gray-200 ${className}`}>
        {children}
      </p>
    );
  }
  if (variant === 'caption') {
    return (
      <span
        className={`text-sm leading-3 text-gray-500 dark:text-gray-600 ${className}`}
      >
        {children}
      </span>
    );
  }
}

Typography.defaultProps = {
  variant: 'base',
  className: '',
};

export default Typography;
