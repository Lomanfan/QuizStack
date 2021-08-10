import React from "react";
import LazyHero from "react-lazy-hero";

const Hero = (props) => {
  return (
    <div>
      <LazyHero
        imageSrc="../../galaxy.jpg"
        isFixed="false"
        opacity="0"
        height="60%"
        width="100%"
        // children="<Logo/>"
        // className=""
        // color="#fff"
        // imageSrc=""
        isCentered="true"
        // minHeight="75vh"
        parallaxOffset="100"
        // style={overflow:"hidden"}
        // transitionDuration="600"
        // transitionTimingFuction="ease-in-out"
      >
        <h1 style={{ color: "lavender" }}>QuizStack-The ultimate resource to prepare for coding interviews.</h1>
        {/* <Particles style={{width: '500px'}}/> */}
      </LazyHero>

      {/* ... */}
    </div>
  );
};
export default Hero;
