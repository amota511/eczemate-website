interface PhoneMockupProps {
  screenTexturePath: string;
  className?: string;
  size?: "sm" | "md";
}

const sizes = {
  sm: "w-[240px] sm:w-[260px]",
  md: "w-[280px] sm:w-[300px]",
};

export default function PhoneMockup({
  screenTexturePath,
  className = "",
  size = "md",
}: PhoneMockupProps) {
  return (
    <div
      className={`relative mx-auto ${sizes[size]} ${className}`}
      style={{ perspective: "1000px" }}
    >
      <div
        className="relative bg-[#1a1a1a] rounded-[3rem] p-[10px] shadow-2xl shadow-sage-950/30"
        style={{
          transform: "rotateY(-6deg) rotateX(2deg)",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Dynamic Island */}
        <div className="absolute top-[18px] left-1/2 -translate-x-1/2 w-[90px] h-[28px] bg-black rounded-full z-10" />

        {/* Screen */}
        <div className="rounded-[2.4rem] overflow-hidden bg-black">
          <img
            src={screenTexturePath}
            alt="App screenshot"
            className="w-full h-auto block"
            loading="lazy"
          />
        </div>

        {/* Side button (power) */}
        <div className="absolute -right-[3px] top-[120px] w-[3px] h-[60px] bg-[#2a2a2a] rounded-r-sm" />

        {/* Side buttons (volume) */}
        <div className="absolute -left-[3px] top-[100px] w-[3px] h-[35px] bg-[#2a2a2a] rounded-l-sm" />
        <div className="absolute -left-[3px] top-[145px] w-[3px] h-[35px] bg-[#2a2a2a] rounded-l-sm" />
      </div>
    </div>
  );
}
