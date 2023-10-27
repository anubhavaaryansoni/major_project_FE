import React from "react";
import "./profile.scss";
import { gigs } from "../../data";
import Gigcard from "../../comonents/prebuilt/gigcard/gigcard";
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
              <button>Edit Profile</button>
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
          <h1>Your Designs</h1>
        <div className="yourdesigns">
          <div className="cards">
            {gigs.map((gig) => (
              <Gigcard key={gig.id} item={gig} />
            ))}
            <img
              className="add"
              src="https://icons.veryicon.com/png/o/miscellaneous/smile-preference/add-255.png"
            />
          </div>
        </div>
      </div>
     
     
    </div>
  );
};
export default Profile;
// <a href="https://www.flaticon.com/free-icons/add" title="add icons">Add icons created by reussy - Flaticon</a>
