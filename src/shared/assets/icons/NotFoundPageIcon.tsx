import React from 'react'

interface NotFoundPageIconProps {
  color?: string
  width?: number
  height?: number
}

function NotFoundPageIcon ({ color = '#121212', width = 94, height = 80 }: NotFoundPageIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 94 80"
    >
      <path
        fill={color}
        fillRule="evenodd"
        d="M17.948 68.088a5.51 5.51 0 002.256 10.787L77.39 66.912a5.51 5.51 0 10-2.257-10.786L17.948 68.088zM20.961 28.194c4.331 4.316 11.337 4.316 15.668 0L26.4 18l10.23-10.194L28.795 0l-10.23 10.194L8.332 0c-4.321 4.306-4.322 11.305 0 15.611l2.398 2.39-6.3 6.277a5.53 5.53 0 107.805 7.833l6.328-6.305 2.397 2.388zM85.667 0L75.436 10.194 65.205 0l-7.834 7.806L67.601 18l-6.299 6.278a5.53 5.53 0 107.806 7.833l6.328-6.305 6.328 6.305a5.53 5.53 0 107.805-7.833L83.27 18 93.5 7.806 85.667 0z"
        clipRule="evenodd"
      ></path>
    </svg>
  )
}

export default NotFoundPageIcon
