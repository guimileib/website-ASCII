import React from "react";

const CustomShapeDivider = () => {
  return (
    <div
      className="custom-shape-divider-bottom-1738089707"
      style={{
        position: "absolute",
        width: "100%",
        overflow: "hidden",
        lineHeight: 0,
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        style={{
          position: "relative",
          display: "block",
          width: "100%",
          height: "57px",
        }}
      >
        <defs>
          <linearGradient id="gradient" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="rgba(4, 10, 61, 1)" />  {/* Cor mais suave */}
            <stop offset="100%" stopColor="rgba(6, 19, 128, 1)" />  {/* Cor mais escura */}
          </linearGradient>
        </defs>
        <path
          d="M0,40 C300,90 900,-40 1200,40 V120 H0 Z"
          fill="url(#gradient)"
        />
      </svg>
    </div>
  );
};

export default CustomShapeDivider;
