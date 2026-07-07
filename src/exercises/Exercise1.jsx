import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// 🟢 Level 1 – Core GSAP
// Exercise 1

// Move a box:

// Right 300px
// Left 300px

function Exercise1() {
  useGSAP(() => {
    gsap.to(".box", {
      x: 300,
      yoyo: true,
    //   repeat:-1
    });
  });

  return (
    <>
      <div className="w-20 h-20 bg-pink-500 box"></div>
    </>
  );
}

export default Exercise1;
