import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Background.css";

const SwipingBackground = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      interval={4000}
      showThumbs={false}
      showStatus={false}
      showIndicators={false}
      showArrows={false}
    >
      <div className="bimage">
        <img src="/bg2.png" alt="bg2" />
      </div>
      <div className="bimage">
        <img src="/bg3.png" alt="bg3" height={"100%"} width={"100%"} />
      </div>
      {/* <div className="bimage">
        <img
          src="https://img.freepik.com/free-photo/shopping-trolleys-packets-tags_23-2147961897.jpg?uid=R175029146&ga=GA1.1.271898324.1727930328&semt=ais_hybrid"
          alt="Background 3"
          height={"50%"}
        />
      </div> */}
    </Carousel>
  );
};

export default SwipingBackground;
