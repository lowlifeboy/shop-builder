import React from 'react'

interface InstagramIconProps {
  color?: string
}

function InstagramIcon ({ color = '#121212' }: InstagramIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      fill="none"
      viewBox="0 0 18 18"
    >
      <path
        fill={color}
        fillRule="evenodd"
        d="M6.243 3.711a2.25 2.25 0 00-2.25 2.25v6a2.25 2.25 0 002.25 2.25h6a2.25 2.25 0 002.25-2.25v-6a2.25 2.25 0 00-2.25-2.25h-6zm-3.75 2.25a3.75 3.75 0 013.75-3.75h6a3.75 3.75 0 013.75 3.75v6a3.75 3.75 0 01-3.75 3.75h-6a3.75 3.75 0 01-3.75-3.75v-6zm6.75 1.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm-3 1.5a3 3 0 116 0 3 3 0 01-6 0zm7.125-3.375a.75.75 0 00-1.5 0 .75.75 0 001.5 0z"
        clipRule="evenodd"
      ></path>
    </svg>
  )
}

export default InstagramIcon
