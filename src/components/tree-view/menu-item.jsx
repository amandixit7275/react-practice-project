import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import MenuList from "./menu-list";

export default function MenuItem({ item }) {
  const [displayCurrentItem, setDisplayCurrentItem] = useState({});

  function handleToggleChildren(getCurrentlabel) {
    setDisplayCurrentItem({
      ...displayCurrentItem,
      [getCurrentlabel]: !displayCurrentItem[getCurrentlabel],
    });
  }
  console.log(displayCurrentItem);
  return (
    <div>
      <p> {item.label} </p>
      {item && item.children && item.children.length ? (
        <span onClick={() => handleToggleChildren(item.label)}>
          {[displayCurrentItem] ? <FaMinus /> : <FaPlus />}
        </span>
      ) : null}

      {item && item.children && item.children.length ? (
        <MenuList list={item.children} />
      ) : null}
    </div>
  );
}
