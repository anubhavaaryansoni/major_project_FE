import React from "react";
import "./profile.scss";
import { gigs } from "../../data";
import Gigcard from "../../comonents/prebuilt/gigcard/gigcard";
import lame from "./link_6994770.png";
// import {ana} from"../../../bg-01.jpg"
const Profile = () => {
  //  const i = {
  //    id:1900,
  //    img: "https://icons.veryicon.com/png/o/miscellaneous/smile-preference/add-255.png"
  //  }
  return (
    <div className="profile">
      <div className="container1">
        <div className="extra">
          <div className="ppname">
            <img src="img/ana.jpg"></img>
            <div className=" nameetc">
              <h3>Ana</h3>
              <label className="link">
                <img src={lame} />
                <h5>LINK</h5>
              </label>

              <button
                onClick={() => {
                  window.location.href = "/editprofile";
                }}
              >
                Edit Profile
              </button>
              <div className="info">
                <p>
                  10 <b>Saved posts</b>
                </p>
                <p>
                  5 <b>Uploaded Designs</b>
                </p>
              </div>
            </div>
          </div>
          <hr />
        </div>
        <h1>YOUR DESIGN / </h1>
        <p
          onClick={() => {
            window.location.href = "/saved";
          }}
        >
          SAVED
        </p>
        <div className="yourdesigns">
          <div className="cards">
            {gigs.map((gig) => (
              <Gigcard key={gig.id} item={gig} />
            ))}
            <label htmlFor="file-upload" className="file-input">
              <img
                className="add"
                src="https://icons.veryicon.com/png/o/miscellaneous/smile-preference/add-255.png"
              />
              <input
                type="file"
                id="file-upload"
                accept="image/*"
                // onChange={handleProfilePictureChange}
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
// <a href="https://www.flaticon.com/free-icons/add" title="add icons">Add icons created by reussy - Flaticon</a>
