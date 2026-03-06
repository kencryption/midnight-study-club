const GradientBlobs = () => {
  return (
    <>
      {/* Top Left Blob */}
      <div
        className="pointer-events-none fixed -top-20 -left-20 md:-top-40 md:-left-40 
        w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full blur-[100px] md:blur-[140px]"
        style={{
          background:
            "radial-gradient(circle, rgba(255,46,136,0.18) 0%, rgba(255,46,136,0.08) 40%, transparent 70%)",
        }}
      />

      {/* Bottom Right Blob */}
      <div
        className="pointer-events-none fixed -bottom-20 -right-20 md:-bottom-40 md:-right-40 
        w-[350px] h-[350px] md:w-[700px] md:h-[700px] rounded-full blur-[110px] md:blur-[160px]"
        style={{
          background:
            "radial-gradient(circle, rgba(255,46,136,0.15) 0%, rgba(255,46,136,0.07) 45%, transparent 70%)",
        }}
      />

      {/* Center Blob */}
      <div
        className="pointer-events-none fixed top-1/3 left-1/2 
        w-[250px] h-[250px] md:w-[500px] md:h-[500px] -translate-x-1/2 
        rounded-full blur-[100px] md:blur-[140px]"
        style={{
          background:
            "radial-gradient(circle, rgba(255,46,136,0.12) 0%, rgba(255,46,136,0.05) 50%, transparent 70%)",
        }}
      />
    </>
  );
};

export default GradientBlobs;