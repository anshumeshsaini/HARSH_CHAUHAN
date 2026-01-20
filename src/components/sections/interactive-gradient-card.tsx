import React, { useEffect, useRef, useState } from "react";

export interface GradientCardProps {
  color: string;
  glowColor: string;
  width?: string;
  height?: string;
  borderRadius?: string;
  className?: string;
  children?: React.ReactNode;
  followMouse?: boolean;
  hoverOnly?: boolean;
  intensity?: number;
  backgroundColor?: string;
}

export const InteractiveGradient = ({
  color,
  glowColor = "#107667ed",
  width = "",
  height = "",
  borderRadius = "1rem",
  className = "",
  children,
  followMouse = true,
  hoverOnly = false,
  intensity = 100,
  backgroundColor,
}: GradientCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [resolvedBaseColor, setResolvedBaseColor] = useState("#ffffff");

  /* Resolve fallback base color (dark / light) */
  useEffect(() => {
    if (
      backgroundColor &&
      (backgroundColor.startsWith("#") ||
        backgroundColor.startsWith("rgb"))
    ) {
      setResolvedBaseColor(backgroundColor);
      return;
    }

    const html = document.documentElement;

    const updateColor = () => {
      const isDark = html.classList.contains("dark");
      setResolvedBaseColor(isDark ? "#000000" : "#ffffff");
    };

    updateColor();

    const observer = new MutationObserver(updateColor);
    observer.observe(html, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, [backgroundColor]);

  const normalizedIntensity = Math.max(0, Math.min(100, intensity)) / 100;

  /* Mouse tracking */
  useEffect(() => {
    if (!followMouse) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!cardRef.current || (hoverOnly && !isHovering)) return;

      const rect = cardRef.current.getBoundingClientRect();
      setPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [followMouse, hoverOnly, isHovering]);

  /* Background glow */
  const backgroundStyle: React.CSSProperties =
    !followMouse || (hoverOnly && !isHovering)
      ? {
          background: `radial-gradient(
            circle at center,
            ${glowColor} 0%,
            ${resolvedBaseColor} ${45 * normalizedIntensity}%,
            ${resolvedBaseColor} 100%
          )`,
        }
      : {
          background: `radial-gradient(
            circle at ${position.x}px ${position.y}px,
            ${glowColor} 0%,
            ${resolvedBaseColor} ${45 * normalizedIntensity}%,
            ${resolvedBaseColor} 100%
          )`,
        };

  /* Gradient border */
  const borderStyle: React.CSSProperties = {
    ["--gradient-border" as any]: `linear-gradient(
      45deg,
      ${resolvedBaseColor},
      ${resolvedBaseColor},
      ${color}
    )`,
  };

  return (
    <div
      ref={cardRef}
      className={`relative grid place-items-center text-center
        border transition-all duration-300
        interactive-gradient-card text-foreground
        ${backgroundColor ? "" : "bg-white dark:bg-black"}
        ${className}`}
      style={{
        ...backgroundStyle,
        ...borderStyle,
        width,
        height,
        borderRadius,
      }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Gradient border layer */}
      <style>
        {`
          .interactive-gradient-card::before {
            position: absolute;
            content: "";
            inset: 0;
            border-radius: ${borderRadius};
            z-index: -1;
            border: 0.155rem solid transparent;
            background: var(--gradient-border) border-box;
            -webkit-mask:
              linear-gradient(#fff 0 0) padding-box,
              linear-gradient(#fff 0 0);
            -webkit-mask-composite: destination-out;
            mask-composite: exclude;
          }
        `}
      </style>

      {children}
    </div>
  );
};

export default InteractiveGradient;
