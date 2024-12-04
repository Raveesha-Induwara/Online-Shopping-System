import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Background.css";

const SwipingBackground = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      interval={2000}
      showThumbs={false}
      showStatus={false}
      showIndicators={false}
      showArrows={false}
    >
      <div className="bimage">
        <img src="/bg1.png" alt="bg2"  height={"100%"} width={"100%"}  />
      </div>
      <div className="bimage">
        <img src="/back2.png" alt="bg3" height={"100%"} width={"100%"} />
      </div>
      <div className="bimage">
        <img
          src="/bg3.png"
          alt="Background 3"
          height={"100%"}></img>
        
      </div> 
    </Carousel>
  );
};

export default SwipingBackground;
