import React from 'react';
import { useEffect, useState } from 'react';
import TabBar from '../components/HomePage/TabBar';
import RecentActivities from '../components/HomePage/RecentActivities';
import Progress from '../components/HomePage/Progress';
import NavBar from '../components/HomePage/NavBar';
import { auth, db } from '../config/firebase'

// const getDetails = async () => {
//   try {

//     if (doc.exists) {
//       return Array.from(doc.data()['recentActivities']);
//     } else {
//       console.error("No such document!");
//       return null;
//     }
//   } catch (error) {
//     console.error("Error getting user details:", error);
//     return null;
//   }
// };

const HomePage = () => {
  const [recentActivities, setRecentActivities] = useState([]);
  const usersCollectionRef = db.collection("users");
  const user = auth.currentUser;

  const fetchRecentActivities = async () => {
    const activities = await usersCollectionRef.doc(user.uid);

    let userActivities = [];

    if (activities.exists()) {
      userActivities = activities.data().recentActivities
    } else {
      console.error("No such document!")
    }

    setRecentActivities([...userActivities]);
  };

  useEffect(() => {
    fetchRecentActivities();
  });

  return (
    <div className="homepage">
      <NavBar/>
      <RecentActivities style={{ zIndex: 0}} items={recentActivities}>
        {/* <div style={{margin: "100px"}}></div> */}
      </RecentActivities>
      <Progress></Progress>
    </div>
  )
}

export default HomePage;
