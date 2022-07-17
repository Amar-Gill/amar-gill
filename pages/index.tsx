import Image from 'next/image';
import Link from 'next/link';
import { FaFilePdf } from 'react-icons/fa';
import { GoMarkGithub } from 'react-icons/go';
import { FiExternalLink } from 'react-icons/fi';

import photo from '../public/photo.jpg';

type SectionProps = {
  children: React.ReactNode;
  title: string;
};

function Section({ children, title }: SectionProps) {
  return (
    <section className='card'>
      <h1 className='border-slate-800 dark:border-amber-100 mb-2 text-xl border-b border-solid'>
        {title}
      </h1>
      {children}
    </section>
  );
}

export default function Home() {
  return (
    <div className='gap-y-4 grid grid-cols-1'>
      <div className='card sm:text-lg mb-4 text-center'>
        Hello, I&apos;m a full-stack developer based out of Toronto!
      </div>
      <div className='sm:grid-cols-2 grid grid-cols-1 gap-4 font-bold'>
        <div className='sm:text-left text-center'>
          <h1 className='text-5xl'>Amar S. Gill</h1>
          <h1 className='text-2xl'>Software Engineer</h1>
          <div className='sm:justify-start sm:pt-2 flex items-center justify-center pt-4'>
            <Link href='https://github.com/Amar-Gill' passHref>
              <a target='_blank'>
                <button className='border-slate-800 hover:bg-amber-200 dark:border-amber-100 dark:hover:bg-slate-700 sm:p-1 p-2 border rounded'>
                  <GoMarkGithub size={28} />
                </button>
              </a>
            </Link>
            <Link href='/resume.pdf' passHref>
              <a target='_blank'>
                <button className='dark:border-amber-100 hover:bg-amber-200 border-slate-800 dark:hover:bg-slate-700 sm:p-1 p-2 ml-3 font-bold border rounded'>
                  Resume&nbsp;
                  <FaFilePdf size={28} className='inline' />
                </button>
              </a>
            </Link>
          </div>
        </div>
        <div className=' sm:text-right text-center'>
          <Image
            src={photo}
            width='172px'
            height='172px'
            className='rounded-3xl !border !border-slate-800 dark:!border-slate-300 !border-solid'
            alt='Profile Picture'
            title="That's me! And some dorky human."
          />
        </div>
      </div>
      <Section title='Bio'>
        <p className='mb-2'>
          I grew up in Toronto, Ontario. Being born to immigrant parents, I
          understood the value of hard work. I earned a Civil Engineering and
          Management degree from McMaster University, and have over 4 years of
          experience in the Architecure, Engineering and Construction (AEC)
          industry.
        </p>
        <p>
          My interest in programming led me to switch careers into software
          engineering in 2019. I quit my job as a consultant to attend a
          full-stack development bootcamp in Malaysia. After backpacking through
          the region for some time, I returned home to begin my new life as a
          professional developer.
        </p>
      </Section>
      <Section title='Work Experience'>
        <div className='grid-cols-fit-3 grid content-start gap-4'>
          <div className='font-black'>2020</div>
          <div>Clearco (formerly Clearbanc)</div>
          <div>Software Engineer</div>
          <div className='font-black'>2017</div>
          <div>Morrison Hershfield</div>
          <div>Building Science Consultant</div>
          <div className='font-black'>2016</div>
          <div>Voith Hydro</div>
          <div>Project Coordinator</div>
          <div className='font-black'>2014</div>
          <div>Ontario Power Generation</div>
          <div>Nuclear Engineering Intern</div>
        </div>
      </Section>
      <p className='px-4 text-sm'>
        <a
          href='https://sketchfab.com/3d-models/data-the-monkey-a67c0e4268a047da988f6968e5103014'
          target='_blank'
          className='hover:underline dark:text-sky-200 text-sky-600'>
          Data the Monkey <FiExternalLink className='inline' />
        </a>{' '}
        by{' '}
        <a
          href='https://sketchfab.com/xinus22'
          target='_blank'
          className='hover:underline dark:text-sky-200 text-sky-600'>
          xinus22 <FiExternalLink className='inline' />
        </a>{' '}
        licensed under{' '}
        <a
          href='https://creativecommons.org/licenses/by/4.0/'
          target='_blank'
          className='hover:underline dark:text-sky-200 text-sky-600'>
          CC BY 4.0 <FiExternalLink className='inline' />
        </a>
      </p>
    </div>
  );
}
