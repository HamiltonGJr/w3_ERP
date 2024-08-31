import React from "react";

import theme from "../../styles/theme";

const GraphDown = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path fill={theme.colors.others.white} d="M0 0H24V24H0z"></path>
      <g clipPath="url(#clip0_0_1)">
        <path
          fill={theme.colors.others.white}
          d="M0 0H1920V1208H0z"
          transform="translate(-351 -531)"
        ></path>
        <g filter="url(#filter0_d_0_1)">
          <rect
            width="771"
            height="520"
            x="-45"
            y="-43"
            fill={theme.colors.others.white}
            rx="24"
          ></rect>
        </g>
        <rect
          width="50"
          height="50"
          x="-13"
          y="-13"
          fill={theme.statusAlert.error}
          rx="8"
        ></rect>
        <path
          fill={theme.colors.others.white}
          fillRule="evenodd"
          d="M20.5 10.75a.75.75 0 01.75.75v6a.75.75 0 01-.75.75h-6a.75.75 0 010-1.5h5.25V11.5a.75.75 0 01.75-.75z"
          clipRule="evenodd"
        ></path>
        <path
          fill={theme.colors.others.white}
          fillRule="evenodd"
          d="M2.522 5.922a.75.75 0 011.056.1l4.755 5.75 4.369-2.662a.75.75 0 01.932.122l7.408 7.75a.75.75 0 11-1.084 1.036l-6.99-7.313L8.56 13.39a.75.75 0 01-.969-.162l-5.169-6.25a.75.75 0 01.1-1.056z"
          clipRule="evenodd"
        ></path>
      </g>
      <defs>
        <filter
          id="filter0_d_0_1"
          width="831"
          height="580"
          x="-75"
          y="-66"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="7"></feOffset>
          <feGaussianBlur stdDeviation="15"></feGaussianBlur>
          <feComposite in2="hardAlpha" operator="out"></feComposite>
          <feColorMatrix values="0 0 0 0 0.733802 0 0 0 0 0.751002 0 0 0 0 0.804167 0 0 0 0.4 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_0_1"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_0_1"
            result="shape"
          ></feBlend>
        </filter>
        <clipPath id="clip0_0_1">
          <path
            fill={theme.colors.others.white}
            d="M0 0H1920V1208H0z"
            transform="translate(-351 -531)"
          ></path>
        </clipPath>
      </defs>
    </svg>
  );
};

export default GraphDown;
