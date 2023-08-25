import React from 'react';
import { useEffect, useState } from 'react';
import TabBar from '../components/HomePage/TabBar';
import RecentActivities from '../components/HomePage/RecentActivities';
import Progress from '../components/HomePage/Progress';
import NavBar from '../components/HomePage/NavBar';
import { auth, db } from '../config/firebase'
import { getFirestore, doc, getDoc } from 'firebase/firestore';


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

  const fetchRecentActivities = async (user) => {
    const db = getFirestore();
    const userDocRef = doc(db, 'users', user.uid);
  
    try {
      const userDocSnapshot = await getDoc(userDocRef);
  
      if (userDocSnapshot.exists()) {
        const userActivities = userDocSnapshot.data().recentActivities;
        setRecentActivities([...userActivities]);
      } else {
        console.error('No such document!');
      }
    } catch (error) {
      console.error('Error fetching recent activities:', error);
    }
  };

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
