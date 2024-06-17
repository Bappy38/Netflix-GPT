import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../store/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../constants/appConstants";
import { toggleGptSearchView } from "../store/gptSlice";
import { changeLanguage } from "../store/configSlice";
import lang from "../constants/languageConstants";

const NavBar = () => {

    const user = useSelector((store) => store.user);
    const preferredLang = useSelector((store) => store.config.lang);
    const gptSearchEnabled = useSelector((store) => store.gpt.showGptSearch);

    console.log(gptSearchEnabled);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleGptSearchClick = () => {
        dispatch(toggleGptSearchView());
    }

    const handleLanguageChange = (event) => {
        dispatch(changeLanguage(event.target.value));
    }

    const handleSignOut = () => {
        
        // API provided by firebase to logout
        signOut(auth).then(() => {
          }).catch((error) => {
            console.error(error);
          });
    }

    useEffect(() => {
        
        // API provided by firebase to listen if the auth state changed
        // Firebase return an unsubscribe event on calling onAuthStateChanged
        const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {

            const { uid, email, displayName, photoURL } = user;
            dispatch(
            addUser({
                uid: uid,
                email: email,
                displayName: displayName,
                photoURL: photoURL
            }));
            navigate("/browse");
        } else {
            
            dispatch(
            removeUser()
            );
            navigate("/");
        }
        });

        // Unsubscribe when component unmount
        return () => unsubscribe();
    }, []);

    return (
        <div className="absolute w-full px-10 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
            <img 
                className="w-44 h-20"
                src={ LOGO }
                alt="logo"/>

            <div className="flex mt-4 h-10">

                <select
                    value={preferredLang}
                    onChange={handleLanguageChange}
                    className="px-3 mr-5 rounded-md">
                    {
                        SUPPORTED_LANGUAGES
                        .map(lang => (
                            <option key={lang.id} value={lang.id}>{lang.name}</option>
                        ))
                    }
                </select>

                {user && (
                    <div className="flex">
                        <button 
                            onClick={handleGptSearchClick}
                            className="
                                bg-blue-800 
                                text-white 
                                font-bold 
                                rounded-md
                                px-3"
                        >
                            {
                                gptSearchEnabled?
                                    lang.gptSearch[preferredLang].home
                                    :
                                    lang.gptSearch[preferredLang].gptSearch
                            }
                        </button>

                        {/* <img
                            className="rounded-md w-16 h-16 my-2"
                            src={user?.photoURL}
                            alt="user-avatar"/> */}

                        <button
                            onClick={handleSignOut}
                            className="
                                bg-red-600 
                                text-white 
                                font-bold 
                                rounded-md
                                px-3
                                ml-5"
                        >
                            {lang.login[preferredLang].signOut}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default NavBar;