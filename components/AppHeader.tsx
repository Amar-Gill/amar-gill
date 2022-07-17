import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import Monkey from './Monkey';

export default function AppHeader() {
  return (
    <header className='pb-8'>
      <div className='w-80 h-56 mx-auto border-2 border-red-400'>
        <Canvas>
          <OrbitControls />
          <ambientLight intensity={0.1} />
          <directionalLight color='white' position={[-2, 4, 6]} />
          <Monkey />
        </Canvas>
      </div>
    </header>
  );
}
