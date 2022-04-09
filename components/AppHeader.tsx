import { Canvas } from '@react-three/fiber';

import Crystal from './Crystal';

export default function AppHeader() {
  return (
    <header className='bg-slate-800 pb-8'>
      <div className='w-56 h-56 mx-auto'>
        <Canvas>
          <ambientLight intensity={0.1} />
          <directionalLight color='white' position={[-2, 4, 6]} />
          <Crystal />
        </Canvas>
      </div>
      <div className='text-amber-100 font-bold text-center'>
        <h1 className=' text-5xl'>Amar S.Gill</h1>
        <h1 className=' text-4xl'>Software Engineer</h1>
      </div>
    </header>
  );
}
