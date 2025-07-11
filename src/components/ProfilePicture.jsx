"use client";

import React, { useRef, useState } from "react";

export default function ProfilePicture({ editable }) {
  const [imageSrc, setImageSrc] = useState("/default-profile.jpg"); // or your default
  const fileInputRef = useRef(null);

  const handleClick = () => {
    if (editable && fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setImageSrc(imageURL);
    }
  };

  return (
    <div className="relative w-32 h-32">
      <img
        src={imageSrc}
        alt="Profile"
        className="rounded-full w-32 h-32 border-4 border-gray-300 object-cover mx-auto"
      />

      {editable && (
        <>
          <button
            onClick={handleClick}
            aria-label="Edit profile picture"
            className="absolute bottom-0 right-0 bg-blue-600 text-white rounded-full p-1.5 shadow-md hover:bg-blue-700 transition"
          >
            +
          </button>

          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            ref={fileInputRef}
            className="hidden"
          />
        </>
      )}
    </div>
  );
}













