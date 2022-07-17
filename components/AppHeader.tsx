import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import Monkey from './Monkey';

export default function AppHeader() {
  return (
    <header className='pb-8'>
      <div className='w-96 h-64 mx-auto'>
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
