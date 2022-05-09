import { useLoader } from '@react-three/fiber';
import { Suspense } from 'react';
import { TextureLoader } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default function Monkey() {
  const gltf = useLoader(GLTFLoader, '/scene.gltf');
  const colorMap = useLoader(TextureLoader, '/textures/Material_baseColor.png');

  return (
    <Suspense fallback={null}>
      <primitive
        rotation={[0.25, 0, 0]}
        position={[0, -1.2, 0]}
        scale={3}
        map={colorMap}
        object={gltf.scene}
      />
    </Suspense>
  );
}
