import { Card, CardFooter } from "@nextui-org/react";
import Image from "next/image";
import chefPhoto from "@/Assets/Homepage/chef.jpg";

const MeetOurGreatChefs = () => {
  return (
    <section className="responsive-section space-y-10 py-10">
      <div className="flex flex-col space-y-3 items-center">
        <h3 className="uppercase text-[#F78908] text-lg">Our Chefs</h3>
        <h2 className="font-bold text-3xl">Meet Our Great Chefs</h2>
        <p className="lg:w-[50%] font-medium text-center text-sm ">
          Are you pizza lover? If your answer is yes then this restaurant is for
          you. We serve pizza and food for reasonable prices and cooked by
          talented Chefs
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {[1, 2, 3, 4].map((item) => (
          <Card
            key={Math.random()}
            isFooterBlurred
            radius="lg"
            className="border-none"
          >
            <Image
              alt="Woman listing to music"
              className="w-full object-contain"
              height={500}
              width={500}
              src={chefPhoto}
            />
            <CardFooter className=" before:bg-white/10 border-white/20 border-1 overflow-hidden py-1.5 absolute before:rounded-xl rounded-large bottom-3 w-[calc(100%_-_50px)] items-center  shadow-small ml-6 z-10 flex flex-col">
              <p className="text-sm text-white/80 ">Jenny Wilson</p>
              <span className="text-tiny text-white/50">Senior Chef</span>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default MeetOurGreatChefs;
