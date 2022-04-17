import '../styles/globals.css';

import { AppProps } from 'next/app';
import React from 'react';

import AppHeader from '../components/AppHeader';
import { ThemeProvider } from 'next-themes';
import ThemeChanger from '../components/ThemeChanger';

function MainLayout({ children }: { children: React.ReactNode }) {
  return <main className=' sm:p-0 max-w-3xl px-5 mx-auto'>{children}</main>;
}

function AppNav() {
  return (
    <nav>
      <ThemeChanger />
    </nav>
  );
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider attribute='class'>
        <AppNav />
        <AppHeader />
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ThemeProvider>
    </>
  );
}
