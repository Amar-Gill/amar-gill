import { useFrame, useLoader } from '@react-three/fiber';
import { Suspense, useRef } from 'react';
import { Mesh, TextureLoader } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default function Monkey() {
  const gltf = useLoader(GLTFLoader, '/scene.gltf');
  const colorMap = useLoader(TextureLoader, '/textures/Material_baseColor.png');

  let rotationSpeed = 0.27;

  const model = useRef<Mesh>(null!);

  useFrame(() => {
    if (rotationSpeed > 0.005) {
      rotationSpeed -= 0.002;
    }
    model.current.rotation.y += rotationSpeed;
  });

  return (
    <Suspense fallback={null}>
      <primitive
        ref={model}
        rotation={[0.25, 0, 0]}
        position={[0, -1.4, -0.4]}
        scale={2.9}
        map={colorMap}
        object={gltf.scene}
      />
    </Suspense>
  );
}
