import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

function App() {
  
  return (
    <div>
          <header>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
      <h1 className="bg-red-500">Hello world</h1>
    </div>
  )
}

export default App
