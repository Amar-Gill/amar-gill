import { Canvas } from '@react-three/fiber';

import Crystal from './Crystal';

export default function AppHeader() {
  return (
    <header className='pb-8'>
      <div className='w-56 h-56 mx-auto'>
        <Canvas>
          <ambientLight intensity={0.1} />
          <directionalLight color='white' position={[-2, 4, 6]} />
          <Crystal />
        </Canvas>
      </div>
    </header>
  );
}
