import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React from "react";
import { useForm } from "react-hook-form";

type Inputs = {
  searchTerm: string;
};
const UserSection = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const handleSearchOrder = (data: any) => {
    //
    console.log(data);
  };

  return (
    <div className="flex justify-between">
      <div className="">
        <h1 className="text-xl font-bold">
          Welcome, <span className="text-yellow-500">Salim Al Sazu</span>
        </h1>
        <p className="text-gray-400 font-medium text-sm">
          Friday, 25 August 2023
        </p>
      </div>
      <div className="flex  gap-x-4 pl-2 ml-3  self-stretch lg:gap-x-6 ">
        <form
          onSubmit={handleSubmit(handleSearchOrder)}
          className="relative flex  "
          action="#"
        >
          <label htmlFor="search-field" className="sr-only">
            Search
          </label>
          <MagnifyingGlassIcon
            className="pointer-events-none absolute  inset-y-0 left-2 h-full w-5 text-gray-400"
            aria-hidden="true"
          />
          <input
            {...register("searchTerm", { required: true })}
            id="search-field"
            className="block w-[350px] rounded-full border-0 py-0 pl-8 pr-3 font-medium text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm animate-fade-in opacity-100"
            placeholder="Search Order..."
            type="search"
            name="searchTerm"
          />
        </form>
      </div>
    </div>
  );
};

export default UserSection;
