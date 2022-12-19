import * as React from "react";
import { nanoid } from "nanoid";
import { Stack } from "@mui/material";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.min.css";
import "swiper/swiper-bundle.min.css";

import { Image } from "../../../../components/Image/Image";

import styles from "./carousel.module.css";
import { slides } from "./carousel.data";

export const Carousel = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        slidesPerView={"auto"}
        effect={"fade"}
        speed={2000}
        freeMode={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
          pauseOnMouseEnter: false,
          stopOnLastSlide: true,
        }}
        navigation={false}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className={styles.swiper}
      >
        {slides.map((item: any) => {
          return (
            <SwiperSlide className={styles.swiperSlide} key={nanoid()}>
              <Stack direction={"row"}>
                {item.images.map((item: any) => {
                  return (
                    <Image
                      key={nanoid()}
                      image_sm={item.image_sm}
                      image_md={item.image_md}
                      image_lg={item.image_lg}
                      image_xl={item.image_xl}
                      alt={item.alt}
                      brightness={".7"}
                    />
                  );
                })}
              </Stack>
              {item.component}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};
