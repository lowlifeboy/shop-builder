import React from 'react'

interface FacebookIconProps {
  color?: string
}

function FacebookIcon ({ color = '#121212' }: FacebookIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      fill="none"
      viewBox="0 0 18 18"
    >
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M4.938 7.461v3h2.25v5.25h3v-5.25h2.25l.75-3h-3v-1.5a.75.75 0 01.75-.75h2.25v-3h-2.25a3.75 3.75 0 00-3.75 3.75v1.5h-2.25z"
      ></path>
    </svg>
  )
}

export default FacebookIcon
