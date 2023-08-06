import React from 'react'

interface LogoIconProps {
  color?: string
}

function LogoIcon ({ color = '#fff' }: LogoIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="155"
      height="30"
      fill="none"
      viewBox="0 0 155 30"
    >
      <path
        fill={color}
        fillRule="evenodd"
        d="M13.39 9.543l.654-.57 1.107-.965V1.535C15.151.687 14.362 0 13.39 0c-.973 0-1.762.687-1.762 1.535v6.473l1.107.964.655.57zm0 7.952l-.655.57-1.107.964v6.474c0 .847.789 1.534 1.761 1.534.973 0 1.762-.687 1.762-1.534v-6.474l-1.107-.964-.655-.57zm5.584-5.832h6.453c.845 0 1.53.791 1.53 1.767 0 .976-.685 1.767-1.53 1.767h-6.453l-.962-1.11-.569-.657.569-.656.962-1.11zm-9.46 1.767l-.569-.656-.961-1.11H1.53c-.845 0-1.53.79-1.53 1.766s.685 1.768 1.53 1.768h6.454l.961-1.111.569-.657zm.993.884l2.178 2.184-.572.574-5.961 5.979a1.532 1.532 0 01-1.668.339 1.548 1.548 0 01-.51-2.523l5.961-5.98.572-.573zm3.764-3.775l2.178 2.184.572-.574 5.96-5.978a1.548 1.548 0 00-.509-2.524 1.534 1.534 0 00-1.668.34l-5.96 5.978-.573.574zm-1.144.48l2.14 2.147 1.513 1.517 5.858 5.876a1.52 1.52 0 010 2.146 1.506 1.506 0 01-2.14 0L14.64 16.83l-1.513-1.518-2.14-2.146-1.514-1.518-5.857-5.876a1.52 1.52 0 01.78-2.563 1.517 1.517 0 011.36.417L11.613 9.5l1.514 1.518zm21.531-9.022h4.195l12.89 15.599V1.997h4.195V22.93h-4.195v-.215L38.853 6.537v16.392h-4.195V1.997zm23.678 15.95c0-.759.163-1.451.49-2.076.326-.625.816-1.163 1.469-1.614.653-.45 1.466-.799 2.441-1.044.975-.246 2.111-.369 3.408-.369.962 0 1.974.072 3.037.215 1.063.143 2.16.361 3.289.656a3.191 3.191 0 00-.45-1.386 3.534 3.534 0 00-1.065-1.098c-.455-.308-1.002-.547-1.641-.717-.64-.17-1.366-.254-2.177-.254-.442 0-.927.027-1.456.08a19.19 19.19 0 00-1.641.241 17.94 17.94 0 00-1.674.402c-.552.16-1.066.353-1.542.576l-1.191-3.255c.591-.214 1.224-.41 1.9-.589a27.474 27.474 0 014.188-.763c.705-.072 1.39-.107 2.05-.107 2.921 0 5.091.754 6.512 2.263 1.42 1.509 2.13 3.821 2.13 6.937v6.884h-3.917v-1.487c-.405.241-.849.469-1.33.683a11.76 11.76 0 01-1.568.563c-.564.16-1.171.288-1.82.381-.648.094-1.334.141-2.057.141-1.218 0-2.288-.134-3.21-.402-.922-.268-1.691-.638-2.309-1.111-.617-.473-1.083-1.03-1.396-1.668a4.663 4.663 0 01-.47-2.082zm4.128-.134c0 .259.067.507.199.743.132.237.344.447.635.63.291.183.664.33 1.118.442.455.111 1.004.167 1.648.167.688 0 1.354-.062 1.998-.187.644-.125 1.244-.29 1.8-.496a9.135 9.135 0 001.509-.71 6.3 6.3 0 001.125-.83v-.696c-.6-.17-1.194-.313-1.78-.429a24.262 24.262 0 00-1.681-.274 22.292 22.292 0 00-2.746-.181c-.732 0-1.341.049-1.826.147-.486.098-.878.23-1.178.395-.3.165-.512.36-.635.583a1.42 1.42 0 00-.186.696zm18.02 7.098c.406.268.848.504 1.324.71.476.205.973.375 1.489.509a12.952 12.952 0 003.183.402c1.8 0 3.187-.391 4.161-1.173.975-.78 1.463-1.953 1.463-3.515v-.536c-.344.241-.73.462-1.158.663-.428.201-.887.373-1.376.516-.49.143-1.006.252-1.549.328-.542.076-1.092.114-1.647.114-1.191 0-2.257-.177-3.196-.53a6.267 6.267 0 01-2.382-1.553c-.649-.683-1.145-1.524-1.49-2.524-.343-1-.516-2.143-.516-3.429V7.126h3.904v6.67c0 1.91.36 3.318 1.08 4.224.718.907 1.854 1.36 3.407 1.36 1.094 0 2.062-.194 2.905-.583.842-.388 1.515-.886 2.018-1.493V7.126h3.917v13.995c0 1.509-.212 2.819-.635 3.93-.424 1.112-1.039 2.034-1.846 2.766-.808.732-1.798 1.279-2.971 1.64-1.174.362-2.506.543-3.997.543-1.456 0-2.814-.156-4.076-.469a16.138 16.138 0 01-3.467-1.272l1.456-3.348zm18.662-14.49h8.006l-9.568 12.508h16.304v-3.295h-9.105l9.635-12.508H99.146v3.295zm17.562 5.45a4.42 4.42 0 00-.49 2.076c0 .75.157 1.444.47 2.082a4.72 4.72 0 001.396 1.668c.618.473 1.388.843 2.31 1.111.922.268 1.991.402 3.209.402.723 0 1.409-.047 2.058-.14a13.975 13.975 0 001.82-.382c.564-.161 1.087-.348 1.568-.563.481-.214.924-.442 1.33-.683v1.487h3.917v-6.884c0-3.116-.71-5.428-2.131-6.937-1.42-1.509-3.59-2.263-6.511-2.263-.661 0-1.345.035-2.051.107a27.487 27.487 0 00-4.189.763c-.674.179-1.307.375-1.899.59l1.191 3.254c.477-.223.991-.415 1.542-.576a18.03 18.03 0 011.674-.402 19.225 19.225 0 011.641-.24c.53-.054 1.015-.081 1.456-.081.812 0 1.537.085 2.177.254.64.17 1.187.409 1.641.717.454.308.809.674 1.065 1.098.256.424.406.886.45 1.386a27.577 27.577 0 00-3.288-.656 22.836 22.836 0 00-3.038-.215c-1.296 0-2.432.123-3.407.369-.975.245-1.789.593-2.442 1.044-.653.451-1.142.99-1.469 1.614zm3.837 2.685a1.504 1.504 0 01-.198-.743c0-.241.061-.473.185-.696.123-.224.335-.418.635-.583.3-.165.693-.297 1.178-.395.485-.098 1.094-.147 1.826-.147a22.197 22.197 0 012.746.18c.534.067 1.094.159 1.681.275.587.116 1.18.259 1.78.429v.696a6.3 6.3 0 01-1.125.83c-.45.268-.953.505-1.509.71-.555.205-1.155.37-1.799.496-.644.125-1.311.187-1.999.187-.644 0-1.193-.056-1.647-.167-.455-.112-.827-.26-1.119-.442-.291-.183-.502-.393-.635-.63zm20.638-16.559h-3.917V22.93h3.917v-3.763l2.131-1.929 5.81 5.692H155l-8.682-8.41 8.166-7.393h-5.995l-7.306 6.71V1.997z"
        clipRule="evenodd"
      ></path>
    </svg>
  )
}

export default LogoIcon
