import React from "react";
import { ScrollMenu } from "react-horizontal-scrolling-menu";

import logo from "../../images/1.png";

// https://stackoverflow.com/questions/75635346/how-to-do-a-reactjs-horizontal-scroll-webpage

const RecentActivities = ({ items, username }) => {
  const handleScroll = (event) => {
    const container = event.target;
    const scrollAmount = event.deltaY;
    container.scrollTo({
      top: 0,
      left: container.scrollLeft + scrollAmount,
      behavior: "smooth",
    });
  };

  const SmallModuleActivities = ({id, description}) => {
    // https://dev.to/dawnind/3-ways-to-display-two-divs-side-by-side-3d8b
    const picStyle = {
      width: "150px", // Adjust the size as needed
      height: "auto",
      padding: "10px",
      backgroundColor: "rgb(90, 110, 114)",
    };

    return (
      <div className="smallmoduleactivities">
        <div className="parent">
          <div className="child">
            <img src={logo} alt="drag & drop" style={picStyle}></img>
          </div>
          <div className="child">{id}</div>
        </div>
        <div className="activitydesc">{description}</div>
      </div>
    );
  };

  return (
    <ScrollMenu style={{ display: "flex" }}>
      <div className="recentactivities">
        <h1 className="recentactivitiesheading">{username} Activities completed</h1>
        <body className="activitycontainer" onWheel={handleScroll}>
          {items.length > 0 ? (
            items.map((item, index) => {
              return(
                <SmallModuleActivities
                key={index}
                id={item.id}
                description={item.description}
              />
              );
            })
          ) : (
            <p className="emptyactivities"><b>Seems like there aren't any activities here yet.</b> Try some in the Simulations or Activities tabs!</p>
          )}
        </body>
      </div>
    </ScrollMenu>
  );
};

export default RecentActivities;
