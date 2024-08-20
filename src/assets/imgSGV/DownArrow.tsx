import React from "react";

import theme from "../../styles/theme";

const DownArrow = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      fill="none"
      viewBox="0 0 16 16"
    >
      <path
        fill={theme.colors.grays.gray600}
        stroke={theme.colors.grays.gray600}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="0.5"
        d="M13.864 4.803l-.177.177.177-.177a.75.75 0 00-1.061 0L8 9.606 3.197 4.803a.75.75 0 00-1.06 1.06l5.333 5.334a.75.75 0 001.06 0l5.334-5.333a.75.75 0 000-1.061z"
      ></path>
    </svg>
  );
};

export default DownArrow;
