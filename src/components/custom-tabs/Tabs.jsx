import React, { useState } from "react";

const Tabs = ({ tabsList }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleOnClick = (getIndex) => {
    setActiveTabIndex(getIndex);
    onChange(getIndex);
  };
  return (
    <div className="tab-container">
      {/* Tab Heading Section */}
      <div className="tab-header">
        {tabsList.map((tabItem, index) => (
          <div
            key={tabItem.id}
            onClick={() => handleOnClick(index)}
            className={`tab_item ${index === activeTabIndex ? "active" : ""}`}
          >
            <span>{tabItem.tabTitle}</span>
          </div>
        ))}
      </div>

      {/* Tab Content Section */}
      <div className="tab-content">
        {tabsList[activeTabIndex] && tabsList[activeTabIndex].content}
      </div>
    </div>
  );
};

export default Tabs;
