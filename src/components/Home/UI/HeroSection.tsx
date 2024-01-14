"use client";
import { Button } from "@nextui-org/react";
import { IoPizza } from "react-icons/io5";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState } from "react";
const names = [
  "Leonard Morgan",
  "Jasmine Peters",
  "Penelope Buckland",
  "Leonard Piper",
  "Stephen Dickens",
  "Adam Walker",
  "Richard Rampling",
  "Lucas McDonald",
  "Neil Quinn",
  "Dorothy Nolan",
];

const images = [
  "https://images.unsplash.com/photo-1590004953392-5aba2e72269a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
  "https://images.unsplash.com/photo-1590004845575-cc18b13d1d0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
  "https://images.unsplash.com/photo-1590004987778-bece5c9adab6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
  "https://images.unsplash.com/photo-1590005176489-db2e714711fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
];
const HeroSection = () => {
  const slidesPerView = 1;
  const numberSlides = slidesPerView + 1;
  const [slidesDetails, setSlidesDetails] = useState<any>(null);
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    loop: {
      min: 0,
      max: names.length - 1,
    },
    range: {
      align: true,
      min: 0,
      max: names.length - 1,
    },
    mode: "free-snap",
    detailsChanged: (s) => {
      setSlidesDetails(s.track.details.slides);
    },
    slides: {
      number: numberSlides,
      perView: slidesPerView,
    },
  });
  return (
    <div className="w-full h-full    ">
      {/* <div className="  flex flex-col space-y-10 items-center h-full justify-center lg:w-[50%]">
        <div className=" w-full">
          <h1 className="text-[#e9ebeb]   text-start max-md:text-6xl lg:text-6xl leading-tight font-fantasy">
            <span>{`It's`}</span> Not Just A Pizza, <span>{`It's`}</span>
            <br /> An
            <span className="text-[#e57c0c]"> Experience</span>
          </h1>
        </div>
        <div className="space-y-10">
          <p className=" font-sans  text-[#c5c6c6]  ">
            Come and get some work done at our family friendly <br /> co work space and private offices with full kitchen while your kids play at our
            playground
          </p>
          <Button className="neon-loader w-full lg:w-[9rem]">
            <span className="text-white font-semibold text-normal">Order Now</span>
          </Button>
        </div>
        <div className=" w-full flex gap-10 max-md:justify-between max-md:px-5   xl:pt-5">
          <div className="flex gap-3">
            <p className="text-[#e4e5e5] border-2 border-[#e4e5e5]  p-2.5 rounded-xl">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
              </svg>
            </p>
            <div className="">
              <p className="text-[#cb6f0c] font-semibold">2000+</p>
              <span className="text-[#a2a3a4] text-sm">Customer</span>
            </div>
          </div>
          <div className="flex gap-3">
            <p className="text-[#e4e5e5] border-2 border-[#e4e5e5]  p-2.5 rounded-xl">
              <IoPizza size={25} />
            </p>
            <div className="">
              <p className="text-[#cb6f0c] font-semibold">1500+</p>
              <span className="text-[#a2a3a4] text-sm">Delivery</span>
            </div>
          </div>
        </div>
      </div> */}
      <div className="keen-slider" ref={sliderRef}>
        {[...Array(numberSlides).keys()].map((idx) => {
          return (
            <div key={idx} className="keen-slider__slide border-4">
              <div>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas laboriosam aut voluptatum odit nostrum eveniet non impedit odio
                numquam, reiciendis in velit ratione reprehenderit?
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HeroSection;
