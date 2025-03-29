import { Carousel } from "@mantine/carousel";
import React from "react";
import { jobCategory } from "../Data/Data";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";

export default function JobCategory() {
  
  const removeSpaces = (text: string): string => {
    return text.replace(/\s+/g, "");
  };

  const formatNumber = (num: number): string => {
    if (num >= 10000000) {
      return (num / 10000000).toFixed(1) + "Cr+";
    } else if (num >= 1000000) {
      return (num / 100000).toFixed(1) + "M+";
    } else if (num >= 100000) {
      return (num / 100000).toFixed(1) + "Lakh+";
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + "K+";
    } else {
      return Math.floor(num / 50) * 50 + "+"; // Round down to nearest 50
    }
  };

  return (
    <div className="mt-20 pb-5">
      <div className="text-4xl text-center font-semibold mb-3 text-mine-shaft-100 [&>span]:text-bright-sun-400">
        Browse <span>Job</span> Category
      </div>
      <div className="text-lg mx-auto text-mine-shaft-300 text-center w-1/2">
        Explore diverse job opportunities tailoured to your skills. Start your
        career journey today!
      </div>
      <Carousel
        className="focus-visible:[&_button]:!outline-none [&_button]:!bg-bright-sun-400 [&_button]:!border-none hover:[&_button]:!opacity-60 [&_button]:!opacity-0 [&_button:hover]:!opacity-100"
        slideSize="22%"
        slideGap="md"
        loop
        nextControlIcon={
          <IconArrowRight className="h-8 w-8 hover:opacity-100" />
        }
        previousControlIcon={
          <IconArrowLeft className="h-8 w-8 hover:opacity-100" />
        }
      >
        {jobCategory.map((category, index) => (
          <Carousel.Slide>
            <div className="flex flex-col items-center w-64 gap-2 border border-bright-sun-400 p-5 rounded-xl hover:cursor-pointer hover:shadow-[0_0_5px_2px_black] my-5 !shadow-bright-sun-300 transition duration-500 ease-in-out">
              <div className="p-2 bg-bright-sun-300 rounded-full">
                <img
                  className="h-8 w-8"
                  src={`/CategorySectionImages/${removeSpaces(category.name)}.png`}
                  alt={category.name}
                />
              </div>

              <div className="text-mine-shaft-100 text-xl font-semibold">
                {category.name}
              </div>
              <div className="text-sm text-center text-mine-shaft-300">
                {category.desc}
              </div>
              <div className="text-bright-sun-300 text-lg">
                {formatNumber(category.jobs)} Jobs posted
              </div>
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
}
