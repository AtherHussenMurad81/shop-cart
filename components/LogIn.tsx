import { SignInButton } from "@clerk/nextjs";
import React from "react";

export const Login = () => {
  return (
    <SignInButton mode="modal">
      <button className="text-sm font-semibold hover:text-darkColor hoverEffect text-light hover:cursor-pointer">
        Login
      </button>
    </SignInButton>
  );
};
