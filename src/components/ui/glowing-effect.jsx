import { useEffect, useRef } from "react";

export const GlowingEffect = ({
  blur = 0,
  borderWidth = 3,
  spread = 80,
  glow = true,
  disabled = false,
  proximity = 64,
  inactiveZone = 0.01,
}) => {
  const containerRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    if (disabled || !containerRef.current || !glowRef.current) return;

    const container = containerRef.current;
    const glowElement = glowRef.current;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Calculate distance from edges
      const distanceFromLeft = x;
      const distanceFromRight = rect.width - x;
      const distanceFromTop = y;
      const distanceFromBottom = rect.height - y;

      // Find the minimum distance to any edge
      const minDistance = Math.min(
        distanceFromLeft,
        distanceFromRight,
        distanceFromTop,
        distanceFromBottom
      );

      // Only show glow when near edges
      if (minDistance < proximity) {
        const opacity = Math.max(0, 1 - minDistance / proximity);
        
        // Determine which edge is closest
        const isLeft = distanceFromLeft === minDistance;
        const isRight = distanceFromRight === minDistance;
        const isTop = distanceFromTop === minDistance;
        const isBottom = distanceFromBottom === minDistance;

        // Apply different styles based on which edge is closest
        if (isLeft || isRight) {
          glowElement.style.boxShadow = `0 0 ${spread}px ${blur}px rgba(147, 51, 234, 0.7)`;
          glowElement.style.borderLeft = isLeft ? `${borderWidth}px solid rgba(147, 51, 234, 0.7)` : 'none';
          glowElement.style.borderRight = isRight ? `${borderWidth}px solid rgba(147, 51, 234, 0.7)` : 'none';
          glowElement.style.borderTop = 'none';
          glowElement.style.borderBottom = 'none';
        } else if (isTop || isBottom) {
          glowElement.style.boxShadow = `0 0 ${spread}px ${blur}px rgba(59, 130, 246, 0.7)`;
          glowElement.style.borderTop = isTop ? `${borderWidth}px solid rgba(59, 130, 246, 0.7)` : 'none';
          glowElement.style.borderBottom = isBottom ? `${borderWidth}px solid rgba(59, 130, 246, 0.7)` : 'none';
          glowElement.style.borderLeft = 'none';
          glowElement.style.borderRight = 'none';
        }

        glowElement.style.opacity = opacity.toString();
      } else {
        glowElement.style.opacity = "0";
      }
    };

    const handleMouseLeave = () => {
      glowElement.style.opacity = "0";
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [disabled, proximity, spread, blur, borderWidth]);

  return (
    <div ref={containerRef} className="absolute inset-0 z-10">
      <div
        ref={glowRef}
        className="pointer-events-none absolute inset-0 rounded-lg opacity-0 transition-all duration-200"
      />
    </div>
  );
}; 