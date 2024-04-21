import '../styles/globals.css';

import type { AppPropsWithLayout } from '@/types';
import Layout from '@/layouts';

import useFonts from '@/hooks/useFonts';
import { ThemeProvider } from 'next-themes';
import Toaster from '@/components/ui/toaster';

const ComponentMap = {
  base: ({ Component, pageProps }: AppPropsWithLayout) => (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  ),
  none: ({ Component, pageProps }: AppPropsWithLayout) => (
    <Component {...pageProps} />
  ),
};

export default function App({
  Component,
  pageProps,
  ...rest
}: AppPropsWithLayout) {
  const { inter } = useFonts();

  const layout = Component.layout ?? 'none';
  const ModifiedComponent = ComponentMap[layout];

  return (
    <div className={inter}>
      {/* <Head></Head> */}
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Toaster />
        <ModifiedComponent
          Component={Component}
          pageProps={{
            ...pageProps,
          }}
          {...rest}
        />
      </ThemeProvider>
    </div>
  );
}
