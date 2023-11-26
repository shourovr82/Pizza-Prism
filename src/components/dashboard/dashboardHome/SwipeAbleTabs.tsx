"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const HeroSection = () => {
  const [ref] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 15,
      spacing: 15,
    },
  });
  return (
    <section className="mx-5 border">
      <div ref={ref} className="keen-slider p-5 ">
        <div className="keen-slider__slide  border text-center py-5 shadow-lg rounded-full w-full">
          1
        </div>
        <div className="keen-slider__slide  border text-center py-5 shadow-lg rounded-full">
          2
        </div>
        <div className="keen-slider__slide number-slide3 border text-center py-5 shadow-lg rounded-full">
          3
        </div>
        <div className="keen-slider__slide number-slide4 border text-center py-5 shadow-lg rounded-full">
          4
        </div>
        <div className="keen-slider__slide  border text-center py-5 shadow-lg rounded-full">
          5
        </div>
        <div className="keen-slider__slide border text-center py-5 shadow-lg rounded-full">
          6
        </div>
        <div className="keen-slider__slide border text-center py-5 shadow-lg rounded-full">
          6
        </div>
        <div className="keen-slider__slide border text-center py-5 shadow-lg rounded-full">
          6
        </div>
        <div className="keen-slider__slide border text-center py-5 shadow-lg rounded-full">
          6
        </div>
        <div className="keen-slider__slide border text-center py-5 shadow-lg rounded-full">
          6
        </div>
        <div className="keen-slider__slide border text-center py-5 shadow-lg rounded-full">
          6
        </div>
        <div className="keen-slider__slide border text-center py-5 shadow-lg rounded-full">
          6
        </div>
        <div className="keen-slider__slide border text-center py-5 shadow-lg rounded-full">
          6
        </div>
        <div className="keen-slider__slide border text-center py-5 shadow-lg rounded-full">
          6
        </div>
        <div className="keen-slider__slide border text-center py-5 shadow-lg rounded-full">
          6
        </div>
        <div className="keen-slider__slide border text-center py-5 shadow-lg rounded-full">
          6
        </div>
        <div className="keen-slider__slide border text-center py-5 shadow-lg rounded-full">
          6
        </div>
        <div className="keen-slider__slide border text-center py-5 shadow-lg rounded-full">
          6
        </div>
        <div className="keen-slider__slide border text-center py-5 shadow-lg rounded-full">
          6
        </div>
        <div className="keen-slider__slide border text-center py-5 shadow-lg rounded-full">
          6
        </div>
        <div className="keen-slider__slide border text-center py-5 shadow-lg rounded-full">
          6
        </div>
        <div className="keen-slider__slide border text-center py-5 shadow-lg rounded-full">
          6
        </div>
        <div className="keen-slider__slide border text-center py-5 shadow-lg rounded-full">
          6
        </div>
        <div className="keen-slider__slide border text-center py-5 shadow-lg rounded-full">
          6
        </div>
        <div className="keen-slider__slide border text-center py-5 shadow-lg rounded-full">
          6
        </div>
        <div className="keen-slider__slide border text-center py-5 shadow-lg rounded-full">
          6
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
