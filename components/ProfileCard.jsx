// components/ProfileCard.jsx
import React, { useState } from "react";
import ProfilePicture from "./ProfilePicture";

const STATUS_OPTIONS = [
  { label: "Online", color: "bg-green-500" },
  { label: "Studying", color: "bg-blue-500" },
  { label: "Busy", color: "bg-red-500" },
];

// Dummy groups data for demo
const DUMMY_GROUPS = [
  "Math Study Group",
  "KU Hiking Club",
  "Project Team Alpha",
];

export default function ProfileCard() {
  // States for edit mode & form data
  const [editMode, setEditMode] = useState(false);
  const [displayName, setDisplayName] = useState("Allen Jonas");
  const [bio, setBio] = useState("KU student. Love coding and hiking.");
  const [status, setStatus] = useState("Online");

  // Groups joined count & list
  const groupsJoinedCount = DUMMY_GROUPS.length;
  const groupsPreview = DUMMY_GROUPS.slice(0, 3);

  // Handlers
  const toggleEdit = () => setEditMode(!editMode);

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6 mt-8">
      {/* Profile Picture Section */}
      <div className="flex justify-center mb-6">
        <ProfilePicture editable={editMode} />
      </div>

      {/* Display Name */}
      <div className="text-center mb-4">
        {editMode ? (
          <input
            type="text"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            className="border-b-2 border-blue-500 focus:outline-none text-2xl font-semibold text-gray-900 text-center w-full max-w-xs mx-auto"
            maxLength={30}
          />
        ) : (
          <h1 className="text-2xl font-semibold text-gray-900">{displayName}</h1>
        )}
      </div>

      {/* Bio */}
      <div className="text-center mb-4">
        {editMode ? (
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            rows={3}
            className="border border-gray-300 rounded-md p-2 w-full max-w-xs mx-auto resize-none focus:outline-none"
            maxLength={150}
            placeholder="Write something about yourself..."
          />
        ) : (
          <p className="text-gray-700 italic">{bio || "No bio added yet."}</p>
        )}
      </div>

      {/* Status */}
      <div className="text-center mb-6">
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
            className={`inline-block px-3 py-1 rounded-full text-white font-semibold ${
              STATUS_OPTIONS.find((o) => o.label === status)?.color || "bg-gray-500"
            }`}
          >
            {status}
          </span>
        )}
      </div>

      {/* Groups Joined */}
      <div className="mb-6 px-4">
        <h2 className="font-semibold text-lg mb-2 text-gray-800">
          Groups Joined ({groupsJoinedCount})
        </h2>
        <ul className="list-disc list-inside text-gray-700">
          {groupsPreview.map((group) => (
            <li key={group} className="hover:underline cursor-pointer">
              {group}
            </li>
          ))}
          {groupsJoinedCount > groupsPreview.length && (
            <li>and more...</li>
          )}
        </ul>
      </div>

      {/* Edit Button */}
      <div className="text-center">
        <button
          onClick={toggleEdit}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-md transition"
        >
          {editMode ? "Save" : "Edit Profile"}
        </button>
      </div>
    </div>
  );
}

  
    


