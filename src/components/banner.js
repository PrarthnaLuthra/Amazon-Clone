import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function banner() {
    // const myLoader=({src})=>{
    //     return "./images/caousel-1.jpg";
    //   }
  return (
    <div className="relative">
        <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100  to-transparent bottom-0 z-20"/>
      <Carousel
        autoPlay
        infinteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
          <div>
              <img src="https://m.media-amazon.com/images/I/71RmmLZ6SHL._SX3000_.jpg"  />
          </div>
          <div>
              <img loading='lazy' src="https://images-eu.ssl-images-amazon.com/images/G/02/kindle/content/GTM/Editorial/0504-AMZN-GNBC-GatewayHero-1500x600_v5._CB669739807_.jpg" alt="" />

          </div>
          <div>
          <img loading='lazy' src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/launch/gateway/TheUndergroundRailroad/UGRR_S1_GWBleedingHero_ENG_COVIDUPDATE_XSite_1500X600_PV_en-GB._CB669781769_.jpg" alt="" />

          </div>
          <div>
          <img loading='lazy' src="https://m.media-amazon.com/images/I/617CoD4euRL._SX3000_.jpg" alt="" />

          </div>
          
      </Carousel>
    </div>
  );
}

export default banner;
