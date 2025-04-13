import { IconBookmark, IconClockHour3 } from "@tabler/icons-react";
import { Divider, Text } from "@mantine/core";
import React from "react";

export default function JobCards() {
  return (
    <div className="bg-mine-shaft-900 p-4 w-72">
      <div className="flex justify-between">
        <div className="flex gap-2">
          <div className="p-2 bg-mine-shaft-800 rounded-md">
            <img className="h-7" src="Google.png" alt="" />
          </div>
          <div>
            <div>Product Designer</div>
            <div className="text-xs text-mine-shaft-300">
              Meta &#x2022; 25 Applicats
            </div>
          </div>
        </div>
        <IconBookmark />
      </div>
      <div className="flex gap-2 [&>div]:py-1 [&>div]:px-2 [&>div]:bg-mine-shaft-800 [&>div]:text-bright-sun-400 [&>div]:rounded-lg text-xs">
        <div>EntryLevel</div>
        <div>Full Time</div>
        <div>Remote</div>
      </div>
      <div>
        <Text
          className="text-sm text-justify text-mine-shaft-300"
          lineClamp={4}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis veniam
          eaque nam quia delectus consectetur laborum voluptatum, sunt quos
          tempora perspiciatis nemo eveniet sint accusamus velit ipsam aut fuga
          ratione?
        </Text>
        <Divider size="xs" color="mineShaft.7" />
      </div>
      <div className="flex justify-between">
        <div>&#8377; 24 LPA</div>
        <div className="flex gap-1 text-xs text-mine-shaft-400 items-center">
          <IconClockHour3 className="h-5 w-5" stroke={1.5} /> 12 days ago
        </div>
      </div>
    </div>
  );
}
