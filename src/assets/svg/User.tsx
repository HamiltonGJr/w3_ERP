import React from "react";

import theme from "../../styles/theme";

const User = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      fill="none"
      viewBox="0 0 32 32"
    >
      <path
        stroke={theme.colors.others.white}
        strokeLinecap="round"
        strokeWidth="2"
        d="M26.303 27.263c-.608-1.701-1.947-3.204-3.81-4.277-1.862-1.072-4.145-1.653-6.493-1.653-2.348 0-4.63.581-6.493 1.654-1.863 1.072-3.202 2.575-3.81 4.276"
      ></path>
      <ellipse
        cx="16"
        cy="10.667"
        stroke={theme.colors.others.white}
        strokeLinecap="round"
        strokeWidth="2"
        rx="5.333"
        ry="5.333"
      ></ellipse>
    </svg>
  );
};

export default User;
