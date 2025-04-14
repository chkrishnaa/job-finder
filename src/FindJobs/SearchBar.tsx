import React, { useState } from 'react'
import { MultiInputs } from './MultiInputs'
import { dropdownData } from "../Data/JobData";
import { Divider, RangeSlider } from '@mantine/core';

export default function SearchBar() {
  const [value, setValue] = useState<[number, number]>([1, 100]);

  return (
    <div className="flex px-5 py-8">
      {dropdownData.map((item, index) => (
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
