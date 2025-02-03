import gsap from "gsap";
import { Linear } from "gsap";
import "./playground.css";
import { useEffect } from "react";
import { Art } from "./art";

const Blobs = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" id="loader">
      <defs>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
            result="goo"
          />
          <feBlend in2="goo" in="SourceGraphic" result="mix" />
        </filter>
        <linearGradient id="MyGradient">
          <stop offset="5%" stop-color="#f7c3c3" />
          <stop offset="40%" stop-color="#e99393" />
          <stop offset="100%" stop-color="#ff7f77" />
        </linearGradient>
      </defs>
      <mask id="maska">
        <g className="blobs">
          <circle
            className="blob"
            cx="440"
            cy="250"
            r="30"
            transform="rotate(0) translate(0, 0) rotate(0)"
          />
          <circle
            className="blob"
            cx="500"
            cy="320"
            r="70"
            transform="rotate(0) translate(0, 0) rotate(0)"
          />
          <circle
            className="blob"
            cx="300"
            cy="390"
            r="40"
            transform="rotate(0) translate(0, 0) rotate(0)"
          />
          <circle
            className="blob"
            cx="380"
            cy="390"
            r="80"
            transform="rotate(0) translate(0, 0) rotate(0)"
          />
          <circle
            className="blob"
            cx="470"
            cy="450"
            r="20"
            transform="rotate(0) translate(0, 0) rotate(0)"
          />
        </g>
      </mask>
      <rect
        x="200"
        y="200"
        mask="url(#maska)"
        fill="url(#MyGradient)"
        width="400"
        height="400"
      />
    </svg>
  );
};
export const Playground = () => {
  const radius = 8;
  const tween = gsap.fromTo(
    ".blob",
    {
      attr: {
        transform: (i: number) => {
          let r = i * 90;
          return (
            "rotate(" + r + ") translate(" + radius + ",0.1) rotate(" + -r + ")"
          );
        },
      },
    },
    {
      duration: 4,
      attr: {
        transform: (i: number) => {
          let r = i * 90 + 360;
          return (
            "rotate(" + r + ") translate(" + radius + ",0.1) rotate(" + -r + ")"
          );
        },
      },
      ease: Linear.easeNone,
      repeat: -1,
    }
  );

  // tween.duration(4)
  useEffect(() => {
    tween.play();
  }, [tween]);

  return (
    <main>
      <section>
        {/* <Blobs /> */}
        <Art />
      </section>
    </main>
  );
};
