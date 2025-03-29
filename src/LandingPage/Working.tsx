import { work } from '../Data/Data';
import { Avatar } from "@mantine/core";

export default function Working() {
  return (
    <div className="mt-20 pb-5">
      <div className="text-4xl text-center font-semibold mb-3 text-mine-shaft-100 [&>span]:text-bright-sun-400">
        How it <span>Works</span> ?
      </div>
      <div className="text-lg mb-10 mx-auto text-mine-shaft-300 text-center w-1/2">
        Effortlessly navigate throught the process and land your Dream Job.
      </div>
      <div className="flex px-16 gap-10 justify-between items-center">
        <div className="relative">
          <img
            className="w-[30rem]"
            src="/WorkingSectionImages/Girl.png"
            alt="girl"
          />
          <div className="w-36 flex flex-col top-[20%] absolute right-[15%] items-center gap-1 border border-bright-sun-400 rounded-xl py-3 px-1 backdrop-blur-md">
            <Avatar
              className="!h-16 !w-16"
              src="/AvatarImages/avatar-1.png"
              alt="it's me"
            />
            <div className="text-sm font-semibold text-mine-shaft-200 text-center">
              Complete your profile
            </div>
            <div className="text-xs text-mine-shaft-300">70% Completed!</div>
          </div>
        </div>

        <div className="flex flex-col gap-10">
          {work.map((task, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="p-3 bg-bright-sun-300 rounded-full">
                <img className="h-20 w-20" src={`WorkingSectionImages/${task.image}.png`} alt={task.image} />
              </div>
              <div>
                <div className="text-mine-shaft-200 text-xl font-semibold">
                  {task.step}
                </div>
                <div className="text-mine-shaft-300">{task.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
