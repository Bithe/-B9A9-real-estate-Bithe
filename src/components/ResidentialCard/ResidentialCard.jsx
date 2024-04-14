import { useState } from "react";

const ResidentialCard = ({ residential }) => {
  const { image, segment, status, price, location, description, facilities, area } = residential;

  return (
    <div className="border rounded-2xl p-8 ">
      <div className="">
        <img
          src={image}
          alt=""
          className="object-cover rounded-xl w-full mb-4 h-60 sm:h-96 dark:bg-gray-500"
        />
        <h2 className="mb-1 text-xl font-semibold">{segment} </h2>
      </div>

      {/* STATUS */}
      <div className="flex flex-wrap justify-between py-6 items-center">
        <div className="space-x-2">
          <button
            aria-label="Share this post"
            type="button"
            className=" text-center"
          >
            <h3 className="font-bold">Status: {status}</h3>
          </button>
        </div>
        <div className="flex space-x-2 text-sm dark:text-gray-600">
          <button type="button" className="flex items-center p-1 space-x-1.5">
            <span className="font-bold">{price}</span>
          </button>
        </div>
      </div>

      <div>
        {" "}
        <h2 className="  font-semibold">{location}</h2>
        <p className="text-sm dark:text-gray-600">
         {description}
        </p>
      </div>

      {/*  */}
      <div className="p-6 space-y-2">
        <span className="text-xs dark:text-gray-600 flex lg:text-base lg:font-medium text-[#23BE0A]">
        <div className="py-2">
            <ul className="list-disc text-[#878787] text-lg font-normal">
              {facilities.map((facility, index) => (
                <li key={index}>{facility}</li>
              ))}
              <li>{area}</li>
            </ul>
          </div>
        </span>

        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline lg:text-2xl lg:font-bold "></h3>

        <hr className="border border-dashed " />

        <div className="flex justify-between">
          <p className="flex  items-center justify-between gap-2"></p>
        </div>
      </div>
    </div>
  );
};

export default ResidentialCard;
