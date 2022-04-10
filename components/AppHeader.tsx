import { Canvas } from '@react-three/fiber';
import Image from 'next/image';

import Crystal from './Crystal';
import photo from '../public/photo.jpg';

export default function AppHeader() {
  return (
    <header className='text-amber-100 pb-8'>
      <div className='w-56 h-56 mx-auto'>
        <Canvas>
          <ambientLight intensity={0.1} />
          <directionalLight color='white' position={[-2, 4, 6]} />
          <Crystal />
        </Canvas>
      </div>
      <div className='rounded-3xl bg-slate-600 p-4 mb-8 text-center'>
        Hello, I'm a full-stack developer based out of Toronto!
      </div>
      <div className='grid grid-cols-2 font-bold'>
        <div>
          <h1 className=' text-5xl'>Amar S.Gill</h1>
          <h1 className=' text-4xl'>Software Engineer</h1>
        </div>
        <div className='text-right'>
          <Image
            src={photo}
            width='172px'
            height='172px'
            className='rounded-3xl mx-auto'
            layout='fixed'
          />
        </div>
      </div>
    </header>
  );
}
