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
          <p>TODO</p>
          <p>TODO</p>
        </div>
      </div>
    </>
  );
}
