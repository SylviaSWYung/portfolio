import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";

interface ParallaxProps {
  children: string;
  baseVelocity: number;
}

function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((_, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="overflow-hidden whitespace-nowrap flex flex-nowrap leading-[0.8]">
      <motion.div
        className="flex flex-nowrap whitespace-nowrap font-semibold text-2xl md:text-6xl italic text-rose md:h-18"
        style={{ x }}
      >
        <span className="block mr-7">{children} </span>
        <span className="block mr-7">{children} </span>
        <span className="block mr-7">{children} </span>
        <span className="block mr-7">{children} </span>
        <span className="block mr-7">{children} </span>
        <span className="block mr-7">{children} </span>
        <span className="block mr-7">{children} </span>
        <span className="block mr-7">{children} </span>
        <span className="block mr-7">{children} </span>
      </motion.div>
    </div>
  );
}

export const FlowyText = () => {
  return (
    <section className="space-y-5 my-10 md:my-20 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
      <ParallaxText baseVelocity={-1}>Full-Stack Developer</ParallaxText>
      <ParallaxText baseVelocity={1}>Cell & Molecular Biologist</ParallaxText>
    </section>
  );
};
