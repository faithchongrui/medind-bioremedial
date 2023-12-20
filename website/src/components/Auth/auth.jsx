import { React, useState, useContext } from "react";
import { auth } from "../../config/firebase";
import { Navigate, useNavigate } from "react-router-dom";
import {
  TextField,
  Avatar,
  Button,
  FormControlLabel,
  Checkbox,
  Link,
  Paper,
  Box,
  Grid,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Person2Icon from "@mui/icons-material/Person2";
import logo from "../../images/2.png";
import { useAuth } from "../../context/AuthContext";

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
  borderRadius: 3,
});

const Auth = () => {
  // Auth Functions
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();

  const navigate = useNavigate();

  const logOut = async (e) => {
    try {
      auth.signOut(auth).then(() => {
        window.location.pathname = "/login";
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    login(data.get("email"), data.get("password"))
      .then((userCredential) => {
        const user = userCredential.user;
        navigate("/home");
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
      <Grid
        container
        item
        xs={false}
        sm={4}
        md={6}
        justifyContent="center"
        sx={{
          backgroundRepeat: "no-repeat",
          backgroundColor: "primary.dark",
          backgroundSize: "cover",
          backgroundPosition: "center",
          alignItems: "center",
        }}
      >
        <img src={logo} alt="Logo" style={{ width: "50%", margin: 20 }} />
      </Grid>
      <Grid
        item
        xs={12}
        sm={8}
        md={6}
        component={Paper}
        sx={{
          backgroundColor: "rgb(30, 30, 30)",
        }}
      >
        <Box
          sx={{
            my: 16,
            mx: 13,
            padding: "2.5rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "primary.main",
            borderRadius: 15,
            color: "primary.text",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "primary.light" }}>
            <Person2Icon />
          </Avatar>
          <Typography
            component="h1"
            variant="h5"
            sx={{
              my: 1,
              fontSize: 30,
              fontWeight: "bold",
            }}
          >
            Login to Bioremedial
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1, color: "primary.text" }}
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
            <FormControlLabel
              control={
                <Checkbox
                  value="remember"
                  sx={{
                    color: "primary.text",
                    accentColor: "primary.text",
                    "&.Mui-checked": { color: "primary.text" },
                  }}
                />
              }
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                my: 2,
                backgroundColor: "primary.light",
                boxShadow: "none",
                // inlineSize: "70%",
                ":hover": {
                  backgroundColor: "#188C92",
                  boxShadow: "0px 0px 3px 3px #188C92",
                },
              }}
            >
              Login
            </Button>
            <Grid container>
              <Grid item>
                <Link
                  href="/sign-up"
                  variant="body2"
                  sx={{
                    color: "primary.text",
                    textDecorationColor: "primary.main",
                    ":hover": {
                      textDecorationColor: "primary.text",
                    },
                  }}
                >
                  {"Don't have an account yet? Signup!"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Auth;
