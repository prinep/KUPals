import { useState, useRef } from "react";

export default function ProfilePicture() {
  const [imgSrc, setImgSrc] = useState(
    "https://images.pexels.com/photos/13914957/pexels-photo-13914957.jpeg?auto=compress&cs=tinysrgb&h=400&w=400"
  );
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImgSrc(URL.createObjectURL(file));
    }
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div
      style={{ 
        width: 128, 
        height: 128, 
        borderRadius: "50%", 
        overflow: "hidden", 
        border: "4px solid gray",
        cursor: "pointer",
        boxShadow: "0 0 8px rgba(0,0,0,0.2)"
      }}
      onClick={handleClick}
      title="Click to change profile picture"
    >
      <img
        src={imgSrc}
        alt="Profile"
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
      />
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleImageChange}
        style={{ display: "none" }}
      />
    </div>
  );
}


