import { React, useState } from "react";
import { auth, db } from "../../config/firebase";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth"
import { Navigate, useNavigate } from "react-router-dom";
import {
  TextField,
  Avatar,
  Button,
  CssBaseline,
  Paper,
  Box,
  Grid,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import logo from "../../images/1.png";
import { getFirestore, doc, setDoc, collection, deleteDoc } from 'firebase/firestore';

const StyledTextField = styled(TextField)({
  "& label": {
    color: "#CBE4DE",
  },
  "& label.Mui-focused": {
    color: "#CBE4DE",
  },
  "& .MuiOutlinedInput-root": {
    color: "white",
    "& fieldset": {
      borderColor: "rgb(30, 30, 30)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "rgb(30, 30, 30)",
    },
  },
  backgroundColor: "rgb(30, 30, 30)",
  borderRadius: 3
});


const SignUp = ({ setIsAuth }) => {

  const navigate = useNavigate();

  const logOut = async (e) => {
    try {
        signOut(auth).then(() => {
        localStorage.clear();
        setIsAuth(false);
        window.location.pathname = "/login";
      });
    } catch (err) {
      console.error(err);
    }
  };

  const createUser = async (email, password, username, uid) => {
  
    const usersCollectionRef = collection(db, 'users');
  
    await setDoc(doc(usersCollectionRef, uid), {
      email: email,
      password: password,
      username: username,
    });
  
    const recentActivitiesCollectionRef = collection(
      doc(usersCollectionRef, uid),
      'RecentActivities'
    );
  
    await setDoc(doc(recentActivitiesCollectionRef, 'initial'), {
      id: 'prokaryotic',
      description: 'lorem ipsum',
      progress: 0.0,
    });

    const progressedKeyWordsCollectionRef = collection(
      recentActivitiesCollectionRef, 'initial', 'ProgressedKeywords'
    )

    await setDoc(doc(progressedKeyWordsCollectionRef, 'initial'), {
      id: "prokaryotic",
      keyword: 'cell'
    });

    await deleteDoc(doc(recentActivitiesCollectionRef, 'initial'))
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    createUserWithEmailAndPassword(auth, data.get("email"), data.get("password"))
      .then((userCredential) => {
        localStorage.setItem("isAuth", true);
        const user = userCredential.user;
        try {
          createUser(data.get("email"), data.get("password"), data.get("username"), user.uid)
        } catch (e) {
          console.error(e)
        }
        navigate("/login");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Error", errorCode + ", " + errorMessage);
      });
  };

  // Front-end

  return (
    <Grid container component="main" justifyContent="center" sx={{ height: "100vh", backgroundColor: "#1E1E1E" }}>
      <Grid
        container
        item
        xs={false}
        // sm={4}
        md={9}
        justifyContent="center"
        sx={{
          backgroundRepeat: "no-repeat",
          backgroundColor: "#2C3333",
          // backgroundSize: "cover",
          backgroundPosition: "center",
          alignItems: "center",
        }}>
          <img src={logo} alt="Logo" style={{width: "30%", margin: 50}} />
          <Grid 
            item
            xs={12}
            sm={8}
            md={6}
            elevation={0}
            component={Paper}
            sx={{
              backgroundColor: "#2C3333",
            }}>
           
            <Box
              sx={{
                my: 6,
                mx: 4,
                padding: "2.5rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                borderRadius: 15,
                color: "#CBE4DE",
                backgroundColor: "#2E4F4F",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "rgb(20, 110, 114)" }}>
                <Person2OutlinedIcon />
              </Avatar>
              <Typography 
                component="h1"
                variant="h5"
                sx={{
                  my: 1,
                  fontSize: 30,
                  fontWeight: "bold",
                }}>
                Create a new account
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 1, color: "#CBE4DE" }}
              >
                <StyledTextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoFocus
                />
                <StyledTextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  // class="test"
                />
                <StyledTextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                {/* confirm password */}
                <StyledTextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Confirm Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    my: 2,
                    backgroundColor: "rgb(20, 110, 114)",
                    boxShadow: "none",
                    // inlineSize: "70%",
                    ":hover": {
                      backgroundColor: "#188C92",
                      boxShadow: "0px 0px 3px 3px #188C92",
                    },
                  }}
                >
                  Sign Up
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
    </Grid>
  );
};

export default SignUp;
