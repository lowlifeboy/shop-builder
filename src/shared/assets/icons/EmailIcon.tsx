import React from 'react'

interface EmailIconProps {
  color?: string
}

function EmailIcon ({ color = '#121212' }: EmailIconProps) {
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
        d="M3.288 4.827a.75.75 0 01.666-.405h10.5a.75.75 0 01.666.405L9.204 8.77 3.288 4.827zm-1.584.33a.75.75 0 000 .025v7.49a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25v-7.49m-1.5 1.391v6.1a.75.75 0 01-.75.75h-10.5a.75.75 0 01-.75-.75v-6.1l5.584 3.723a.75.75 0 00.832 0l5.584-3.723zm1.5-1.415a2.25 2.25 0 00-2.25-2.236h-10.5a2.25 2.25 0 00-2.25 2.236"
        clipRule="evenodd"
      ></path>
    </svg>
  )
}

export default EmailIcon
