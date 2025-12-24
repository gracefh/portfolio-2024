import { Canvas } from "@react-three/fiber";
import React, { useRef } from "react";
import { Camera, Group, InstancedMesh, Vector3 } from "three";
import {
  Instance,
  Instances,
  useGLTF,
  PerspectiveCamera,
  ScreenSpace,
} from "@react-three/drei";
import { Color, Mesh, Object3D } from "three";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useMousePosition } from "../utils/hooks";
import { Position, SPARKLE_POSITIONS } from "../utils/modelData";
import "./playground.css";
import {
  STANDARD_SCALE,
  StandardMaterial,
  colors,
  nodeIsMesh,
} from "../utils/modelUtils";
import { PageLinks } from "../components/homePageNav";

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
        scale={STANDARD_SCALE}
        ref={meshRef}
      >
        <StandardMaterial />
      </mesh>
    </group>
  );
}
export function Sparkle() {
  const { nodes } = useGLTF("sparkle/sparkle.gltf");
  const instanceRef = useRef<InstancedMesh>(null);
  const sparkle = React.useMemo(() => {
    return nodes["sparkle"];
  }, [nodes]);

  const dummy = new Object3D();
  useFrame((state, delta) => {
    if (instanceRef.current === null) {
      return;
    }
    for (let i = 0; i < SPARKLE_POSITIONS.length; i++) {
      const [x, y, z] = SPARKLE_POSITIONS[i];
      dummy.position.x = x;
      dummy.position.y =
        y +
        ((-1) ** i * Math.sin(state.clock.elapsedTime * ((23 - i) / 5)) * i) /
          2;
      dummy.position.z = z;
      dummy.scale.x = 0.3;
      dummy.scale.y = 0.3;
      dummy.scale.z = 0.3;
      dummy.updateMatrix();
      instanceRef.current.setMatrixAt(i, dummy.matrix);
    }
    instanceRef.current.instanceMatrix.needsUpdate = true;
  });

  if (!nodeIsMesh(sparkle)) {
    return <></>;
  }

  return (
    <Instances
      limit={100}
      geometry={sparkle.geometry}
      ref={instanceRef}
      scale={STANDARD_SCALE}
    >
      <StandardMaterial color={colors.blue} />
      {SPARKLE_POSITIONS.map((position, i) => {
        return <Instance position={position} scale={STANDARD_SCALE} key={i} />;
      })}
    </Instances>
  );
}
export function AnimalModel(props: {
  fileName: string;
  faceNode: string;
  eyeNode: string;
  scale?: [number, number, number];
  rotation?: [number, number, number];
  position: [x: number, y: number, z: number];
  positiveRotation?: boolean;
}) {
  const { nodes } = useGLTF(props.fileName);
  const groupRef = useRef<Group>(undefined);

  const face = React.useMemo(() => {
    return nodes[props.faceNode];
  }, [nodes, props.faceNode]);
  const eyes = React.useMemo(() => {
    return nodes[props.eyeNode];
  }, [nodes, props.eyeNode]);

  useFrame((state, delta) => {
    if (groupRef.current === undefined) {
      return;
    }

    if (props.positiveRotation) {
      groupRef.current.rotation.y += delta;
    } else {
      groupRef.current.rotation.y -= delta;
    }
    groupRef.current.position.y =
      props.position[1] + Math.sin(state.clock.elapsedTime * 2) * 10;
  });
  return (
    <group position={props.position} rotation={props.rotation} ref={groupRef}>
      {nodeIsMesh(face) && (
        <mesh
          castShadow
          receiveShadow
          geometry={face.geometry}
          scale={props.scale ?? STANDARD_SCALE}
        >
          <StandardMaterial />
        </mesh>
      )}
      {nodeIsMesh(eyes) && (
        <mesh
          castShadow
          receiveShadow
          geometry={eyes.geometry}
          scale={props.scale ?? STANDARD_SCALE}
        >
          <StandardMaterial color={new Color(10, 10, 10)} />
        </mesh>
      )}
    </group>
  );
}

useGLTF.preload("bear-mesh/bear-mesh.gltf");
useGLTF.preload("cat-mesh/cat-mesh.gltf");
useGLTF.preload("bunny-mesh-3/bunny-mesh-3.gltf");
useGLTF.preload("name-mesh/name-mesh.gltf");

export const Playground = () => {
  const mousePosition = useMousePosition();

  const lightPosition = React.useMemo(() => {
    return new Vector3(
      (mousePosition?.x ?? 0) - window.innerWidth / 2,
      -(mousePosition?.y ?? 0) + window.innerHeight / 2,
      100
    );
  }, [mousePosition]);

  return (
    <div id="canvas-container">
      {/* <div className="text-pink instrument-sans-500 home-page--notice">best viewed on desktop</div> */}
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight
          color="#98463b"
          position={lightPosition}
          intensity={0.01}
        />
        <NameModel />
        <AnimalModel
          fileName="bear-mesh/bear-mesh.gltf"
          faceNode="bear-body"
          eyeNode="bear-eyes"
          position={[150, 133, -350]}
          rotation={[Math.PI / 8, -Math.PI / 3, -Math.PI / 6]}
        />
        <AnimalModel
          fileName="bunny-mesh-3/bunny-mesh-3.gltf"
          faceNode="Area_(7)"
          eyeNode="Area_(2)"
          position={[-200, 150, -300]}
          rotation={[Math.PI / 6, 0, Math.PI / 6]}
          positiveRotation
        />
        <AnimalModel
          fileName="cat-mesh/cat-mesh.gltf"
          faceNode="cat-body"
          eyeNode="cat-eyes"
          position={[-20, -80, -200]}
          rotation={[0, 0, 0]}
        />
        <Sparkle />
      </Canvas>
      <PageLinks />
    </div>
  );
};
