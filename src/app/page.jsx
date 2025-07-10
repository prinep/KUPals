'use client';
import React, { useState } from 'react';
import Image from 'next/image';

export default function ProfilePage() {
  const [profilePhoto, setProfilePhoto] = useState('/default-profile.jpg'); // replace with actual image if available

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imgURL = URL.createObjectURL(file);
      setProfilePhoto(imgURL);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fdfbfb] to-[#ebedee] p-8 flex justify-center items-center font-sans">
      <div className="bg-white shadow-lg rounded-2xl w-full max-w-md p-6">
        {/* Profile picture section */}
        <div className="relative w-32 h-32 mx-auto mb-4">
          <Image
            src={profilePhoto}
            alt="Profile"
            className="rounded-full object-cover border-4 border-white shadow"
            layout="fill"
          />
          <label htmlFor="photo-upload">
            <div className="absolute bottom-0 right-0 bg-blue-500 text-white rounded-full p-1 cursor-pointer shadow-md hover:bg-blue-600">
              +
            </div>
          </label>
          <input
            id="photo-upload"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handlePhotoChange}
          />
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800">Allen Jonas</h2>
          <p className="text-sm text-gray-500">UUID: a1b2c3d4-e5f6-7890-abcd-ef1234567890</p>
          <p className="text-sm text-gray-500">@allen.jonas</p>
        </div>

        <div className="mt-4 text-center text-gray-700">
          <p className="italic">KU student. Love coding and hiking.</p>
          <p className="mt-2">Passionate about tech, social causes, and outdoor adventures.</p>
        </div>

        <div className="mt-4 text-center">
          <span className="inline-block bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
            ● Online
          </span>
        </div>

        <div className="mt-6 text-center">
          <label htmlFor="edit-photo" className="cursor-pointer text-blue-600 hover:underline text-sm">
            Edit Profile Photo
          </label>
          <input
            id="edit-photo"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handlePhotoChange}
          />
        </div>
      </div>
    </div>
  );
}
