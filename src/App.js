import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Background from "three/src/renderers/common/Background.js";

function Box() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="royalblue" />
    </mesh>
  );
}

export default function App() {
  return (
    <Canvas style={{ height: "100vh", width: "100vw", background: "black" }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} />
      <Box />
      <OrbitControls />
    </Canvas>
  );
}

