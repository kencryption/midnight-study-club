import { useEffect, useRef, useState } from "react";

const CursorGlow = () => {
  const [renderPos, setRenderPos] = useState({ x: 0, y: 0 });

  const mouse = useRef({ x: 0, y: 0 });
  const glow = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener("mousemove", move);

    const animate = () => {
      // smooth trailing motion
      glow.current.x += (mouse.current.x - glow.current.x) * 0.08;
      glow.current.y += (mouse.current.y - glow.current.y) * 0.08;

      setRenderPos({
        x: glow.current.x,
        y: glow.current.y,
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      {/* Large ambient glow */}
      <div
        className="pointer-events-none fixed z-0 w-[700px] h-[700px] rounded-full blur-[160px]"
        style={{
          left: renderPos.x - 350,
          top: renderPos.y - 350,
          background:
            "radial-gradient(circle, rgba(255,46,136,0.25) 0%, rgba(255,46,136,0.12) 35%, transparent 70%)",
        }}
      />

      {/* Inner brighter glow */}
      <div
        className="pointer-events-none fixed z-0 rounded-full blur-[90px]"
        style={{
          left: renderPos.x - 150,
          top: renderPos.y - 150,
          background:
            "radial-gradient(circle, rgba(255,46,136,0.65) 0%, rgba(255,46,136,0.35) 45%, transparent 75%)",
        }}
      />
    </>
  );
};

export default CursorGlow;