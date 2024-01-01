import React from "react";
import styles from "./Carousel.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img5 from "../../assets/img5.png";
import Button from "../../componants/button/Button";
import { FaCaretRight } from "react-icons/fa";

const Carousel = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className={styles.carouselBox}>
            <div className={styles.carouselLeft}>
              <h2>Lorem ipsum</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <Button className={styles.btn}>
                Know More
                <FaCaretRight />
              </Button>
            </div>
            <div className={styles.carousleRight}>
              <img src={img1} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.carouselBox}>
            <div className={styles.carouselLeft}>
              <h2>Lorem ipsum</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <Button className={styles.btn}>
                Know More
                <FaCaretRight />
              </Button>
            </div>
            <div className={styles.carousleRight}>
              <img src={img2} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.carouselBox}>
            <div className={styles.carouselLeft}>
              <h2>Lorem ipsum</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <Button className={styles.btn}>
                Know More
                <FaCaretRight />
              </Button>
            </div>
            <div className={styles.carousleRight}>
              <img src={img3} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.carouselBox}>
            <div className={styles.carouselLeft}>
              <h2>Lorem ipsum</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <Button className={styles.btn}>
                Know More
                <FaCaretRight />
              </Button>
            </div>
            <div className={styles.carousleRight}>
              <img src={img2} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.carouselBox}>
            <div className={styles.carouselLeft}>
              <h2>Lorem ipsum</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <Button className={styles.btn}>
                Know More
                <FaCaretRight />
              </Button>
            </div>
            <div className={styles.carousleRight}>
              <img src={img5} />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
