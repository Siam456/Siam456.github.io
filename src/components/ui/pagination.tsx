import React from 'react';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DotsHorizontalIcon,
} from '@radix-ui/react-icons';

import { cn } from '@/lib/utils';
import { ButtonProps, buttonVariants } from '@/components/ui/button';

function Pagination({
  className,
  ...props
}: React.ComponentProps<'nav'> & {
  className?: string;
}) {
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      className={cn('mx-auto flex w-full justify-center', className)}
      {...props}
    />
  );
}
Pagination.displayName = 'Pagination';
Pagination.defaultProps = {
  className: '',
};

const PaginationContent = React.forwardRef(function PaginationContent(
  { className, ...props }: React.ComponentProps<'ul'> & { className?: string },
  ref: React.Ref<HTMLUListElement>,
) {
  return (
    <ul
      ref={ref}
      className={cn('flex flex-row items-center gap-1', className)}
      {...props}
    />
  );
});
PaginationContent.displayName = 'PaginationContent';
PaginationContent.defaultProps = {
  className: '',
};

const PaginationItem = React.forwardRef(function PaginationItem(
  { className, ...props }: React.ComponentProps<'li'> & { className?: string },
  ref: React.Ref<HTMLLIElement>,
) {
  return <li ref={ref} className={cn('', className)} {...props} />;
});
PaginationItem.displayName = 'PaginationItem';
PaginationItem.defaultProps = {
  className: '',
};

type PaginationLinkProps = {
  isActive?: boolean;
  size?: ButtonProps['size'];
} & React.ComponentProps<'a'> & { className?: string };

function PaginationLink({
  className,
  isActive,
  size = 'icon',
  ...props
}: PaginationLinkProps) {
  return (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    <a
      aria-current={isActive ? 'page' : undefined}
      className={cn(
        buttonVariants({
          variant: isActive ? 'outline' : 'ghost',
          size,
        }),
        className,
      )}
      {...props}
    />
  );
}
PaginationLink.displayName = 'PaginationLink';
PaginationLink.defaultProps = {
  size: 'icon',
  className: '',
  isActive: false,
};

function PaginationPrevious({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink> & { className?: string }) {
  return (
    <PaginationLink
      aria-label="Go to previous page"
      size="default"
      className={cn('gap-1 pl-2.5', className)}
      {...props}
    >
      <ChevronLeftIcon className="h-4 w-4" />
      <span>Previous</span>
    </PaginationLink>
  );
}
PaginationPrevious.displayName = 'PaginationPrevious';
PaginationPrevious.defaultProps = {
  className: '',
};

function PaginationNext({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink> & { className?: string }) {
  return (
    <PaginationLink
      aria-label="Go to next page"
      size="default"
      className={cn('gap-1 pr-2.5', className)}
      {...props}
    >
      <span>Next</span>
      <ChevronRightIcon className="h-4 w-4" />
    </PaginationLink>
  );
}
PaginationNext.displayName = 'PaginationNext';
PaginationNext.defaultProps = {
  className: '',
};

function PaginationEllipsis({
  className,
  ...props
}: React.ComponentProps<'span'> & { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn('flex h-9 w-9 items-center justify-center', className)}
      {...props}
    >
      <DotsHorizontalIcon className="h-4 w-4" />
      <span className="sr-only">More pages</span>
    </span>
  );
}
PaginationEllipsis.displayName = 'PaginationEllipsis';
PaginationEllipsis.defaultProps = {
  className: '',
};

export {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
};
