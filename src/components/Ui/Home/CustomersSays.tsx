import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";

import shafin from "@/Assets/Homepage/cheff.png";
import { BsFillStarFill } from "react-icons/bs";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";

const CustomersSays = () => {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const customers = [
    {
      name: "Shafinur Islam",
      photo: shafin,
      review:
        "Absolutely amazing experience! The food was exquisite, and the presentation was a work of art. The service was top-notch, and the ambiance added to the overall enjoyment. Will definitely be returning!",
      rating: 4,
    },
    {
      name: "Salim al Sazu",
      photo: shafin,
      review:
        "Delicious food and a great atmosphere. The flavors were well-balanced, and the staff was attentive. The only downside was that the dessert options were a bit limited. Overall, a satisfying dining experience.",
      rating: 4,
    },
    {
      name: "Mostafizur Rahman",
      photo: shafin,
      review:
        "Decent food, but the service was a bit slow. The appetizers were the highlight, while the main course felt a bit underwhelming. The restaurant's decor was charming, but improvements could be made.",
      rating: 4,
    },
    {
      name: "Hridoy Vai",
      photo: shafin,
      review:
        "A hidden gem! The staff went above and beyond to make our evening special. Each dish was bursting with flavor, and the wine pairing was exceptional. A perfect place for a celebration.",
      rating: 4,
    },
    {
      name: "Mashod Vai",
      photo: shafin,
      review:
        "Unfortunately, I was disappointed with my experience here. The food lacked seasoning, and the portion sizes were smaller than expected. The ambiance was nice, but the overall value was lacking.",
      rating: 4,
    },
  ];

  return (
    <section className="responsive-section grid max-lg:grid-cols-1 lg:grid-cols-7 items-center gap-20 py-20">
      <div className="space-y-3 max-lg:flex max-lg:flex-col max-lg:items-center text-center col-span-3">
        <div className="space-y-2">
          <h3 className="text-3xl font-bold font-sans">
            What Our Customers Say
          </h3>
          <h4 className="text-[#eb7e09] font-sans font-medium text-xl">
            We Have 50+ Happy Reviews
          </h4>
        </div>
        <p className="font-sans  mx-auto w-[80%] text-[#a9a5a1] ">
          Pizza Prism came into existence in the vibrant tapestry of culinary
          history during the early 2010s, founded by childhood friends Mia
          Ramirez and Luca Marino. Fueled by their shared passions for
        </p>
      </div>
      <div className="col-span-4">
        <Slider {...settings}>
          {/* {customers?.map((customer :any) => (
            <div key={Math.random()} className=" ">
              <div className="m-1 shadow-lg space-y-2 rounded-3xl cursor-move shadow-[#7c5b386c] p-4 h-full">
                <div className="relative flex justify-center">
                  <Image
                    className="w-20 -mt-10  rounded-full "
                    width={100}
                    height={100}
                    src={customer.photo}
                    alt=""
                  />
                </div>
                <div className="flex  flex-col items-center text-center space-y-2 w-full ">
                  <p className="text-sm text-[#cdcac8] w-full ">
                    {customer.review.slice(0, 150)}
                  </p>
                  <h2 className="font-semibold text-lg">{customer.name}</h2>
                  <p className="flex gap-2">
                    {Array.from({ length: customer.rating }).map((_, index) => (
                      <BsFillStarFill className="text-[#f89832]" key={index} />
                    ))}
                  </p>
                </div>
              </div>
            </div>
          ))} */}
        </Slider>
      </div>
    </section>
  );
};

export default CustomersSays;
