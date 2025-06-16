import React from "react";
import bannerBg from '../../assets/bannerBg.mp4'
import Flex from "../../layouts/Flex";
import Button from "../../layouts/Button";

const Banner = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        className="absolute  top-0 left-0 w-full h-full object-cover"
        src={bannerBg}
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="absolute top-0 left-0 w-full h-full  backdrop-blur-xs"></div>


      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center py-10 text-text-primary rounded-lg bg-white/80 backdrop-blur-lg px-[130px]">
        <h1>With convenient location?
</h1>
<Flex className="justify-center mt-10">
  <Button className="bg-bg text-text-primary">Filter</Button>
  <input className=" border w-[650px] py-2 border-bg" type="text" />
  <Button className="bg-bg text-text-primary">Search</Button>
</Flex>

          
        </div>
      </div>
    </div>
  );
};

export default Banner;
