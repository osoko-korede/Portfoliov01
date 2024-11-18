import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const AnimatedLink = ({ to, children, className }) => {
  const [linkHovered, setLinkHovered] = useState(false);

  return (
    <NavLink
      to={to}
      className={`text-3xl font-light flex items-center gap-2 transition-all duration-300 ease-in-out ${className}`}
      onMouseEnter={() => setLinkHovered(true)}
      onMouseLeave={() => setLinkHovered(false)}
    >
      <span
        className={`transform transition-all duration-300 ease-in-out ${
          linkHovered
            ? "opacity-100 translate-x-0"
            : "hidden opacity-0 -translate-x-2"
        }`}
      >
        &#8226; {/* Bullet point */}
      </span>
      <span
        className={`transition-all duration-300 ease-in-out ${
          linkHovered ? "translate-x-1" : "translate-x-0"
        }`}
      >
        {children}
      </span>
    </NavLink>
  );
};

export default AnimatedLink;
