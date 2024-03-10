import { useRef, useState } from "react";
import "./SignUpScreen.css"
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js';
import { useNavigate } from "react-router-dom";

const firebaseConfig = {
    apiKey: "AIzaSyAfuqXZG7CbhUvRxknZyFUTYMNbAk6E4g0",
    authDomain: "netflix-clone-8b56a.firebaseapp.com",
    projectId: "netflix-clone-8b56a",
    storageBucket: "netflix-clone-8b56a.appspot.com",
    messagingSenderId: "634021542859",
    appId: "1:634021542859:web:61f8b19f96fb44f553544e"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

let user = auth.currentUser;

export default function SignUpScreen() {

    const register = ((event) => {
        event.preventDefault(); // to prevent page from refershing when a button is clicked
        createUserWithEmailAndPassword(
            auth,
            emailRef.current.value,
            passwordRef.current.value
        )
        .then(userCredential => console.log(userCredential.user))
        .catch(error => alert(error.message))
    });

    const signIn = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(
            auth,
            emailRef.current.value,
            passwordRef.current.value
        )
        .then(userCredential => console.log(userCredential.user))
        .catch(error => alert(error.message))
    };

    const emailRef = useRef(null);
    const passwordRef = useRef(null)

    return (
        <div className="signupScreen">
            <form>
                <h1>Sign In</h1>
                <input ref={emailRef} placeholder="Email" type="email"></input>
                <input ref={passwordRef} placeholder="Password" type="password"></input>
                <button type="submit" onClick={signIn}>Sign In</button>
                <h4>
                    <span className="signupScreen_gray">New to Netflix? </span> 
                    <span className="signupScreen_link" onClick={register}>Sign up now.</span>
                </h4>
            </form>
        </div>
    )
}