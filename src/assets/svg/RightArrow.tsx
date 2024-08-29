import React from "react";

import theme from "../../styles/theme";

const RightArrow = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill={theme.colors.grays.gray600}
        fillRule="evenodd"
        d="M8.97 5.47a.75.75 0 011.06 0l6 6a.75.75 0 010 1.06l-6 6a.75.75 0 11-1.06-1.06L14.44 12 8.97 6.53a.75.75 0 010-1.06z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export default RightArrow;
