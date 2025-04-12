import React, { useState } from "react";
import MenuItem from "./Menuitem";

const menuData = {
  Interested: {
    Project1: {
        Executive: ["Executive 1", "Executive 2", "Executive 3"]
      },
    Project2: {
        Executive: ["Executive 1", "Executive 2", "Executive 3"] 
    },
    Project3: {
      Executive: ["Executive 1", "Executive 2", "Executive 3"]
    }
    
  },
   NotInterested:{ 
    Project1:{
        Executive: ["Executive 1", "Executive 2", "Executive 3"]
      },
      Project2:{
        Executive: ["Executive 1", "Executive 2", "Executive 3"]
      },
      Project3:{
        Executive: ["Executive 1", "Executive 2", "Executive 3"]
      },

    },

  
  Callback: {
    Project1:{
        Executive: ["Executive 1", "Executive 2", "Executive 3"]
      },
      Project2:{
        Executive: ["Executive 1", "Executive 2", "Executive 3"]
      },
      Project3:{
        Executive: ["Executive 1", "Executive 2", "Executive 3"]
      },

  },
  Followup: {
    Project1:{
        Executive: ["Executive 1", "Executive 2", "Executive 3"]
      },
      Project2:{
        Executive: ["Executive 1", "Executive 2", "Executive 3"]
      },
      Project3:{
        Executive: ["Executive 1", "Executive 2", "Executive 3"]
      },


  },
  Callnotresponse: {
    Project1:{
        Executive: ["Executive 1", "Executive 2", "Executive 3"]
      },
      Project2:{
        Executive: ["Executive 1", "Executive 2", "Executive 3"]
      },
      Project3:{
        Executive: ["Executive 1", "Executive 2", "Executive 3"]
      },

  },
};

const Dropdown = () => {
  const [activePath, setActivePath] = useState([]);

  const handleHover = (level, key) => {
    const newPath = activePath.slice(0, level);
    newPath[level] = key;
    setActivePath(newPath);
  };

  const renderMenu = (data, level = 0) => {
    if (!data) return null;

    return (
      <ul className="menu level" style={{ left: `${level * 200}px` }}>
        {Object.entries(data).map(([key, value]) => (
          <MenuItem
            key={key}
            label={key}
            hasSubmenu={typeof value === "object"}
            onHover={() => handleHover(level, key)}
          />
        ))}
      </ul>
    );
  };

  let current = menuData;
  const menus = [];
  for (let i = 0; i <= activePath.length; i++) {
    if (!current) break;
    menus.push(renderMenu(current, i));
    current = current?.[activePath[i]];
  }

  return <div className="dropdown-container">{menus}</div>;
};

export default Dropdown;