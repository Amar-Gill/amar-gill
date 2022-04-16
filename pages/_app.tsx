import '../styles/globals.css';

import { AppProps } from 'next/app';
import React from 'react';

import AppHeader from '../components/AppHeader';

function MainLayout({ children }: { children: React.ReactNode }) {
  return <main className=' sm:p-0 max-w-3xl px-5 mx-auto'>{children}</main>;
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <AppHeader />
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}
