import React from "react";
import { Button } from "../ui/button";
import { FcGoogle } from "react-icons/fc";

function OAuth() {
  const handleGoogleSignIn = () => {
    console.log("Google Sign In");
  };
  return (
    <>
      <div className="flex items-center gap-5 my-5">
        <div className="border-[#c2c8d0] border-b w-full"></div>
        <>OR</>
        <div className="border-[#c2c8d0] border-b w-full"></div>
      </div>
      <Button
        className="w-full py-5 bg-white shadow-none text-black border border-[#c2c8d0]  hover:bg-[#e5e5e5] transition duration-300"
        onClick={() => handleGoogleSignIn()}
      >
        <span className="flex items-center gap-2">
          <FcGoogle className="w-6 h-6" />
          Continue with Google
        </span>
      </Button>
    </>
  );
}

export default OAuth;
