import React from 'react'

interface BasketIconProps {
  color?: string
}

function BasketIcon ({ color = '#121212' }: BasketIconProps) {
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
        d="M11.307 7c0-.172.088-.538.442-.865.341-.317 1.003-.66 2.25-.66 1.249 0 1.91.343 2.252.66.354.327.441.693.441.865h1.616c0-.605-.263-1.406-.96-2.05-.708-.656-1.796-1.09-3.348-1.09-1.552 0-2.64.434-3.349 1.09-.696.644-.959 1.445-.959 2.05h1.615zm0 0v1.82h5.385V7h1.616v1.82h2.774c.446 0 .808.362.808.808v11.033c0 .635-.255 1.242-.705 1.688a2.404 2.404 0 01-1.692.696H8.37c-.633 0-1.242-.25-1.692-.696a2.378 2.378 0 01-.705-1.688V9.628c0-.446.362-.807.808-.807h2.911V7h1.615zm-1.615 5.834v-2.398H7.59v10.225c0 .202.08.397.226.541a.788.788 0 00.555.228h11.123c.21 0 .409-.083.555-.227a.762.762 0 00.226-.542V10.436h-1.966v2.398h-1.616v-2.398h-5.385v2.398H9.692z"
        clipRule="evenodd"
      ></path>
    </svg>
  )
}

export default BasketIcon
