"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import { Tooltip } from "@nextui-org/react";

const HeroSection = () => {
  const [ref] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 15,
      spacing: 15,
    },
  });
  return (
    <section>
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold">Categories</h2>
          <p className="text-sm">10+ New Categories added this week</p>
        </div>
        <div>
          <Tooltip
            closeDelay={0}
            placement="top-end"
            showArrow={true}
            color="warning"
            content="View More Categories.."
          >
            <Link
              href="/dashboard/categories"
              className="flex items-center gap-2 hover:underline underline-offset-4 duration-300 ease-in-out transition-all text-sm"
            >
              <span>View More</span>
              <span className="bg-black/10 hover:bg-black/20 duration-300 ease-in-out transition-all rounded-full p-1.5">
                <FaChevronRight size={18} />
              </span>
            </Link>
          </Tooltip>
        </div>
      </div>
      {/* category Items */}
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
