import React, { useState, useEffect } from "react";
import "./editprofile.scss";

function EditProfile() {
  const [name, setName] = useState("Ana");
  const [profileLink, setProfileLink] = useState("https://example.com/johndoe");
  const [newPassword, setNewPassword] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleProfileLinkChange = (event) => {
    setProfileLink(event.target.value);
  };

  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handleProfilePictureChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfilePicture(URL.createObjectURL(file));
    }
  };

  const getUserData = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://127.0.0.1:5000/auth/get_user_data", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      if (response.ok) {
        const data = await response.json();
        const email = data.email;
        // Update the email in the component state or use a state management tool.
        // For simplicity, let's assume you're using state.
        setName(email);
      } else {
        // Handle the case where the API request fails or returns an error.
        console.error("Failed to fetch user data.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  
  // Call the function when the component mounts.
  useEffect(() => {
    getUserData();
  }, []);
  

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Updated Profile Data:", {
      name,
      profileLink,
      newPassword,
      profilePicture,
    });
  };

  return (
    <div className="editprofile">
      <h1>Edit Profile</h1>
      <form onSubmit={handleSubmit}>
        <div className="pp">
        <p>Profile Picture</p>
          <label htmlFor="profilePicture">
            <img src="img/ana.jpg" />
          </label>

          <input
            type="file"
            id="profilePicture"
            accept="image/*"
            onChange={handleProfilePictureChange}
          />
          {profilePicture && (
            <img onClick ={()=>{setProfilePicture(null)}}src={profilePicture} alt="Profile" width="100" />
          )}
        </div>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            placeholder=""
          />
        </div>
        <div>
          <label htmlFor="profileLink">Link:</label>
          <input
            type="text"
            id="profileLink"
            value={profileLink}
            onChange={handleProfileLinkChange}
          />
        </div>
        <div>
          <label htmlFor="newPassword">New Password:</label>
          <input
            type="password"
            id="newPassword"
            value={newPassword}
            onChange={handleNewPasswordChange}
          />
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

export default EditProfile;
