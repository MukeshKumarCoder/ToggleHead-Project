import React from "react";
import styles from "./CardSection.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Button from "../../componants/button/Button";
import { FaCaretRight } from "react-icons/fa";

const CardSection = () => {
  return (
    <div className={styles.slideBox}>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className={styles.cardBox}>
            <h2>Lorem ipsum</h2>
            <p>
              LoremText can generate both random or fixed lorem ipsum text using
              sublime text 2 as a plugin. More than 1000 plugins
            </p>
            <Button>
              Know More <FaCaretRight />
            </Button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.cardBox}>
            <h2>Lorem ipsum</h2>
            <p>
              LoremText can generate both random or fixed lorem ipsum text using
              sublime text 2 as a plugin. More than 1000 plugins
            </p>
            <Button>
              Know More <FaCaretRight />
            </Button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.cardBox}>
            <h2>Lorem ipsum</h2>
            <p>
              LoremText can generate both random or fixed lorem ipsum text using
              sublime text 2 as a plugin. More than 1000 plugins
            </p>
            <Button>
              Know More <FaCaretRight />
            </Button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.cardBox}>
            <h2>Lorem ipsum</h2>
            <p>
              LoremText can generate both random or fixed lorem ipsum text using
              sublime text 2 as a plugin. More than 1000 plugins
            </p>
            <Button>
              Know More <FaCaretRight />
            </Button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.cardBox}>
            <h2>Lorem ipsum</h2>
            <p>
              LoremText can generate both random or fixed lorem ipsum text using
              sublime text 2 as a plugin. More than 1000 plugins
            </p>
            <Button>
              Know More <FaCaretRight />
            </Button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.cardBox}>
            <h2>Lorem ipsum</h2>
            <p>
              LoremText can generate both random or fixed lorem ipsum text using
              sublime text 2 as a plugin. More than 1000 plugins
            </p>
            <Button>
              Know More <FaCaretRight />
            </Button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.cardBox}>
            <h2>Lorem ipsum</h2>
            <p>
              LoremText can generate both random or fixed lorem ipsum text using
              sublime text 2 as a plugin. More than 1000 plugins
            </p>
            <Button>
              Know More <FaCaretRight />
            </Button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CardSection;
