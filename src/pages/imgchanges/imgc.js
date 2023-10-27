import React from "react";
import "../imgchanges/imgc.scss";
import menu from "../texttoimg/menu.png";
const Imgc = () => {
  return (
    <div className="imgc">
      <div className="h1">
        <h1>AI-Powered Image Enhancement and Painting transformation </h1>
      </div>
      <div className="container">
        <div className="desc">
          <p>
            Transform your photos into stunning works of art with the magic of
            artificial intelligence. Our cutting-edge technology brings your
            images to life in ways you've never imagined.
            <hr />
            Whether you want to enhance the clarity and vibrancy of your photos
            or turn them into beautiful paintings, we've got you covered
          </p>
        </div>

        <div className="prompt">
          <div className="img">
            <img src={menu}></img>
          </div>
          <div className="desc-prompt">
            <label for="file-upload" class="custom-file-input">
              <input type="file" id="file-upload" />
              <span class="custom-file-label">Choose a file</span>
            </label>
          </div>
        </div>
        <div className="buttons">
          <button>Image Enhancement</button>
          <button>Image to Sketch</button>
        </div>
      </div>
    </div>
  );
};

export default Imgc;
