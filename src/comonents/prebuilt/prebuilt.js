import React from "react";
import Gigcard from "./gigcard/gigcard.js";
import { gigs } from "../../data";
import "../prebuilt/prebuilt.scss"
const Prebuilt = () => {
  return (
    <div className="gigs">
      <div className="container">
        <span className="breadcrumbs"><i onClick={()=>{
            window.location.href = "/"
        }}>VisuArt </i> > Prebuilt Designs></span>
 
        <h1>Simplify Design</h1>
        <p>Discover Prebuilt AI Image Artistry</p>
        <div className="cards">
          {gigs.map((gig) => (
            <Gigcard key={gig.id} item={gig} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Prebuilt