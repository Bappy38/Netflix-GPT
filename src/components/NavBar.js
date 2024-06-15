import { onAuthStateChanged, signOut } from "firebase/auth";
import { LOGO } from "../utils/constants";
import { auth } from '../utils/firebase'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../store/userSlice";

const NavBar = () => {

    const user = useSelector((store) => store.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

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
        <div className="absolute w-full px-20 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
            <img 
                className="w-44 h-20"
                src={LOGO}
                alt="logo"/>

            {user && (<div className="py-2 flex flex-col">
                <img
                    className="rounded-md w-16 h-16 my-2"
                    src={user?.photoURL}
                    alt="user-avatar"/>

                <button
                    onClick={handleSignOut}
                    className="bg-red-600 text-white font-bold p-2 rounded-md"
                >Sign Out</button>
            </div>)}
        </div>
    );
}

export default NavBar;