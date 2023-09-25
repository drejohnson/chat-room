import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SignInForm from "@/components/form/signin-form";

export const metadata: Metadata = {
  title: "Sign in",
  description: "Sign in",
};

export default function Signin() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="z-10 w-full max-w-md overflow-hidden rounded-2xl border shadow-xl">
        <div className="flex flex-col items-center justify-center px-4 text-center sm:px-16">
          <Link href="/">
            {/* <Image
              src="/logo.png"
              priority
              alt="Logo"
              className="h-10 w-10 rounded-full"
              width={20}
              height={20}
            /> */}
          </Link>
        </div>
        <SignInForm />
      </div>
    </div>
  );
}
