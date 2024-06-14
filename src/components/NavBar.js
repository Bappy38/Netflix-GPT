import { signOut } from "firebase/auth";
import { LOGO } from "../utils/constants";
import { auth } from '../utils/firebase'
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const NavBar = () => {

    const navigate = useNavigate();
    const user = useSelector((store) => store.user);

    const handleSignOut = () => {
        
        // API provided by firebase to logout
        signOut(auth).then(() => {
            navigate("/");
          }).catch((error) => {
            console.error(error);
          });
    }

    return (
        <div className="absolute w-full px-20 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
            <img 
                className="w-44"
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