import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { validateSignInForm, validateSignUpForm } from "../utils/validators";
import NavBar from "./NavBar";
import { useRef, useState } from "react";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../store/userSlice";
import { BANNER, DUMMY_USER_IMG } from "../constants/appConstants";
import lang from "../constants/languageConstants";

const Login = () => {
    const preferredLang = useSelector((store) => store.config.lang);

    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    const dispatch = useDispatch();

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

                    updateProfile(user, 
                        {
                            displayName: firstName.current.value + lastName.current.value,
                            photoURL: DUMMY_USER_IMG
                        }).then(() => {
                            const { uid, email, displayName, photoURL } = auth.currentUser;
                            dispatch(
                            addUser({
                                uid: uid,
                                email: email,
                                displayName: displayName,
                                photoURL: photoURL
                            }));
                        }).catch((error) => {
                            console.error(error);
                        });
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
                    src={ BANNER }
                    alt="background"/>
            </div>
            
            <form
                className="bg-black absolute w-4/12 my-36 p-12 mx-auto right-0 left-0 text-white bg-opacity-80 rounded-md">
                <h1
                    className="font-bold text-3xl px-2 py-4">{isSignInForm? lang.login[preferredLang].signIn : lang.login[preferredLang].signUp}</h1>

                {!isSignInForm && <input 
                    className="p-2 m-2 w-full bg-gray-700 rounded-md"
                    type="text"
                    placeholder={lang.login[preferredLang].firstName}
                    ref={firstName}/>}

                {!isSignInForm && <input 
                    className="p-2 m-2 w-full bg-gray-700 rounded-md"
                    type="text"
                    placeholder={lang.login[preferredLang].lastName}
                    ref={lastName}/>}

                <input 
                    className="p-2 m-2 w-full bg-gray-700 rounded-md"
                    type="text"
                    placeholder={lang.login[preferredLang].emailAddress}
                    ref={email}/>
                
                <input
                    className="p-2 m-2 w-full bg-gray-700 rounded-md"
                    type="password"
                    placeholder={lang.login[preferredLang].password}
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
                        {isSignInForm? lang.login[preferredLang].signIn : lang.login[preferredLang].signUp}
                </button>

                <p
                    onClick={toggleIsSignInForm}
                    className="p-2 m-2 w-full cursor-pointer">
                        {isSignInForm? lang.login[preferredLang].newToNetflixSignUpNow : lang.login[preferredLang].alreadyAUserSignInNow}
                </p>
            </form>
        </div>
    )
}

export default Login;