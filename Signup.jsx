// src/Pages/Auth/Signup.jsx
import React, { useState, useContext } from 'react';
import classes from "./Signup.module.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../Utility/firebase.jsx";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { ClipLoader } from 'react-spinners';  
import { DataContext } from '../../Component/DataProvider/DataProvider.jsx';
import { Type } from '../../Utility/action.jsx';

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState({
    signIn: false,
    signUp: false
  });

  const { state, dispatch } = useContext(DataContext);
  const { user } = state;
  const navigate = useNavigate();

  const AuthHandler = async (e) => {
    e.preventDefault();
    const { name } = e.target;
    
    // Set loading state for the clicked button only
    setLoading({
      signIn: name === "signin",
      signUp: name === "signup"
    });

    try {
      const userInfo = name === "signin"
        ? await signInWithEmailAndPassword(auth, email, password)
        : await createUserWithEmailAndPassword(auth, email, password);

      dispatch({
        type: Type.SET_USER,
        user: userInfo.user,
      });
      navigate("/");
    } catch (err) {
      setError(err.message);
      console.log(err.message);
    } finally {
      // Reset loading state
      setLoading({
        signIn: false,
        signUp: false
      });
    }
  };

  return (
    <section className={classes.login}>
      <Link to="/">
        <img
          src="https://www.hatchwise.com/wp-content/uploads/2022/08/Amazon-Logo-2000-present-1024x576.jpeg"
          alt="Amazon Logo"
        />
      </Link>

      <div className={classes.login__container}>
        <h1>Sign In</h1>
        <form>
          <div>
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              required
            />
          </div>
          
          <button
            type="submit"
            onClick={AuthHandler}
            className={classes.login__signInbutton}
            name="signin"
          >
            {loading.signIn ? <ClipLoader color="#cef" size={15} /> : "Log In"}
          </button>
        </form>
        <p>By signing in you agree to our terms and conditions...</p>
        <button
          type="button"
          onClick={AuthHandler}
          className={classes.login__registerButton}
          name="signup"
        >
          {loading.signUp ? <ClipLoader color="#213" size={15} /> : "Create Your Amazon Account"}
        </button>
        {error && <small style={{ paddingTop: "5px", color: "red" }}>{error}</small>}
      </div>
    </section>
  );
}

export default Auth;