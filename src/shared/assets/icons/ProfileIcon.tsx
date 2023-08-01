import React from "react";

function ProfileIcon({color = "#121212"}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      fill="none"
      viewBox="0 0 28 28"
    >
      <path
        fill={color}
        fillRule="evenodd"
        d="M9.657 9.334a3.859 3.859 0 117.718 0 3.859 3.859 0 01-7.718 0zm3.86-5.475a5.474 5.474 0 100 10.949 5.474 5.474 0 000-10.949zM8.452 19.317a3.859 3.859 0 012.729-1.13h4.666a3.86 3.86 0 013.86 3.858v2.334a.808.808 0 001.615 0v-2.334a5.474 5.474 0 00-5.475-5.474h-4.667a5.474 5.474 0 00-5.474 5.474v2.334a.808.808 0 001.616 0v-2.334a3.86 3.86 0 011.13-2.728z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default ProfileIcon;
