import React from 'react'
import "./tabs.css";
import Tabs from './Tabs';

const ParentTab = () => {
    const tabs = [
        {
          id: 1,
          tabTitle: "Tab 1",
          content: "This is content for Tab 1",
        },
        {
          id: 2,
          tabTitle: "Tab 2",
           content:  "This is content for Tab 2",
            
        },
        {
          id: 3,
          tabTitle: "Tab 3",
          content:  "This is content for Tab 3",
        },
      ];
      const handleTabClick = (activeTabIndex) => {
       console.log(activeTabIndex);
      };
  return (
    <div>
        <h2  style ={{ textAlign:"center", marginTop:"40px"}}>Custom Tabs</h2>
        <Tabs tabsList={tabs} onChange={handleTabClick}/>
    </div>
  )
}

export default ParentTab;