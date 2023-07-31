import React from "react";

function ArrowDownIcon({rotate = 0, color = "#121212"}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      fill="none"
      viewBox="0 0 18 18"
      transform={`rotate(${rotate}deg)`}
    >
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M4.704 6.75l4.5 4.5 4.5-4.5"
      ></path>
    </svg>
  );
}

export default ArrowDownIcon;
