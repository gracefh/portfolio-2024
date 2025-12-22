import {
  Color,
  Mesh,
  MeshPhysicalMaterialProperties,
  Object3D,
  Object3DEventMap,
} from "three";

export const nodeIsMesh = (node?: Object3D<Object3DEventMap>): node is Mesh =>
  node?.type === "Mesh";



export const STANDARD_SCALE: [number, number, number] = [0.25, 0.25, 0.25];

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

export const StandardMaterial = (props: Partial<MeshPhysicalMaterialProperties>) => {
  return <meshPhysicalMaterial {...meshProperties} {...props} />;
};


export const colors: Partial<Record<string, Color>> = {
  pink: new Color(230, 112, 137),
  green: new Color(100, 214, 145),
  yellow: new Color(239, 231, 60),
  blue: new Color(103, 166, 214),
};
