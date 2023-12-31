import { Metadata } from "next";
import Link from "next/link";
import SignUpForm from "@/components/form/signup-form";

export const metadata: Metadata = {
  title: "Create Account",
  description: "Create Acount",
};

export default function Register() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="z-10 w-full max-w-md overflow-hidden rounded-2xl border border-gray-100 shadow-xl">
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
        <SignUpForm />
      </div>
    </div>
  );
}
