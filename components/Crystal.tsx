import { useFrame } from "@react-three/fiber"
import { useRef } from "react";

export default function Crystal() {
    const mesh = useRef();

    useFrame((state, delta) => (mesh.current.rotation.y += 0.01));
    return (
        
        <mesh ref={mesh}>
        <boxGeometry />
        <meshStandardMaterial />
        </mesh>
    )
}