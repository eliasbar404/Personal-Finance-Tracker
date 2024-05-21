import {
    SignedIn,
    SignedOut,
    SignInButton,
    SignUpButton,

} from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";



const Home = () => {
    return (
        <div className="absolute top-[20%] left-[50%] translate-x-[-50%] tanslate-y-[-50]">
            <img className="mb-8" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Dollar_sign_in_circle_cleaned_%28PD_version%29.svg/1200px-Dollar_sign_in_circle_cleaned_%28PD_version%29.svg.png" width={200} alt=""/>
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
