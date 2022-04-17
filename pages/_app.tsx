import '../styles/globals.css';

import { AppProps } from 'next/app';
import Link from 'next/link';
import { ThemeProvider } from 'next-themes';
import React from 'react';
import { GoMarkGithub } from 'react-icons/go';

import AppHeader from '../components/AppHeader';
import ThemeChanger from '../components/ThemeChanger';

function MainLayout({ children }: { children: React.ReactNode }) {
  return <main className='max-w-3xl px-5 mx-auto'>{children}</main>;
}

function AppNav() {
  return (
    <nav className='flex content-center justify-between max-w-3xl px-5 py-3 mx-auto'>
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
        <AppNav />
        <AppHeader />
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ThemeProvider>
    </>
  );
}
