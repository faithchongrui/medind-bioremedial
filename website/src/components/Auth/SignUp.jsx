import { React, useState } from "react";
import { auth } from "../../config/firebase";
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
import { styled } from "@mui/material/styles";
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import logo from "../../images/1.png";

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
  // Auth Functions
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const logOut = async (e) => {
    try {
      auth.signOut(auth).then(() => {
        localStorage.clear();
        setIsAuth(false);
        window.location.pathname = "/login";
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    auth
      .createUserWithEmailAndPassword(data.get("email"), data.get("password"))
      .then((userCredential) => {
        localStorage.setItem("isAuth", true);
        const user = userCredential.user;
        navigate("/home");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.err("Error", errorCode + ", " + errorMessage);
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
                {/* <Grid container>
                  <Grid item>
                    <Link href="/sign-up" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid> */}
              </Box>
            </Box>
          </Grid>
        </Grid>
      
    </Grid>
  );
};

export default SignUp;
