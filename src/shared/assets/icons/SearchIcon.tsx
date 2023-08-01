import React from "react";

function SearchIcon({color = "#121212"}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="29"
      fill="none"
      viewBox="0 0 28 29"
    >
      <path
        fill={color}
        fillRule="evenodd"
        d="M5.726 12.413a6.067 6.067 0 1112.134 0 6.067 6.067 0 01-12.134 0zm6.067-7.683a7.683 7.683 0 104.831 13.657l5.4 5.4a.808.808 0 001.143-1.142l-5.4-5.4A7.683 7.683 0 0011.792 4.73z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default SearchIcon;
