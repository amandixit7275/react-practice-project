import { useState } from "react";
import "./tabs.css";
export default function Tabs({ tabsContent }) {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  function handleClick(getCurrentIndex) {
    setCurrentTabIndex(getCurrentIndex);
  }
  return (
    <div className="wrapper">
      <div className="heading">
        {tabsContent.map((tabItem, index) => {
          return (
            <div
              className={`tab-item ${currentTabIndex === index && "active"}`}
              key={tabItem.label}
              onClick={() => handleClick(index)}
            >
              <span className="label"> {tabItem.label} </span>
            </div>
          );
        })}
      </div>
      <div className="content">
        {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
      </div>
    </div>
  );
}
