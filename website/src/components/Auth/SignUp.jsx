import { React, useState } from "react";
import { auth, db } from "../../config/firebase";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth"
import { Navigate, useNavigate } from "react-router-dom";
import {
  TextField,
  Avatar,
  Button,
  CssBaseline,
  FormControlLabel,
  Checkbox,
  Link,
  Paper,
  Box,
  Grid,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { getFirestore, doc, setDoc, collection } from 'firebase/firestore';

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
      'Recent Activities'
    );
  
    await setDoc(doc(recentActivitiesCollectionRef, 'initial'), {
      id: 'prokaryotic',
      progress: 0.0,
      progressedKeywords: [],
    });
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
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6}>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default SignUp;
