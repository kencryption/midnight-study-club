const GradientBlobs = () => {
  return (
    <>
      {/* Top left blob */}
      <div
        className="pointer-events-none absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full blur-[140px]"
        style={{
          background:
            "radial-gradient(circle, rgba(255,46,136,0.18) 0%, rgba(255,46,136,0.08) 40%, transparent 70%)",
        }}
      />

      {/* Bottom right blob */}
      <div
        className="pointer-events-none absolute -bottom-40 -right-40 w-[700px] h-[700px] rounded-full blur-[160px]"
        style={{
          background:
            "radial-gradient(circle, rgba(255,46,136,0.15) 0%, rgba(255,46,136,0.07) 45%, transparent 70%)",
        }}
      />

      {/* Center faint blob */}
      <div
        className="pointer-events-none absolute top-1/3 left-1/2 w-[500px] h-[500px] -translate-x-1/2 rounded-full blur-[140px]"
        style={{
          background:
            "radial-gradient(circle, rgba(255,46,136,0.12) 0%, rgba(255,46,136,0.05) 50%, transparent 70%)",
        }}
      />
    </>
  );
};

export default GradientBlobs;