import { Link } from "react-router-dom";
import image from "./../../../assets/banner-img.png";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="bg-[#7bdcb533]">
      <div className="homepage">
        <div className="textContainer">
          <h1>
            Welcome to <span style={{ color: "#03B97C" }}>EDU-Care</span>
          </h1>
          <h2>Learn New Languages and Move Forward</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation
          </p>
          <Link className="" to="/">
            <button>Go To Course</button>
          </Link>
        </div>
        <div>
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
