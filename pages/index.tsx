import Image from 'next/image';

import photo from '../public/photo.jpg';

export default function Home() {
  return (
    <div className='gap-y-4 grid grid-cols-1'>
      <div className='card mb-4 text-lg text-center'>
        Hello, I&apos;m a full-stack developer based out of Toronto!
      </div>
      <div className='grid grid-cols-2 font-bold'>
        <div>
          <h1 className='text-5xl'>Amar S. Gill</h1>
          <h1 className='text-2xl'>Software Engineer</h1>
        </div>
        <div className='text-right'>
          <Image
            src={photo}
            width='172px'
            height='172px'
            className='rounded-3xl !border !border-slate-300 !border-solid'
            alt='Profile Picture'
            title="That's me! And some dorky human."
          />
        </div>
      </div>
      <div className='card'>
        <h1 className='border-amber-100 mb-2 text-xl border-b border-solid'>
          Bio
        </h1>
        <p className='mb-2'>
          I grew up in Toronto, Ontario. Being born to immigrant parents, I
          understood the value of hard work. I earned a Civil Engineering and
          Management degree from McMaster Unversity, and have over 4 years of
          experience in the Architecure, Engineering and Construction (AEC)
          industry.
        </p>
        <p>
          My interest in programming led me to switch careers into software
          engineering in 2019. I quit my job as a consultant to attend a
          full-stack development bootcamp in Malaysia. I backpacked through the
          region before returning home and beginning my new life as a
          professional developer.
        </p>
      </div>
      <div className='card'>
        <h1 className='border-amber-100 mb-3 text-xl border-b border-solid'>
          Work Experience
        </h1>
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
      </div>
    </div>
  );
}
