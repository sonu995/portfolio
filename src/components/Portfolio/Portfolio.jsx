import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import pos from "../../img/Screenshot pos.png"
import It from "../../img/Screenshot IT.png";
import HOC from "../../img/hoc.png";
import invoice from "../../img/Screenshot 2024-06-13 174340.png";
import { themeContext } from "../../Context"
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a href="https://sonupos.netlify.app/"><img src={pos} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://sonu995.github.io/It-website.github.io/"><img src={It} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://sonuinvoice.netlify.app/"><img src={invoice } alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <img src={HOC} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
