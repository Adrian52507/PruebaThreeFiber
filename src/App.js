import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function Racket() {
  return (
    <group rotation={[-0.5, 0, 0]} position={[0, 0, 0]}>
      {/* Cabeza de la raqueta */}
      <mesh position={[0, 0.5, 0]}>
        <boxGeometry args={[0.6, 1.2, 0.05]} />
        <meshStandardMaterial color="green" />
      </mesh>
      {/* Mango de la raqueta */}
      <mesh position={[0, -0.5, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 1, 32]} />
        <meshStandardMaterial color="lime" />
      </mesh>
    </group>
  );
}

export default function App() {
  return (
    <Canvas
      style={{ height: "100vh", width: "100vw", background: "black" }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} />
      <Racket />
      <OrbitControls />
    </Canvas>
  );
}

