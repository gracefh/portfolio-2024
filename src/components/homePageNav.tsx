import { useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { motion } from "framer-motion";
import { easing } from "maath";
import React, { useRef, useState, useCallback } from "react";
import { NavLink } from "react-router-dom";
import { Color, Group } from "three";
import {
    colors,
  nodeIsMesh,
  STANDARD_SCALE,
  StandardMaterial,
} from "../utils/modelUtils";

export function AnimalIcon(props: {
  fileName: string;
  faceNode: string;
  eyeNode: string;
  rotation?: [number, number, number];
  color?: Color;
  isHovered?: boolean;
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
    if (!props.isHovered) {
      easing.dampE(groupRef.current.rotation, [0, 0, 0], 0.15, delta);
      return;
    }

    groupRef.current.rotation.y += delta;
  });
  return (
    <group position={[0, 0, -50]} rotation={props.rotation} ref={groupRef}>
      {nodeIsMesh(face) && (
        <mesh
          castShadow
          receiveShadow
          geometry={face.geometry}
          scale={STANDARD_SCALE}
        >
          <StandardMaterial color={props.color}/>
        </mesh>
      )}
      {nodeIsMesh(eyes) && (
        <mesh
          castShadow
          receiveShadow
          geometry={eyes.geometry}
          scale={STANDARD_SCALE}
        >
          <StandardMaterial color={new Color(10, 10, 10)} />
        </mesh>
      )}
    </group>
  );
}

const IconScene = (props: { color?: Color; isHovered?: boolean }) => {
  return (
    <div className="home-page-menu--icon">
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight
          color="#98463b"
          position={[10, 10, 5]}
          intensity={0.01}
        />
        <AnimalIcon
          fileName="bunny-mesh-3/bunny-mesh-3.gltf"
          faceNode="Area_(7)"
          eyeNode="Area_(2)"
          rotation={[0, 0, 0]}
          color={props.color}
          isHovered={props.isHovered}
        />
      </Canvas>
    </div>
  );
};

const textMotion = {
  rest: {},
  hover: {
    scale: 1.1,
  },
  tap: {
    scale: 0.95,
  },
};

const HomePageNavItem = (props: {
  color?: Color;
  link: string;
  title: string;
}) => {
  const [isHovered, setIsHover] = useState(false);

  const setHoveredTrue = useCallback(() => {
    setIsHover(true);
  }, [setIsHover]);

  const setHoveredFalse = useCallback(() => {
    setIsHover(false);
  }, [setIsHover]);

  return (
    <motion.div
      className="home-page-menu--item"
      onPointerEnter={setHoveredTrue}
      onPointerLeave={setHoveredFalse}
      whileHover="hover"
      whileTap="tap"
      layout
    >
      <IconScene isHovered={isHovered} color={props.color} />
      <motion.div variants={textMotion} transition={{ type: "tween" }} layout>
        <NavLink
          to={props.link}
          className={`instrument-sans-500-spaced text-pink header-md`}
        >
          {props.title}
        </NavLink>
      </motion.div>
    </motion.div>
  );
};

export const PageLinks = () => {
  return (
    <div className="home-page-menu--wrapper">
      <div className="home-page-menu">
        <HomePageNavItem link="/projects" title="projects" color={colors.blue}/>
        <HomePageNavItem link="/art" title="art" color={colors.pink}/>
        <HomePageNavItem link="/about" title="about me" color={colors.yellow} />
        <HomePageNavItem link="/resume" title="resume" color={colors.green}/>
      </div>
    </div>
  );
};
