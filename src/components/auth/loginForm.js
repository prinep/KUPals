import React from "react";
import Input from "../ui/input";
import Button from "../ui/button";
import GoogleSvg from "./googleSvg";
import { useRouter } from "next/navigation";

import { AuthContext } from "../../context/authContext";

import { useState, useContext } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

const loginForm = () => {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { user, loading, signUp, signIn, signInWithGoogle, logout } =
    useContext(AuthContext);

  console.log(user);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Account creation form submitted!");
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      alert("Signed in with Google successfully!");
      router.push("/users/" + user.displayName);
    } catch (error) {
      console.error("Google sign-in error:", error.message);
      alert("Google sign-in failed: " + error.message);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <Input type="text" id="firstName" placeholder="First Name" />
          </div>
          <div className="flex-1">
            <Input type="text" id="lastName" placeholder="Last Name" />
          </div>
        </div> */}

        <div>
          <Input type="email" id="email" placeholder="Email" />
        </div>

        <div className="relative">
          <Input
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder="Enter your password"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-white focus:outline-none"
          >
            {showPassword ? (
              <EyeSlashIcon className="h-5 w-5" />
            ) : (
              <EyeIcon className="h-5 w-5" />
            )}
          </button>
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            id="terms"
            className="h-4 w-4 text-[#2ACAA8] bg-[#354240] border-[#455553] rounded focus:ring-[#3CE6BD] transition duration-200"
            required
          />
          <label htmlFor="terms" className="ml-2 block text-sm text-gray-400">
            I agree to the{" "}
            <a href="#" className="text-[#2ACAA8] hover:underline">
              Terms & Conditions
            </a>
          </label>
        </div>

        <Button type="submit">Create account</Button>
      </form>
      <div className="relative my-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-[#3A3A4D]"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="bg-[#252F2D] px-2 text-gray-400">
            Or register with
          </span>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={handleGoogleSignIn}
          className="flex-1 py-3 px-4 bg-[#354240] border border-[#455553] rounded-lg text-white flex items-center justify-center font-semibold hover:bg-[#4A4A5D] focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-[#252F2D] transition duration-300 ease-in-out shadow-md hover:shadow-lg"
        >
          <GoogleSvg />
          Google
        </button>
      </div>
    </>
  );
};

export default loginForm;
