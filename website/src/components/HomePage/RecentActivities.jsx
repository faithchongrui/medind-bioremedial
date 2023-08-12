import React from 'react'
import { ScrollMenu } from "react-horizontal-scrolling-menu";

import logo from "../../images/1.png";

// https://stackoverflow.com/questions/75635346/how-to-do-a-reactjs-horizontal-scroll-webpage

const RecentActivities = () => {
    
    const handleScroll = (event) => {
        const container = event.target;
        const scrollAmount = event.deltaY;
        container.scrollTo({
            top: 0,
            left: container.scrollLeft + scrollAmount,
            behavior: 'smooth'
        });
    };
    
    const SmallModuleActivities = props => {
        // https://dev.to/dawnind/3-ways-to-display-two-divs-side-by-side-3d8b
        const picStyle = {
            width: "150px", // Adjust the size as needed
            height: "auto",
            padding: "10px",
            backgroundColor: "rgb(90, 110, 114)"
          };
        
        return (
            <div className="smallmoduleactivities">
                <div className="parent">
                    <div className="child">
                        <img src={logo} alt="drag & drop" style={picStyle}></img>
                    </div>
                    <div className="child">
                        U1.2 Drag & Drop
                        {/*pull from backend*/}
                    </div>
                </div>
                <div className='activitydesc'>
                    Description is {props.description}
                </div>
            </div>
            )
        }
        
        // change later
        // for (let index = 0; index < array.length; index++) {
        //     const smallModActNumber = array[index];

        // }
        // const getItems = () =>
        //     Array(20)
        //     .fill(0)
        //     .map((_, ind) => ({ id: getId(ind) }));

        // const [items] = React.useState(getItems);
        return (
          <ScrollMenu style={{ display: "flex" }}>
            <div className="recentactivities">
              <h1 className="recentactivities">(name) Activities completed</h1>
              <body className="activitycontainer" onWheel={handleScroll}>
                {/* change this into an array with backend */}
                {/* {items.map(({ id }) => (
                    <smallModuleActivities>
                        
                    </smallModuleActivities>
                ))} */}
                <SmallModuleActivities description="lorem" />
                <SmallModuleActivities description="hi" />
                <SmallModuleActivities description="test" />
                <SmallModuleActivities description="test" />
                <SmallModuleActivities description="test" />
                <SmallModuleActivities description="test" />
                <SmallModuleActivities description="test" />
                <SmallModuleActivities description="test" />
                <SmallModuleActivities description="test" />
                <SmallModuleActivities description="test" />
              </body>
            </div>
          </ScrollMenu>
        );
        }
        
export default RecentActivities;
