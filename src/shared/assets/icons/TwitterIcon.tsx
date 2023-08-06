import React from 'react'

interface TwitterIconProps {
  color: string
}

function TwitterIcon ({ color = '#121212' }: TwitterIconProps) {
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
        d="M16.227 2.93c-.75.367-1.485.516-2.25.742-.84-.949-2.087-1.001-3.285-.553-1.198.449-1.982 1.545-1.965 2.803v.75c-2.434.062-4.601-1.046-6-3 0 0-3.136 5.575 3 8.25-1.404.935-2.804 1.566-4.5 1.5 2.481 1.352 5.185 1.817 7.526 1.138 2.685-.78 4.891-2.792 5.738-5.807.252-.916.378-1.864.373-2.814-.002-.187 1.132-2.08 1.363-3.01v0z"
      ></path>
    </svg>
  )
}

export default TwitterIcon
