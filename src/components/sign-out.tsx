"use client";
import { signOut } from "next-auth/react";
import { Button } from "./ui/button";

const SignOut = () => {
  return (
    <Button variant="link" onClick={() => signOut()}>
      Sign out
    </Button>
  );
};

export default SignOut;
