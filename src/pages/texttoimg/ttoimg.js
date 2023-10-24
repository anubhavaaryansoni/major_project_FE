import React from "react";
import "./ttoimg.scss";
import menu from "./menu.png"
const Ttoimg = () => {
  return (
    <div className="ttoimg">
      <div className="h1">
        <h1>AI generator</h1>
      </div>
      <div className="container">
        <div className="desc">
          <p>
            Generate an image using AI! An image will be generated based on a
            description about the image, this is often called a prompt.
            <hr />A good prompt needs to describe the subject of the image (what
            the image is about) and how the image should look, so things like if
            it's a painting or a sketch, realistic or stylized.
          </p>
        </div>

        <div className="prompt">
          <div className="img">
            <img src={menu}></img>
          </div>
          <div className="desc-prompt">
            <label>Description prompt</label>
            <textarea
              className="big"
              columns="40"
              placeholder="futuristic lighthouse, flash light, hyper realistic, epic composition, cinematic, landscape vista photography, landscape veduta photo & tdraw, detailed landscape painting rendered in enscape, miyazaki, 4k detailed post processing, unreal engineered"
            />
            <label class="pad-5">Remove (negative prompt)</label>
            <textarea
              className="small"
              type="text"
              placeholder="What do you want to avoid ?"
            />
          </div>
        </div>
        <button>Generate</button>
      </div>
    </div>
  );
};

export default Ttoimg;
