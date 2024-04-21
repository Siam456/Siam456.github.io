import React, { PropsWithChildren } from 'react';

import SiteHeader from '@/components/headers/SiteHeader';
import SiteFooter from '@/components/footer';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <SiteHeader />
      <main>
        <div className="relative flex-1">{children}</div>
      </main>
      <SiteFooter />
    </>
  );
}
