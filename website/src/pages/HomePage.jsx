import React, { useEffect, useState } from 'react';
import RecentActivities from '../components/HomePage/RecentActivities';
import Progress from '../components/HomePage/Progress';
import NavBar from '../components/HomePage/NavBar';
import { auth, db } from '../config/firebase'
import { doc, getDoc, getDocs, collection } from 'firebase/firestore';

const HomePage = () => {
  const [recentActivities, setRecentActivities] = useState([]);
  const [username, setUsername] = useState('')

  const fetchRecentActivities = async (user) => {
    const userDocRef = doc(db, 'users', user.uid);
  
    try {
      const userDocSnapshot = await getDoc(userDocRef);
  
      if (userDocSnapshot.exists()) {
        const activitiesCollectionRef = collection(userDocRef, 'RecentActivities')
        const userActivities = await getDocs(activitiesCollectionRef);

        setRecentActivities(userActivities.docs.map((doc) => ({...doc.data()})))
      } else {
        console.error('No such document!');
      }
    } catch (error) {
      console.error('Error fetching recent activities:', error);
    }
  };

  const fetchUserDetails = async (user) => {
    const userDocRef = doc(db, 'users', user.uid);
  
    try {
      const userDocSnapshot = await getDoc(userDocRef);
  
      if (userDocSnapshot.exists()) {
        const userDetails = userDocSnapshot.data();
        setUsername(userDetails.username)
      } else {
        console.error('No such document!');
      }
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  }

  const user = auth.currentUser;

  useEffect(() => {
    fetchRecentActivities(user)
    fetchUserDetails(user)
  }, [user])

  return (
    <div className="homepage">
      <NavBar/>
      <RecentActivities style={{ zIndex: 0}} items={recentActivities} username={username}>
      </RecentActivities>
      <Progress></Progress>
    </div>
  )
}

export default HomePage;
