
import image from "./../../../assets/homebg.webp";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="bg-[#7bdcb533]"
    style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(${image})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    }}>
      <div className="homepage">
        <div className="textContainer">
          <h1>
          Get your way home worldwide
          </h1>
          <h2>A small river named Duden flows by their place and supplies it with the necessary regelialia.</h2>
        </div>
      </div>
    </div>
  );
};

export default Banner;
