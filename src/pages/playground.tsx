import { Canvas } from "@react-three/fiber";
import React, { useRef } from "react";
import { Group, PerspectiveCamera, Vector3 } from "three";
import { useGLTF } from "@react-three/drei";
import {
  Color,
  Mesh,
  MeshPhysicalMaterialProperties,
  Object3D,
  Object3DEventMap,
} from "three";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";

type MousePosition = {
  x: number;
  y: number;
};
const useMousePosition = () => {
  const [mousePosition, setMousePosition] = React.useState<
    MousePosition | undefined
  >(undefined);
  const updateMousePosition = React.useCallback(
    (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    },
    [setMousePosition]
  );

  React.useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  });
  return mousePosition;
};

const meshProperties: Partial<MeshPhysicalMaterialProperties> = {
  transparent: true,
  opacity: 0.8,
  color: new Color(230, 112, 137),
  roughness: 0.25,
  metalness: 0.9,
  reflectivity: 0.85,
  visible: true,
  iridescence: 0.7,
  fog: true,
  depthTest: true,
  depthWrite: true,
};

const nodeIsMesh = (node?: Object3D<Object3DEventMap>): node is Mesh =>
  node?.type === "Mesh";

const Material = (props: { color?: Color }) => {
  return (
    <meshPhysicalMaterial
      {...meshProperties}
      color={props.color ?? new Color(230, 112, 137)}
    />
  );
};

export function NameModel() {
  const { nodes } = useGLTF("name-mesh/name-mesh.gltf");
  const area1 = nodes["Area_(1)"];
  const meshRef = useRef<Mesh>(undefined);
  const [dummy] = React.useState(() => new Object3D());

  useFrame((state, delta) => {
    if (meshRef?.current === undefined) {
      return;
    }
    dummy.lookAt(state.pointer.x, state.pointer.y, 3);
    easing.dampQ(meshRef.current.quaternion, dummy.quaternion, 0.15, delta);
  });

  return (
    <group dispose={null} position={[0, 0, -300]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodeIsMesh(area1) ? area1.geometry : undefined}
        scale={[0.25, 0.25, 0.25]}
        ref={meshRef}
      >
        <Material />
      </mesh>
    </group>
  );
}

export function BunnyModel() {
  const { nodes } = useGLTF("bunny-mesh-3/bunny-mesh-3.gltf");
  const groupRef = useRef<Group>(undefined);
  const bunnyFaceRef = useRef<Mesh>(undefined);
  const bunnyEyeRef = useRef<Mesh>(undefined);

  const bunnyFace = nodes["Area_(7)"];
  const bunnyEyes = nodes["Area_(2)"];
  const [dummy] = React.useState(() => new Object3D());

  useFrame((state, delta) => {
    if (
      groupRef.current === undefined ||
      bunnyFaceRef.current === undefined ||
      bunnyEyeRef.current === undefined
    ) {
      return;
    }

    groupRef.current.rotation.y += delta;
    groupRef.current.position.y =
      150 + Math.sin(state.clock.elapsedTime * 2) * 10;
  });
  return (
    <group
      position={[-200, 150, -300]}
      rotation={[Math.PI / 6, 0, Math.PI / 6]}
      ref={groupRef}
    >
      {nodeIsMesh(bunnyFace) && (
        <mesh
          castShadow
          receiveShadow
          geometry={bunnyFace.geometry}
          ref={bunnyFaceRef}
          scale={[0.25, 0.25, 0.25]}
        >
          <Material />
        </mesh>
      )}
      {nodeIsMesh(bunnyEyes) && (
        <mesh
          castShadow
          receiveShadow
          geometry={bunnyEyes.geometry}
          ref={bunnyEyeRef}
          scale={[0.25, 0.25, 0.25]}
        >
          <Material color={new Color(10, 10, 10)} />
        </mesh>
      )}
    </group>
  );
}

useGLTF.preload("bunny-mesh-3/bunny-mesh-3.gltf");
useGLTF.preload("name-mesh/name-mesh.gltf");

export const Playground = () => {
  const mousePosition = useMousePosition();

  const position = React.useMemo(() => {
    return new Vector3(
      (mousePosition?.x ?? 0) - window.innerWidth / 2,
      -(mousePosition?.y ?? 0) + window.innerHeight / 2,
      100
    );
  }, [mousePosition]);

  return (
    <div id="canvas-container">
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight
          color="#98463b"
          position={position}
          intensity={0.01}
        />
        <NameModel />
        <BunnyModel />
      </Canvas>
    </div>
  );
};
