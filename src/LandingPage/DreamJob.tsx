import React from "react";
import { TextInput, Avatar } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

export default function DreamJob() {
  return (
    <div className="flex items-center px-16 pt-10">
      <div className="flex flex-col w-[45%] gap-5">
        <div className="text-6xl font-bold leading-tight text-mine-shaft-100 [&>span]:text-bright-sun-400">
          Find your <span>Dream Job</span> with us
        </div>
        <div className="text-lg text-mine-shaft-200">
          Good life begins with a good Company. Start explore thousants of Jobs
          in one place.
        </div>
        <div className="flex gap-3 mt-5">
          <TextInput
            className="bg-mine-shaft-900 rounded-lg p-1 px-2 text-mine-shaft-100 [&_input]:!text-mine-shaft-100 border border-transparent hover:bg-mine-shaft-700 hover:border-bright-sun-400 transition-colors duration-500 ease-in-out"
            placeholder="Software Engineer"
            label="Job Title"
            variant="unstyled"
          />
          <TextInput
            className="bg-mine-shaft-900 rounded-lg p-1 px-2 text-mine-shaft-100 [&_input]:!text-mine-shaft-100 border border-transparent hover:bg-mine-shaft-700 hover:border-bright-sun-400 transition-colors duration-500 ease-in-out"
            placeholder="Full Time"
            label="Job Type"
            variant="unstyled"
          />
          <div className="flex justify-center items-center h-full w-20 bg-bright-sun-400 text-mine-shaft-100 rounded-lg p-2 hover:bg-bright-sun-500 cursor-pointer hover:transition-colors duration-200 ease-in-out">
            <IconSearch className="h-[85%] w-[85%]"></IconSearch>
          </div>
        </div>
      </div>
      <div className="w-[55%] flex justify-center items-center">
        <div className="w-[35rem] flex justify-center items-center relative">
          <img src="Boy.png" alt="Boy"></img>

          <div className="absolute -right-10 w-fit top-[50%] border-bright-sun-400 border rounded-lg p-2 backdrop-blur-md">
            <div className="text-center mb-1 text-sm text-mine-shaft-100">
              10K+ got Job
            </div>
            <Avatar.Group spacing="sm">
              <Avatar src="AvatarImages/avatar-1.png" radius="xl" />
              <Avatar src="AvatarImages/avatar-2.png" radius="xl" />
              <Avatar src="AvatarImages/avatar-3.png" radius="xl" />
              <Avatar src="AvatarImages/avatar-4.png" radius="xl" />
              <Avatar radius="xl">+5</Avatar>
            </Avatar.Group>
          </div>

          <div className="absolute -left-5 w-fit top-[28%] border-bright-sun-400 border rounded-lg p-2 backdrop-blur-md gap-3 flex flex-col">
            <div className="flex gap-2 items-center">
              <div className="w-10 h-10 p-1 bg-mine-shaft-900 rounded-lg">
                <img src="Google.png" alt="" />
              </div>
              <div className="text-sm text-mine-shaft-100">
                <div>Software Engineer</div>
                <div className="text-mine-shaft-200 text-xs">New York</div>
              </div>
            </div>
            <div className="flex justify-around gap-2 text-mine-shaft-200 text-xs">
              <span>1 day ago</span>
              <span>120 Applications</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
