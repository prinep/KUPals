"use client";

import React, { useState } from "react";
import ProfilePicture from "./ProfilePicture";

const STATUS_OPTIONS = [
  { label: "Online", color: "bg-green-500" },
  { label: "Studying", color: "bg-blue-500" },
  { label: "Busy", color: "bg-red-500" },
];

export default function ProfileCard() {
  const [editMode, setEditMode] = useState(false);
  const [displayName, setDisplayName] = useState("Allen Jonas");
  const [uuid] = useState("a1b2c3d4-e5f6-7890-abcd-ef1234567890");
  const [username, setUsername] = useState("@allen.jonas");
  const [bio, setBio] = useState("KU student. Love coding and hiking.");
  const [about, setAbout] = useState("Passionate about tech, social causes, and outdoor adventures.");
  const [status, setStatus] = useState("Online");

  const toggleEdit = () => setEditMode(!editMode);

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 mt-10 font-sans text-gray-900">
      <ProfilePicture editable={editMode} />

      <div className="mt-6 text-center">
        {editMode ? (
          <input
            type="text"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            className="text-3xl font-bold border-b-2 border-blue-600 focus:outline-none text-center w-full max-w-xs mx-auto"
            maxLength={30}
          />
        ) : (
          <h1 className="text-3xl font-bold">{displayName}</h1>
        )}

        <p className="text-sm text-gray-500 mt-1 select-text">UUID: {uuid}</p>

        {editMode ? (
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mt-2 text-base font-medium border-b border-gray-400 focus:outline-none text-center w-full max-w-xs mx-auto"
            maxLength={30}
          />
        ) : (
          <p className="text-base font-medium text-blue-600 mt-2">{username}</p>
        )}

        <div className="mt-4">
          {editMode ? (
            <>
              <textarea
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                rows={2}
                maxLength={150}
                placeholder="Add a bio..."
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none resize-none"
              />
              <textarea
                value={about}
                onChange={(e) => setAbout(e.target.value)}
                rows={3}
                maxLength={300}
                placeholder="Tell us about yourself..."
                className="w-full mt-3 border border-gray-300 rounded-md p-2 focus:outline-none resize-none"
              />
            </>
          ) : (
            <>
              <p className="italic text-gray-700">{bio || "No bio added yet."}</p>
              <p className="mt-2 text-gray-700">{about || "No additional info."}</p>
            </>
          )}
        </div>

        <div className="mt-6">
          {editMode ? (
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-1 focus:outline-none"
            >
              {STATUS_OPTIONS.map((option) => (
                <option key={option.label} value={option.label}>
                  {option.label}
                </option>
              ))}
            </select>
          ) : (
            <span
              className={`inline-block px-4 py-1 rounded-full text-white font-semibold ${
                STATUS_OPTIONS.find((o) => o.label === status)?.color || "bg-gray-500"
              }`}
            >
              {status}
            </span>
          )}
        </div>

        <button
          onClick={toggleEdit}
          className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-md transition"
        >
          {editMode ? "Save" : "Edit Profile"}
        </button>
      </div>
    </div>
  );
}


    


