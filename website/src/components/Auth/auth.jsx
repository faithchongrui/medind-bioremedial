import { React, useState } from "react";
import { auth } from "../../config/firebase";
import { Navigate, useNavigate } from "react-router-dom";

const Auth = () => {

  // Auth Functions

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(auth, email, password)
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

  const logOut = async () => {
    try {
      auth.signOut(auth).then(() => {
        localStorage.clear();
        setIsAuth(false);
        window.location.pathname = "/login";
      });
    } catch (err) {
        console.error(err)
    }
  }

  // Front-end

  return (
    <div className="login-page">
      <div className="logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" />
      </div>
      <form onSubmit={signIn}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="Sign In" onClick={{ signIn }}>Login</button>
      </form>
    </div>
  );
};

export default Auth;
