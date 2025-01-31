import { Roboto } from '@next/font/google';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { AppLayout } from '../lib/components/AppLayout';
import '../styles/globals.css';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-roboto',
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Universal Labs - React Tailwindcss</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <div className={`${roboto.variable} font-roboto flex flex-1 overflow-hidden`}>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </div>
    </>
  );
}
