import React from "react";
import theme from "../../styles/theme";

const ButtonCheck = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      fill="none"
      viewBox="0 0 22 22"
    >
      <path fill={theme.colors.others.white} d="M0 0H22V22H0z"></path>
      <path
        fill={theme.colors.others.white}
        d="M0 0H1920V1322H0z"
        transform="translate(-895 -629)"
      ></path>
      <g filter="url(#filter0_d_0_1)">
        <rect
          width="692"
          height="842"
          x="-589"
          y="-195"
          fill={theme.colors.others.white}
          rx="24"
        ></rect>
      </g>
      <path fill={theme.colors.others.white} d="M-557 -17H71V39H-557z"></path>
      <circle
        cx="11"
        cy="11"
        r="19.5"
        fill={theme.colors.others.white}
        stroke={theme.colors.others.white}
      ></circle>
      <path
        fill={theme.colors.primary.main}
        fillRule="evenodd"
        d="M3.399 3.399A10.719 10.719 0 0111 .25c2.968 0 5.657 1.204 7.601 3.149l-.53.53.53-.53A10.719 10.719 0 0121.75 11c0 2.968-1.204 5.657-3.149 7.601A10.719 10.719 0 0111 21.75a10.719 10.719 0 01-7.601-3.149l.53-.53-.53.53A10.719 10.719 0 01.25 11c0-2.968 1.204-5.657 3.149-7.601zM11 1.75a9.219 9.219 0 00-6.54 2.71A9.219 9.219 0 001.75 11a9.219 9.219 0 002.71 6.54A9.219 9.219 0 0011 20.25a9.218 9.218 0 006.54-2.71A9.218 9.218 0 0020.25 11a9.219 9.219 0 00-2.71-6.54A9.219 9.219 0 0011 1.75z"
        clipRule="evenodd"
      ></path>
      <path
        fill={theme.colors.primary.main}
        fillRule="evenodd"
        d="M16.53 7.47a.75.75 0 010 1.06l-6 6a.75.75 0 01-1.06 0l-3-3a.75.75 0 111.06-1.06L10 12.94l5.47-5.47a.75.75 0 011.06 0z"
        clipRule="evenodd"
      ></path>
      <defs>
        <filter
          id="filter0_d_0_1"
          width="752"
          height="902"
          x="-619"
          y="-218"
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
      </defs>
    </svg>
  );
};

export default ButtonCheck;
