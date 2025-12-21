import React from "react";

export type MousePosition = {
  x: number;
  y: number;
};

export const useMousePosition = () => {
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
