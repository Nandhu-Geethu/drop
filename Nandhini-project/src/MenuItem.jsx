import React from "react";

const MenuItem = ({ label, hasSubmenu, onHover }) => {
  return (
    <li className="menu-item" onMouseEnter={onHover}>
      {label}
      {hasSubmenu && <span className="arrow">▶</span>}
    </li>
  );
};

export default MenuItem;