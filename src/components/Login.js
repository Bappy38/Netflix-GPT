import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { validateSignInForm, validateSignUpForm } from "../utils/validators";
import NavBar from "./NavBar";
import { useRef, useState } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    const navigate = useNavigate();

    const firstName = useRef(null);
    const lastName = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const toggleIsSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }

    const handleFormSubmission = () => {

        const errMessage = isSignInForm
            ?
            validateSignInForm(email.current.value, password.current.value)
            :
            validateSignUpForm(firstName.current.value, lastName.current.value, email.current.value, password.current.value);

        setErrorMessage(errMessage);

        if (errMessage)
            return;

        if (isSignInForm) {

            // API provided by firebase to sign in
            signInWithEmailAndPassword(
                auth, 
                email.current.value, 
                password.current.value
            )
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log(user);
                    navigate('/browse');
                })
                .catch((error) => {
                    console.log(error);
                });
        }
        else {

            // API provided by firebase to sign up
            createUserWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value
            )
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log(user);
                    navigate('/browse');
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }

    return (
        <div>
            <NavBar/>
            <div className="absolute">
                <img
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/51c1d7f7-3179-4a55-93d9-704722898999/af6faa3e-4cde-4526-9532-602c0bcdf948/BD-en-20240610-popsignuptwoweeks-perspective_alpha_website_large.jpg"
                    alt="background"/>
            </div>
            
            <form
                className="bg-black absolute w-4/12 my-36 p-12 mx-auto right-0 left-0 text-white bg-opacity-80 rounded-md">
                <h1
                    className="font-bold text-3xl px-2 py-4">{isSignInForm? "Sign In" : "Sign Up"}</h1>

                {!isSignInForm && <input 
                    className="p-2 m-2 w-full bg-gray-700 rounded-md"
                    type="text"
                    placeholder="First Name"
                    ref={firstName}/>}

                {!isSignInForm && <input 
                    className="p-2 m-2 w-full bg-gray-700 rounded-md"
                    type="text"
                    placeholder="Last Name"
                    ref={lastName}/>}

                <input 
                    className="p-2 m-2 w-full bg-gray-700 rounded-md"
                    type="text"
                    placeholder="Email Address"
                    ref={email}/>
                
                <input
                    className="p-2 m-2 w-full bg-gray-700 rounded-md"
                    type="password"
                    placeholder="Password"
                    ref={password}/>

                <p 
                    className="text-red-600 font-bold text-lg p-2"
                >
                    {errorMessage}
                </p>

                <button
                    type="button"
                    className="p-2 m-2 w-full bg-red-600 font-semibold rounded-md"
                    onClick={handleFormSubmission}
                    >
                        {isSignInForm? "Sign In" : "Sign Up"}
                </button>

                <p
                    onClick={toggleIsSignInForm}
                    className="p-2 m-2 w-full cursor-pointer">
                        {isSignInForm? "New to Netflix? Sign up now." : "Already a user? Sign in now."}
                </p>
            </form>
        </div>
    )
}

export default Login;