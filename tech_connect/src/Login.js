import React, { useState } from 'react'
import './Login.css'
import { auth } from './firebase';
import { login } from "./features/userSlice"
import { useDispatch } from "react-redux"

function Login() {

    const [email, setEmail]  = useState("");
    const [password, setPassword]  = useState("");
    const [name, setName]  = useState("");
    const [profilePic, setProfilePic]  = useState("");
    const dispatch = useDispatch();


    const loginToApp = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
        .then(userAuth => {
          dispatch(login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            profileUrl: userAuth.user.photoURL
          })
         );
        }).catch(error => alert(error));
    };

    const register  = () => {
        if (!name) {
            return alert("Please enter a full name");
        }

        auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: name, 
                photoURL: profilePic,
            })
            .then(() => {
                dispatch(
                  login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                    photoUrl: profilePic,
                  })
                );
            });
        }).catch(error => alert(error));
    };

  return (
        <div className="home">
          <div className="login">
            <img src="icons8-linkedin.svg" alt="" />

            <form>
              <input value={name} onChange={e => setName(e.target.value)} placeholder="Full Name (required for registration)" type="text" />
              <label>Full Name</label>
              <input value={profilePic} onChange={e => setProfilePic(e.target.value)} placeholder="Profile pic URL (optional)" type="text" />

              <input value={email} onChange={e => setEmail(e.target.value)} 
              placeholder="Email Address" 
              type="email" 
              />

              <input value={password} onChange={e => setPassword(e.target.value)}placeholder="Password" type="password" />

              <button type="submit" onClick={loginToApp}>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                Sign In</button>
            </form>

            <p>Not A Member?{" "}
                  <span className="login__register" onClick={register}>Register Now</span>
            </p>
 
          </div>
          {/* <div className="hero">
            <img src="hero.png" alt="" width="500px" height="500px"/>
          </div> */}
        </div>
  )
}

export default Login
