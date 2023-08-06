import React from 'react'

interface SunIconProps {
  width?: number
}

function SunIcon ({ width = 24 }: SunIconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={width} viewBox="0 0 24 24">
      <path fill="#121212" d="M5.86 2.578a.762.762 0 01-.008-.773.769.769 0 011.336.008l.988 1.703a.77.77 0 01-.274 1.054.776.776 0 01-1.058-.273zM12 5.118A6.882 6.882 0 116.273 15.82 6.886 6.886 0 0112 5.117zM11.387.78a.777.777 0 01.375-.699.762.762 0 01.793 0c.246.145.39.414.375.7v1.964a.762.762 0 01-.375.7.762.762 0 01-.793 0 .766.766 0 01-.371-.7V.781zm5.699 1.192a.767.767 0 01.672-.422.768.768 0 01.687.39.77.77 0 01-.027.793l-.988 1.711a.767.767 0 01-.668.403.771.771 0 01-.66-1.168l.984-1.711zm4.332 3.886a.77.77 0 011.05.282.76.76 0 01-.28 1.046l-1.708.993a.772.772 0 01-.78-1.332zm1.809 5.532a.772.772 0 01.703 1.168.777.777 0 01-.703.37h-1.973a.766.766 0 01-.7-.37.762.762 0 010-.793.762.762 0 01.7-.375zm-1.2 5.699c.25.129.41.387.414.668a.774.774 0 01-.39.683.782.782 0 01-.79-.02l-1.71-.991a.766.766 0 11.762-1.328l1.71.984zm-3.886 4.328c.214.371.09.84-.278 1.05a.764.764 0 01-1.05-.28l-.993-1.708a.77.77 0 011.328-.78l.993 1.71zm-5.532 1.809a.777.777 0 01-.37.703.772.772 0 01-1.168-.703v-1.973a.762.762 0 01.374-.7.762.762 0 01.793 0 .766.766 0 01.371.7zm-5.699-1.2a.76.76 0 01-1.027.254.767.767 0 01-.301-1.02l.988-1.71a.771.771 0 011.364-.035.77.77 0 01-.036.797l-.988 1.71zM2.578 18.14a.762.762 0 01-1.047-.278.764.764 0 01.282-1.05l1.703-.993a.773.773 0 11.78 1.336l-1.71.985zM.781 12.609a.766.766 0 01-.699-.37.762.762 0 010-.794.762.762 0 01.7-.375h1.964a.762.762 0 01.7.375.762.762 0 010 .793.766.766 0 01-.7.371zm1.192-5.695a.767.767 0 01-.422-.672.768.768 0 01.39-.687.77.77 0 01.793.027l1.711.988a.767.767 0 01.403.668.771.771 0 01-1.168.66zm0 0"></path>
    </svg>
  )
}

export default SunIcon
