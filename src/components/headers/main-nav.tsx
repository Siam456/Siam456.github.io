import Link from 'next/link';

import { cn } from '@/lib/utils';
import sidebar from '@/utils/sidebar';
import { useRouter } from 'next/router';

function MainNav({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  const router = useRouter();
  return (
    <nav
      className={cn(
        'flex items-center space-x-4 max-md:hidden lg:space-x-6',
        className,
      )}
      {...props}
    >
      {sidebar.map((item, index: number) => (
        <Link
          key={`sidebar-item-${index + 1}`}
          href={item.href}
          className={`text-sm font-medium transition-colors hover:text-primary ${router.pathname === item.href ? '' : 'text-muted-foreground'}`}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
}

export default MainNav;
