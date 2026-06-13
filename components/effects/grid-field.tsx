"use client";

import { useEffect, useRef } from "react";

type GridFieldProps = {
  className?: string;
};

export function GridField({ className = "" }: GridFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    let frame = 0;
    let animationId = 0;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
    };

    const draw = () => {
      frame += 1;
      const { width, height } = canvas;
      context.clearRect(0, 0, width, height);

      const spacing = 56;
      const offset = (frame * 0.15) % spacing;

      context.strokeStyle = "rgba(255,255,255,0.035)";
      context.lineWidth = 1;

      for (let x = -spacing; x < width + spacing; x += spacing) {
        context.beginPath();
        context.moveTo(x + offset, 0);
        context.lineTo(x + offset, height);
        context.stroke();
      }

      for (let y = -spacing; y < height + spacing; y += spacing) {
        context.beginPath();
        context.moveTo(0, y + offset * 0.6);
        context.lineTo(width, y + offset * 0.6);
        context.stroke();
      }

      const nodes = [
        { x: width * 0.22, y: height * 0.35 },
        { x: width * 0.48, y: height * 0.58 },
        { x: width * 0.72, y: height * 0.42 },
      ];

      context.strokeStyle = "rgba(94,234,212,0.18)";
      context.beginPath();
      context.moveTo(nodes[0].x, nodes[0].y);
      context.lineTo(nodes[1].x, nodes[1].y);
      context.lineTo(nodes[2].x, nodes[2].y);
      context.stroke();

      for (const node of nodes) {
        const pulse = Math.sin(frame * 0.04 + node.x) * 2 + 4;
        context.fillStyle = "rgba(94,234,212,0.85)";
        context.beginPath();
        context.arc(node.x, node.y, pulse, 0, Math.PI * 2);
        context.fill();
      }

      animationId = window.requestAnimationFrame(draw);
    };

    resize();
    draw();

    const observer = new ResizeObserver(resize);
    observer.observe(canvas.parentElement ?? canvas);

    return () => {
      window.cancelAnimationFrame(animationId);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={`pointer-events-none absolute inset-0 h-full w-full opacity-70 ${className}`}
    />
  );
}
