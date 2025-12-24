import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./imageCarousel.css";

export const ImageCarousel = (props: React.PropsWithChildren<{}>) => {
  const carouselProps = {
    showArrows: true,
    showStatus: false,
    infiniteLoop: true,
    dynamicHeight: true,
    showIndicators: false,
    renderArrowNext: (clickHandler: any, hasNext: boolean) => {
      return (
        hasNext && (
          <button
            onClick={clickHandler}
            className={"arrow-icon arrow-icon-right"}
          >
            <i className={`fa fa-solid fa-chevron-right `}></i>
          </button>
        )
      );
    },
    renderArrowPrev: (clickHandler: any, hasNext: boolean) => {
      return (
        hasNext && (
          <button
            onClick={clickHandler}
            className={"arrow-icon arrow-icon-left"}
          >
            <i className={`fa fa-solid fa-chevron-left`}></i>
          </button>
        )
      );
    },
  };
  return (
    <Carousel className={"carousel"} {...carouselProps}>
      {React.Children.toArray(props.children)}
    </Carousel>
  );
};
