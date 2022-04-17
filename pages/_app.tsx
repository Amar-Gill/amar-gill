import '../styles/globals.css';

import { AppProps } from 'next/app';
import React from 'react';

import AppHeader from '../components/AppHeader';
import { ThemeProvider } from 'next-themes';
import ThemeChanger from '../components/ThemeChanger';
import { GoMarkGithub } from 'react-icons/go';
import Link from 'next/link';

function MainLayout({ children }: { children: React.ReactNode }) {
  return <main className='max-w-3xl px-5 mx-auto'>{children}</main>;
}

function AppNav() {
  return (
    <nav className='flex content-center justify-between py-3'>
      <Link passHref href='https://github.com/Amar-Gill/amar-gill'>
        <a target='_blank' className='flex items-center'>
          <GoMarkGithub className='inline' size={20} />
          &nbsp;Source
        </a>
      </Link>
      <ThemeChanger />
    </nav>
  );
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider attribute='class'>
        <MainLayout>
          <AppNav />
          <AppHeader />
          <Component {...pageProps} />
        </MainLayout>
      </ThemeProvider>
    </>
  );
}
