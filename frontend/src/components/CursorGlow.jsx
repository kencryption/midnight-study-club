import { useEffect, useRef, useState } from "react";

const CursorGlow = () => {
  const [renderPos, setRenderPos] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  const mouse = useRef({ x: 0, y: 0 });
  const glow = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Detect mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    const move = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener("mousemove", move);

    const animate = () => {
      glow.current.x += (mouse.current.x - glow.current.x) * 0.08;
      glow.current.y += (mouse.current.y - glow.current.y) * 0.08;

      setRenderPos({
        x: glow.current.x,
        y: glow.current.y,
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // MOBILE VERSION (static ambient glow)
  if (isMobile) {
    return (
      <>
        <div
          className="pointer-events-none fixed inset-0 z-10 blur-[120px]"
          style={{
            background:
              "radial-gradient(circle at 30% 20%, rgba(255,46,136,0.18), transparent 60%), radial-gradient(circle at 70% 80%, rgba(255,46,136,0.15), transparent 60%)",
          }}
        />
      </>
    );
  }

  // DESKTOP VERSION (cursor glow)
  return (
    <>
      {/* Large ambient glow */}
      <div
        className="pointer-events-none fixed z-10 w-[700px] h-[700px] rounded-full blur-[160px]"
        style={{
          transform: `translate(${renderPos.x - 350}px, ${renderPos.y - 350}px)`,
          background:
            "radial-gradient(circle, rgba(255,46,136,0.25) 0%, rgba(255,46,136,0.12) 35%, transparent 70%)",
        }}
      />

      {/* Inner glow */}
      <div
        className="pointer-events-none fixed z-10 w-[300px] h-[300px] rounded-full blur-[90px]"
        style={{
          transform: `translate(${renderPos.x - 150}px, ${renderPos.y - 150}px)`,
          background:
            "radial-gradient(circle, rgba(255,46,136,0.65) 0%, rgba(255,46,136,0.35) 45%, transparent 75%)",
        }}
      />
    </>
  );
};

export default CursorGlow;