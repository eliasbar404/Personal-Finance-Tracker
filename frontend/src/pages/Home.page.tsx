import {
    SignedIn,
    SignedOut,
    SignInButton,
    SignUpButton,

} from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";



const Home = () => {
    return (
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] tanslate-y-[-50]">
            <SignedOut>
                <h1 className="font-mono font-black text-2xl"> Welcome to Your Own Personal Finance Tracker!</h1>
                <SignUpButton mode="modal"/>
                <SignInButton mode="modal"/>
            </SignedOut>

        <SignedIn>
            <Navigate to="/dashboard" />
        </SignedIn>

        </div>
    )
}

export default Home;
