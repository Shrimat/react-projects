import React, { useState } from "react";
import MenuList from "./menu-list";

function MenuItem({ item }) {
  const [displayChildren, setDisplayChildren] = useState({});

  const handleChildren = (itemLabel) => {
    setDisplayChildren((prev) => ({ ...prev, [itemLabel]: !prev[itemLabel] }));
  };

  console.log(displayChildren);

  return (
    <li>
      <div stlye={{ display: "flex", gap: 20 }}>
        <p>{item.label}</p>
        {item && item.children && item.children.length > 0 ? (
          <span onClick={() => handleChildren(item.label)}>
            {displayChildren[item.label] ? "-" : "+"}
          </span>
        ) : null}
      </div>
      {item &&
      item.children &&
      item.children.length > 0 &&
      displayChildren[item.label] ? (
        <MenuList data={item.children} />
      ) : null}
    </li>
  );
}

export default MenuItem;
