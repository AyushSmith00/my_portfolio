
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import type { Group, Mesh } from "three";

function ChromeSculpture() {
  const sculpture = useRef<Group>(null);
  const orbit = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (!sculpture.current) return;

    const t = state.clock.elapsedTime;
    const pointer = state.pointer;
    const smooth = 1 - Math.exp(-delta * 3);

    sculpture.current.rotation.x +=
      ((pointer.y * 0.22 + Math.sin(t * 0.3) * 0.08) -
        sculpture.current.rotation.x) * smooth;

    sculpture.current.rotation.y +=
      ((t * 0.18 + pointer.x * 0.3) -
        sculpture.current.rotation.y) * smooth;

    sculpture.current.rotation.z +=
      (pointer.x * 0.08 - sculpture.current.rotation.z) * smooth;

    sculpture.current.position.y =
      Math.sin(t * 0.8) * 0.09;

    if (orbit.current) {
      orbit.current.rotation.x = t * 0.12 + 0.7;
      orbit.current.rotation.y = t * 0.16;
    }
  });

  return (
    <group>
      {/* Main polished chrome sculpture */}
      <group ref={sculpture}>
        <mesh>
          <torusKnotGeometry args={[0.76, 0.235, 240, 32, 2, 3]} />
          <meshPhysicalMaterial
            color="#e4e7e2"
            metalness={1}
            roughness={0.12}
            clearcoat={1}
            clearcoatRoughness={0.08}
            envMapIntensity={2}
          />
        </mesh>

        {/* Fine lime detail inside the sculpture */}
        <mesh rotation={[0.5, 0.3, 0.2]}>
          <torusGeometry args={[0.38, 0.012, 12, 100]} />
          <meshStandardMaterial
            color="#c4ff3d"
            emissive="#9dff00"
            emissiveIntensity={0.6}
            metalness={0.65}
            roughness={0.25}
          />
        </mesh>
      </group>

      {/* Large, delicate orbital ring */}
      <mesh ref={orbit}>
        <torusGeometry args={[1.4, 0.009, 8, 180]} />
        <meshStandardMaterial
          color="#c4ff3d"
          emissive="#c4ff3d"
          emissiveIntensity={0.3}
          metalness={0.6}
          roughness={0.3}
        />
      </mesh>

      {/* Small chrome satellite */}
      <mesh position={[1.12, 0.78, 0.1]}>
        <icosahedronGeometry args={[0.075, 2]} />
        <meshPhysicalMaterial
          color="#dfe4e0"
          metalness={1}
          roughness={0.1}
          clearcoat={1}
        />
      </mesh>
    </group>
  );
}

export default function Scene3D() {
  return (
    <div className="scene3d">
      <Canvas
        camera={{ position: [0, 0, 4.3], fov: 42 }}
        dpr={[1, 1.5]}
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: "high-performance",
        }}
      >
        <ambientLight intensity={0.35} />

        <directionalLight
          position={[4, 5, 3]}
          intensity={3}
        />

        <directionalLight
          position={[-4, 1, -2]}
          intensity={2.5}
          color="#c4ff3d"
        />

        <pointLight
          position={[0, -2, 3]}
          intensity={18}
          color="#c4ff3d"
          distance={8}
        />

        {/* Studio reflections make the chrome look metallic */}
        <Environment preset="studio" />

        <ChromeSculpture />
      </Canvas>
    </div>
  );
}
