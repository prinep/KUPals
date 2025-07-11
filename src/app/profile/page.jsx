
"use client";

import { useState } from "react";
import ProfilePicture from "../../components/ProfilePicture";

export default function ProfilePage() {
  const [status, setStatus] = useState("Online");

  return (
    <div className="bg-white p-6 rounded-lg max-w-md mx-auto mt-10 shadow-md">
      <div className="flex justify-center mb-4">
        <ProfilePicture editable={true} />
      </div>

      <h1 className="text-3xl font-bold mt-2 mb-1 text-center">Allen Jonas</h1>

      <p className="text-sm text-gray-600 mb-1 text-center italic leading-tight">
        UUID: a1b2c3d4-e5f6-7890-abcd-ef1234567890
      </p>

      <p className="text-lg font-semibold text-gray-800 mb-4 text-center leading-snug">
        @allen.jonas
      </p>

      <p className="text-gray-700 mb-1 text-center leading-snug italic">
        KU student. Love coding and hiking.
      </p>

      <p className="text-gray-700 mb-4 text-center leading-snug">
        Passionate about tech, social causes, and outdoor adventures.
      </p>

      <div className="text-center">
        <span className="font-semibold mr-2">Status:</span>
        <select
          className="border border-gray-300 rounded px-2 py-1 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option>Online</option>
          <option>Busy</option>
          <option>Studying</option>
          <option>Offline</option>
        </select>
      </div>
    </div>
  );
}









