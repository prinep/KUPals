import React from "react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#e0f7fa] to-[#fce4ec]">
      <nav className="flex items-center justify-between px-8 py-4 bg-white/80 shadow-md sticky top-0 z-10">
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="KUPals Logo" className="h-10 w-10" />
          <span className="text-2xl font-bold text-[#158080]">KUPals</span>
        </div>
        <div className="space-x-4">
          <Link href="/app/auth/login" className="px-4 py-2 rounded-lg bg-[#158080] text-white font-semibold hover:bg-[#106060] transition">Login</Link>
          <Link href="/app/auth/register" className="px-4 py-2 rounded-lg border border-[#158080] text-[#158080] font-semibold hover:bg-[#e0f7fa] transition">Sign Up</Link>
        </div>
      </nav>
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 py-12">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-[#158080]">Welcome to KUPals</h1>
        <p className="text-lg md:text-2xl text-gray-700 mb-6">A Social Platform for Kathmandu University Students</p>
        <p className="text-xl md:text-3xl font-semibold text-[#158080] mb-8">Connect. Collaborate. Celebrate.</p>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center mt-8">
          <div className="bg-white/90 rounded-xl shadow-lg p-6 max-w-xs flex flex-col items-center">
            <img src="/globe.svg" alt="Groups" className="h-16 mb-4" />
            <h3 className="font-bold text-lg mb-2">Interest Groups</h3>
            <p className="text-gray-600">Join public or private groups to connect with like-minded students.</p>
          </div>
          <div className="bg-white/90 rounded-xl shadow-lg p-6 max-w-xs flex flex-col items-center">
            <img src="/window.svg" alt="Chat" className="h-16 mb-4" />
            <h3 className="font-bold text-lg mb-2">Real-Time Chat</h3>
            <p className="text-gray-600">Chat instantly with your groups and get real-time notifications.</p>
          </div>
          <div className="bg-white/90 rounded-xl shadow-lg p-6 max-w-xs flex flex-col items-center">
            <img src="/file.svg" alt="Secure" className="h-16 mb-4" />
            <h3 className="font-bold text-lg mb-2">Secure & Private</h3>
            <p className="text-gray-600">Your data is protected with secure authentication and privacy controls.</p>
          </div>
        </div>
        <div className="mt-12">
          <Link href="/app/auth/register" className="inline-block px-8 py-3 rounded-full bg-[#158080] text-white text-lg font-bold shadow-lg hover:bg-[#106060] transition">Get Started</Link>
        </div>
      </main>
      <footer className="bg-white/80 py-4 text-center text-gray-500 text-sm mt-8 shadow-inner">
        &copy; {new Date().getFullYear()} KUPals. Made for Kathmandu University Students.
      </footer>
    </div>
  );
}
