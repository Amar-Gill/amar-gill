import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Mesh } from 'three';

export default function Crystal() {
  const mesh = useRef<Mesh>(null!);

  useFrame((_state, _delta) => (mesh.current.rotation.y += 0.01));
  return (
    <mesh ref={mesh}>
      <icosahedronGeometry args={[2]} />
      <meshStandardMaterial color='#9bc2c4' />
    </mesh>
  );
}
