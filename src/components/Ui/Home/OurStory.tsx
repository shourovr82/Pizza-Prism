import hotelImage from "@/Assets/Homepage/hotelPhoto.jpg";
import Image from "next/image";

const OurStory = () => {
  return (
    <section className="py-10 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10 items-center responsive-section">
      <div className="max-lg:flex justify-center">
        <Image
          className="rounded-3xl max-lg:object-contain"
          width={530}
          height={500}
          src={hotelImage}
          alt=""
        />
      </div>
      <div className="space-y-5 max-lg:flex max-lg:flex-col max-lg:items-center max-lg:text-center">
        <div>
          <h4 className="text-[#eb7e09] font-sans font-medium text-xl">
            ABOUT US
          </h4>
          <h3 className="text-4xl font-bold font-sans">This is Our Story</h3>
        </div>
        <p className="font-sans text-[#a9a5a1] font-[300]">
          {`  "Pizza Prism"`} came into existence in the vibrant tapestry of
          culinary history during the early 2010s, founded by childhood friends
          Mia Ramirez and Luca Marino. Fueled by their shared passions for
          gastronomy and visual arts, the restaurant opened its doors in 2012 as
          a revolutionary establishment that fused the science of taste with the
          art of presentation. With a commitment to pushing the boundaries of
          pizza craftsmanship, Mia and {`Luca's`} innovative approach blended
          locally sourced ingredients and culinary expertise to create a
          spectrum of visually stunning and delectably flavorful pizzas. Their
          pioneering concept not only redefined the pizza experience but also
          left an enduring influence on the intersection of food and art, making
          {`"Pizza Prism"`} a timeless beacon of culinary creativity.
        </p>
      </div>
    </section>
  );
};

export default OurStory;
