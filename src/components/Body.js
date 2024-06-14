import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../store/userSlice";
import { auth } from "../utils/firebase";

const Body = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        
        // API provided by firebase to listen if the auth state changed
        onAuthStateChanged(auth, (user) => {
        if (user) {

            const { uid, email, displayName, photoURL } = user;
            dispatch(
            addUser({
                uid: uid,
                email: email,
                displayName: displayName,
                photoURL: photoURL
            }));
        } else {
            
            dispatch(
            removeUser()
            );
        }
        });
    }, []);

    const appRouter = createBrowserRouter([
        {
            path: '/',
            element: <Login />
        },
        {
            path: '/browse',
            element: <Browse />
        }
    ]);

    return (
        <div>
            <RouterProvider router={appRouter}/>
        </div>
    );
}

export default Body;