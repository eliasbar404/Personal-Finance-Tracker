import { SignedIn,UserButton } from "@clerk/clerk-react";


const Header = () => {
    return (
        <header className="bg-slate-50 p-3 flex justify-end shadow-xl">
            <div className="text-white font-mono font-black inline px-9 py-1 rounded-xl">
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
        </header>
)
}

export default Header