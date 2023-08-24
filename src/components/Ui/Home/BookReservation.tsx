import { Button } from "@nextui-org/react";

const BookReservation = () => {
  return (
    <section className="responsive-section  h-[500px]">
      <div className="flex items-center justify-center lg:justify-start w-full md:w-[70%] lg:w-[50%] h-full">
        <div className=" bg-white w-[90%] md:w-[70%] pb-5 rounded-3xl">
          <div className="rounded-t-3xl p-3  flex justify-center bg-[#f78308]">
            <h2 className="text-xl font-semibold text-white">Reservation</h2>
          </div>
          <div className="flex flex-col items-center py-5">
            <h4 className="text-2xl font-bold">Opening Times</h4>
            <p
              className="text-[#f78308] text-sm
            "
            >
              Open 7 Days a Week
            </p>
          </div>
          <div className="w-[70%]  space-y-2 mx-auto">
            <div className="flex  justify-between">
              <h6 className="font-medium">Week Days</h6>
              <p className="font-medium">10:30 am - 9:00 pm</p>
            </div>
            <div className="border-dashed mx-auto border border-[#f78308]" />
            <div className="flex  justify-between">
              <h6 className="font-medium">Saturday</h6>
              <p className="font-medium">10:30 am - 9:00 pm</p>
            </div>{" "}
            <div className="border-dashed mx-auto border border-[#f78308]" />
            <div className="flex  justify-between ">
              <h6 className="font-medium ">Sunday</h6>
              <p className="font-medium">10:30 am - 9:00 pm</p>
            </div>
            <div className=" flex space-y-4 pt-5 flex-col items-center">
              <p className="text-[#aaa7a3] text-sm">
                Book your table for lunch or dinner
              </p>
              <Button className="book-now-btn px-10 text-white text-md font-semibold">
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookReservation;
