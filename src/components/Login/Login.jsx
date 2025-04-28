
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut, TwitterAuthProvider } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../Firebase/firebase.init';


const Login = () => {

    // all state in here
    const [user, setUser] = useState(null);
    const [errorEmail, setErrorEmail] = useState(null);

    // all provider in here
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const twitterProvider = new TwitterAuthProvider();

    // Google Sign In function
    const handleGoogleSignIn = () =>{
        setErrorEmail(null);
        console.log(auth,googleProvider)
        signInWithPopup(auth,googleProvider)
        .then(result =>{
            console.log(result.user);
            setUser(result.user);
        })
        .catch(error =>{
            console.log('error', error);
            setUser(null);
        })
    }

    // Twitter Sign In function
    const handleTwitterSignIn = () =>{
        console.log('btn clicked')
        signInWithPopup(auth, twitterProvider)
        .then(result => {
            console.log(result.user);
            setUser(result);
        })
        .catch(error => {
            console.log('Error', error);
        })
    }

    // Github Sign In function
    const handleGithubSignIn = () =>{
        signInWithPopup(auth, githubProvider)
        .then(result => {
            console.log(result.user);
            setUser(result.user);
        })
        .catch(error => {
            console.log('Error', error.code);
            if(error.code === 'auth/account-exists-with-different-credential'){
                const email = error.customData.email;
                setErrorEmail(email);
            }
        })
    }

    // sign out function
    const handleSignOut = () =>{
        signOut(auth)
        .then(() => console.log('sign out completed'))
        .catch((error) => console.log(error))
        setUser(null);
    }

    return (
        <div>
            {/* <button onClick={handleGoogleSignIn} style={{'marginTop' : '20px'}}>Login with Goggle</button>
            <button onClick={handleSignOut}>Sign out</button> */}
            {
                user ? 
                <button onClick={handleSignOut}>Sign out</button> :
                <>
                <button onClick={handleGoogleSignIn} style={{'marginTop' : '20px'}}>Login with Goggle</button>
                <button onClick={handleGithubSignIn}>Login with Github</button>
                <button onClick={handleTwitterSignIn}>Login with twitter</button>
                </>
            }
            { user &&
                <div>
                    <h4>{user.displayName}</h4>
                    <h5>{user.email}</h5>
                    <img src={user.photoURL} alt="" />
                </div>
            }
            {
                errorEmail && <h3>{errorEmail} This email already has an account</h3>
            }
        </div>
    );
};

export default Login;