"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "default" | "outline";
  size?: "default" | "sm" | "lg";
  glow?: boolean;
  textEffect?: "normal" | "shimmer";
  uppercase?: boolean;
  rounded?: "full" | "custom";
  hideAnimations?: boolean;
  shimmerColor?: string;
  shimmerSize?: string;
  shimmerDuration?: string;
  borderRadius?: string;
  background?: string;
  asChild?: boolean;
}

export const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children,
  className,
  variant = "default",
  size = "default",
  glow = false,
  textEffect = "normal",
  uppercase = false,
  rounded = "full",
  hideAnimations = false,
  shimmerColor = "#39FF14",
  shimmerSize = "0.2em",
  shimmerDuration = "2.5s",
  borderRadius,
  background,
  ...props
}) => {
  return (
    <button
      {...props}
      style={{
        borderRadius: borderRadius || (rounded === "full" ? "9999px" : "8px"),
        background: background || "linear-gradient(90deg, #2563eb, #9333ea)",
      }}
      className={cn(
        "relative inline-flex items-center justify-center px-6 py-3 font-semibold text-white transition-all duration-300 ease-in-out shadow-lg hover:shadow-2xl",
        uppercase && "uppercase",
        variant === "outline" && "bg-transparent border border-white text-white",
        size === "sm" && "px-4 py-2 text-sm",
        size === "lg" && "px-10 py-4 text-lg",
        glow && "animate-pulse",
        className
      )}
    >
      <span className="relative z-10">{children}</span>
      {!hideAnimations && textEffect === "shimmer" && (
        <span
          className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `linear-gradient(90deg, ${shimmerColor}, transparent)`,
          }}
        />
      )}
    </button>
  );
};
