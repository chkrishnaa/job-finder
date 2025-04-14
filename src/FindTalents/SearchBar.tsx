import React, { useState } from "react";
import { MultiInputs } from "../FindJobs/MultiInputs";
import { Divider, Input, RangeSlider } from "@mantine/core";
import { searchFields } from "../Data/TalentData";
import { IconUserCircle } from "@tabler/icons-react";

export default function SearchBar() {
  const [value, setValue] = useState<[number, number]>([1, 100]);

  return (
    <div className="flex px-5 py-8 items-center !text-mine-shaft-100">
        <div className="flex item-center">
            <div><IconUserCircle className="text-bright-sun-400 bg-mine-shaft-900 rounded-full p-1 mr-2" size={20} /></div>
            <Input className="[&_input]:!placeholder-mine-shaft-300" variant="unstyled" placeholder="Search Talents"/>
        </div>
      {searchFields.map((item, index) => (
        <>
          <div key={index} className="w-1/5">
            <MultiInputs {...item} />
          </div>
          <Divider mr="xs" size="xs" orientation="vertical" />
        </>
      ))}
      <div className="w-1/5 [&_.mantine-Slider-label]:translate-y-10">
        <div className="flex text-sm justify-between">
          <div className="font-semibold">Salary</div>
          <div className="font-semibold">
            &#8377;{value[0]} LPA - &#8377;{value[1]} LPA
          </div>
        </div>
        <RangeSlider
          color="brightSun.4"
          size="xs"
          value={value}
          onChange={setValue}
        />
      </div>
    </div>
  );
}
