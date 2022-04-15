import AppHeader from '../components/AppHeader';

export default function Home() {
  return (
    <>
      <AppHeader />
      <div className='gap-y-4 grid grid-cols-1'>
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
            full-stack development bootcamp in Malaysia. I backpacked through
            the region before returning home and beginning my new life as a
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
    </>
  );
}
