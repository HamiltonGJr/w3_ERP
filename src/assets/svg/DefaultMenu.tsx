import React from "react";

import theme from "../../styles/theme";

const DefaultMenu = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      fill="none"
      viewBox="0 0 32 32"
    >
      <path
        fill={theme.colors.grays.gray600}
        fillRule="evenodd"
        d="M4.333 9.333a1 1 0 011-1h21.334a1 1 0 110 2H5.333a1 1 0 01-1-1zm0 6.667a1 1 0 011-1h21.334a1 1 0 110 2H5.333a1 1 0 01-1-1zm0 6.667a1 1 0 011-1h21.334a1 1 0 110 2H5.333a1 1 0 01-1-1z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export default DefaultMenu;
