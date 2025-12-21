import { Canvas } from "@react-three/fiber";
import React, { useRef } from "react";
import { Group, InstancedMesh, Vector3 } from "three";
import { Instance, Instances, useGLTF } from "@react-three/drei";
import {
  Color,
  Mesh,
  MeshPhysicalMaterialProperties,
  Object3D,
  Object3DEventMap,
} from "three";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useMousePosition } from "../utils/hooks";
import { Position, SPARKLE_POSITIONS } from "../utils/modelData";
import "./playground.css";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const meshProperties: Partial<MeshPhysicalMaterialProperties> = {
  transparent: true,
  opacity: 0.8,
  color: new Color(230, 112, 137),
  roughness: 0.25,
  metalness: 0.9,
  reflectivity: 0.85,
  visible: true,
  // iridescence: 0.7,
  fog: true,
  depthTest: true,
  depthWrite: true,
};

const STANDARD_SCALE: [number, number, number] = [0.25, 0.25, 0.25];

const colors: Partial<Record<string, Color>> = {
  pink: new Color(230, 112, 137),
  orange: new Color(219, 124, 2),
  yellow: new Color(239, 231, 60),
  blue: new Color(103, 166, 214),
};

type RGB = { r: number; g: number; b: number };

const nodeIsMesh = (node?: Object3D<Object3DEventMap>): node is Mesh =>
  node?.type === "Mesh";

const Material = (props: Partial<MeshPhysicalMaterialProperties>) => {
  return <meshPhysicalMaterial {...meshProperties} {...props} />;
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
        scale={STANDARD_SCALE}
        ref={meshRef}
      >
        <Material />
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

  const mousePosition = useMousePosition();

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
      limit={100} // Optional: max amount of items (for calculating buffer size)
      geometry={sparkle.geometry}
      ref={instanceRef}
      scale={STANDARD_SCALE}
    >
      <Material color={colors.blue} />

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
  const faceRef = useRef<Mesh>(undefined);
  const eyeRef = useRef<Mesh>(undefined);

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
          ref={faceRef}
          scale={props.scale ?? STANDARD_SCALE}
        >
          <Material />
        </mesh>
      )}
      {nodeIsMesh(eyes) && (
        <mesh
          castShadow
          receiveShadow
          geometry={eyes.geometry}
          ref={eyeRef}
          scale={props.scale ?? STANDARD_SCALE}
        >
          <Material color={new Color(10, 10, 10)} />
        </mesh>
      )}
    </group>
  );
}

export function AnimalIcon(props: {
  fileName: string;
  faceNode: string;
  eyeNode: string;
  scale?: [number, number, number];
  rotation?: [number, number, number];
  position: [x: number, y: number, z: number];
}) {
  const { nodes } = useGLTF(props.fileName);
  const groupRef = useRef<Group>(undefined);
  const faceRef = useRef<Mesh>(undefined);
  const eyeRef = useRef<Mesh>(undefined);

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
  });
  return (
    <group position={props.position} rotation={props.rotation} ref={groupRef}>
      {nodeIsMesh(face) && (
        <mesh
          castShadow
          receiveShadow
          geometry={face.geometry}
          ref={faceRef}
          scale={props.scale ?? STANDARD_SCALE}
        >
          <Material />
        </mesh>
      )}
      {nodeIsMesh(eyes) && (
        <mesh
          castShadow
          receiveShadow
          geometry={eyes.geometry}
          ref={eyeRef}
          scale={props.scale ?? STANDARD_SCALE}
        >
          <Material color={new Color(10, 10, 10)} />
        </mesh>
      )}
    </group>
  );
}

useGLTF.preload("bear-mesh/bear-mesh.gltf");
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
          // scale={[0.3, 0.3, 0.3]}
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
          // scale={[0.4, 0.4, 0.4]}
        />
        <Sparkle />
      </Canvas>
      {/* WIP on nav bar */}
      {/* <div className="home-page-menu--wrapper">
        <div className="home-page-menu">
          <div className="home-page-menu--item">
            {" "}
            <div className="home-page-menu--icon">
              <Canvas>
                <ambientLight intensity={0.1} />
                <directionalLight
                  color="#98463b"
                  position={lightPosition}
                  intensity={0.01}
                />
                <AnimalIcon
                  fileName="cat-mesh/cat-mesh.gltf"
                  faceNode="cat-body"
                  eyeNode="cat-eyes"
                  position={[0, 0, -50]}
                  rotation={[0, 0, 0]}
                />
              </Canvas>
            </div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "tween" }}
              layout
            >
              <NavLink
                to="/projects"
                className={({ isPending }) =>
                  `instrument-sans-500-spaced nav-link ${
                    isPending ? "active" : ""
                  }`
                }
              >
                Projects
              </NavLink>
            </motion.div>
          </div>
        </div>
      </div> */}
    </div>
  );
};
