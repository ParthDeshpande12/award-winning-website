"use client";

import React, { createContext, useContext, useRef } from "react";
import { motion, useSpring, useTransform } from "framer-motion";

const CardContext = createContext();

export function CardContainer({ children, className }) {
  const ref = useRef(null);
  const [mouseX, setMouseX] = React.useState(0);
  const [mouseY, setMouseY] = React.useState(0);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMouseX(x);
    setMouseY(y);
  };

  return (
    <CardContext.Provider value={{ mouseX, mouseY }}>
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        className={`relative ${className}`}
      >
        {children}
      </div>
    </CardContext.Provider>
  );
}

export function CardBody({ children, className }) {
  const { mouseX, mouseY } = useContext(CardContext);
  const ref = useRef(null);

  const rotateX = useSpring(0, { stiffness: 300, damping: 30 });
  const rotateY = useSpring(0, { stiffness: 300, damping: 30 });

  React.useEffect(() => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateXValue = ((mouseY - centerY) / centerY) * 10;
    const rotateYValue = ((mouseX - centerX) / centerX) * 10;

    rotateX.set(rotateXValue);
    rotateY.set(rotateYValue);
  }, [mouseX, mouseY, rotateX, rotateY]);

  return (
    <motion.div
      ref={ref}
      style={{
        transformStyle: "preserve-3d",
        rotateX,
        rotateY,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function CardItem({ children, className, translateZ = 0, translateX = 0, translateY = 0, rotateX = 0, rotateY = 0, rotateZ = 0, as: Component = "div" }) {
  const ref = useRef(null);

  return (
    <Component
      ref={ref}
      className={className}
      style={{
        transform: `translateZ(${translateZ}px) translateX(${translateX}px) translateY(${translateY}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`,
      }}
    >
      {children}
    </Component>
  );
} 