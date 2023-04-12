import React from "react";
import "./style.scss";
import { useState } from "react";
const SwtichTabs = ({ data, onTabChange }) => {
  const [seletedTab, setSelectedTab] = useState(0);
  const [left, setLeft] = useState(0);

  const activeTab = (tab, index) => {
    setLeft(index * 100);
    console.log(left)
    setTimeout(() => {
      setSelectedTab(index);
    }, 300);
    onTabChange(tab, index);
  };
  return (
    <div className="switchingTabs">
      <div className="tabItems">
        {data.map((tab, index) => {
          return (
            <span
              onClick={() => activeTab(tab, index)}
              key={index}
              className={`tabItem ${seletedTab === index ? "active" : ""}`}
            >
              {tab}
            </span>
          );
        })}
        <span className="movingBg" style={{ left }} />
      </div>
    </div>
  );
};

export default SwtichTabs;
