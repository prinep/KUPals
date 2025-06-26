"use client";

import { useState } from "react";
import Image from "next/image";

export default function LoginModule() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* trigger */}
      <button
        onClick={() => setOpen(true)}
        className="rounded-md bg-primary-600 px-4 py-2 text-white hover:bg-primary-700"
      >
        Login
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* blur overlay */}
          <div
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/5 backdrop-blur-sm"
          />

          {/* modal */}
          <div className="relative w-full max-w-md rounded-2xl bg-[#062626] shadow-[0_10px_25px_rgba(44,140,140,0.7),0_4px_10px_rgba(0,0,0,0.25)] ring-2 ring-[#000000] ring-offset-4 ring-offset-gray-900"
            style={{ backgroundColor: "#062626", boxShadow: "0 10px 25px rgba(38, 82, 82, 0.7), 0 4px 10px rgba(238, 232, 232, 0.66), inset 0 2px 5px rgba(255, 255, 255, 0.26)" }}>
            
            <div className="p-6 space-y-6">
              <div className="flex items-center text-2xl font-semibold text-gray-900 dark:text-white">
                <Image
                  src="/logo.png"
                  alt="logo"
                  width={60}
                  height={60}
                  className="mr-2"
                />
                KUPals
              </div>

              <h1 className="text-xl font-bold md:text-2xl dark:text-white">
                Sign in
              </h1>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                {/* email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Username/ Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder=""
                    required
                    className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                  />
                </div>

                {/* password */}
                <div>
                  <label
                    htmlFor="password"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    placeholder=""
                    required
                    className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                  />
                </div>

                {/* remember + forgot */}
                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 bg-gray-50 focus:ring-2 focus:ring-primary-300 dark:border-gray-600 dark:bg-gray-700"
                    />
                    <span className="text-gray-500 dark:text-gray-300">
                      Remember me
                    </span>
                  </label>

                  <a
                    href="#"
                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </a>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-primary-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-700 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Sign in
                </button>

                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{" "}
                  <a
                    href="#"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Sign up
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}