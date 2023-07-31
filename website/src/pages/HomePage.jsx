import React from 'react';
import TabBar from '../components/HomePage/TabBar';
import RecentActivities from '../components/HomePage/RecentActivities';
import Progress from '../components/HomePage/Progress';

const HomePage = () => {
  return (
    <div className="homepage">
      <TabBar style={{ zIndex: 0 }}/> 
      <RecentActivities style={{ zIndex: 0}}>
        {/* <div style={{margin: "100px"}}></div> */}
      </RecentActivities>
      <Progress></Progress>
    </div>
  )
}

export default HomePage;
