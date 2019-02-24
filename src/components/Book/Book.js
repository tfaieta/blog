import React from 'react'
import styled from 'styled-components'

const Book = props => (
  <Wrapper>
    <svg width={75} height={161} fill="none">
      <g filter="url(#prefix__filter0_d)">
        <rect
          x={20}
          y={10}
          width={35}
          height={121}
          rx={2}
          fill="url(#prefix__paint0_linear)"
        />
        <path
          d="M31.049 103.745v-6.086c0-1.36.227-2.414.68-3.162.453-.748 1.139-1.122 2.057-1.122.85 0 1.524.317 2.023.952.499.623.793 1.479.884 2.567h.034c.023-1.167.289-2.108.799-2.822s1.218-1.071 2.125-1.071c1.054 0 1.876.391 2.465 1.173.59.782.884 1.847.884 3.196v6.375h-.034l-1.071-1.139a.551.551 0 0 0-.408-.153h-8.925a.551.551 0 0 0-.408.153l-1.071 1.139h-.034zm5.899-5.202v.833h5.372c.159 0 .255-.023.289-.068.034-.045.051-.159.051-.34v-.476c0-1.462-.969-2.193-2.907-2.193-.93 0-1.626.181-2.091.544-.476.351-.714.918-.714 1.7zm-5.219.833h4.879v-.816c0-.635-.232-1.122-.697-1.462-.476-.34-1.139-.51-1.989-.51-.77 0-1.383.164-1.836.493-.465.329-.697.799-.697 1.411v.578c0 .125.023.21.068.255.034.034.125.051.272.051zm1.921-9.45c0 .374-.113.697-.34.969-.238.26-.544.39-.918.39-.397 0-.714-.13-.952-.39a1.386 1.386 0 0 1-.374-.97c0-.396.125-.725.374-.985.238-.26.555-.391.952-.391.374 0 .68.13.918.39.227.261.34.59.34.987zm.935 2.329V88.48h7.191c.181 0 .317-.051.408-.153l.782-.833H43v4.76h-.034l-.782-.833c-.09-.102-.227-.153-.408-.153h-5.882a.612.612 0 0 0-.425.153l-.85.833h-.034zm1.054-10.705c-.578.226-.867.572-.867 1.037 0 .464.283.81.85 1.037.555.226 1.61.34 3.162.34 1.541 0 2.601-.114 3.179-.34.578-.227.867-.573.867-1.037 0-.465-.283-.81-.85-1.037-.567-.227-1.626-.34-3.179-.34-1.541 0-2.595.113-3.162.34zm7.497 1.037c0 1.382-.368 2.476-1.105 3.28-.748.794-1.83 1.19-3.247 1.19-1.394 0-2.465-.402-3.213-1.206-.748-.805-1.122-1.893-1.122-3.264 0-1.383.374-2.477 1.122-3.281.737-.805 1.813-1.207 3.23-1.207 1.394 0 2.465.408 3.213 1.224.748.804 1.122 1.892 1.122 3.264zM20 117.444h35v2.008H20zM20 120.958h35v2.008H20zM20 124.473h35v2.008H20z"
          fill="#FAF8EA"
        />
      </g>
      <defs>
        <filter
          id="prefix__filter0_d"
          x={0}
          y={0}
          width={75}
          height={161}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={10} />
          <feGaussianBlur stdDeviation={10} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
        <linearGradient
          id="prefix__paint0_linear"
          x1={34}
          y1={10}
          x2={83.94}
          y2={23.437}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={props.gradientOne} />
          <stop offset={0.973} stopColor={props.gradientTwo} />
        </linearGradient>
      </defs>
    </svg>
  </Wrapper>
)

export default Book

const Wrapper = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  transition: all 150ms linear;

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  &:hover {
    transition: all 150ms linear;
    opacity: 0.85;
  }
  &:active {
    transition: all 150ms linear;
    opacity: 0.55;
  }

  &:focus {
    outline: none;
  }
`
