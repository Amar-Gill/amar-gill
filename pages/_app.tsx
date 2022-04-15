import '../styles/globals.css';

import { AppProps } from 'next/app';
import React from 'react';

import AppHeader from '../components/AppHeader';

function Layout({ children }: { children: React.ReactNode }) {
  return <div className='max-w-3xl mx-auto'>{children}</div>;
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <AppHeader />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
