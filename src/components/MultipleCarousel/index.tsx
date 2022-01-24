import { Box, Flex, BoxProps, chakra } from "@chakra-ui/react";
import { useState } from "react";
import SlideButton from "./SlideButton";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { breakpoints } from "./constants";

const Carousel = chakra(Swiper);

type Props = {
  cards: any[];
} & BoxProps;

export default function MultipleCarousel({ cards, ...props }: Props) {
  const [swiper, setSwiper] = useState<any>(undefined);

  const [currentSlide, setCurrentSlide] = useState(0);
  return (
    <Box {...props}>
      <Flex
        w="full"
        maxW="md"
        mx="auto"
        my={8}
        justify="space-between"
        style={{ gap: 16 }}
      >
        <SlideButton iconDirection="left" onClick={() => swiper?.slidePrev()} />

        <Flex align="center" style={{ gap: 8 }}>
          {swiper &&
            (swiper.pagination.bullets as any[]).map((_, key) => (
              <Box
                key={key}
                h={4}
                w={4}
                rounded="full"
                bg={currentSlide === key ? "coral" : "lightgray"}
                as="button"
                onClick={() => swiper?.slideTo(key)}
              />
            ))}
        </Flex>

        <SlideButton
          iconDirection="right"
          onClick={() => swiper?.slideNext()}
        />
      </Flex>
      <Carousel
        breakpoints={breakpoints}
        spaceBetween={30}
        modules={[Pagination]}
        pagination={{ clickable: true }}
        onInit={(swiper) => {
          setSwiper(swiper);
        }}
        onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
      >
        {cards.map((card, key) => (
          <SwiperSlide key={key}>{card}</SwiperSlide>
        ))}
      </Carousel>
    </Box>
  );
}
