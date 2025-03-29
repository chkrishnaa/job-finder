import React from 'react';
import { work } from '../Data/Data';

export default function Working() {
  return (
    <div className="mt-20 pb-5">
      <div className="text-4xl text-center font-semibold mb-3 text-mine-shaft-100 [&>span]:text-bright-sun-400">
        How it <span>Works</span> ?
      </div>
      <div className="text-lg mb-10 mx-auto text-mine-shaft-300 text-center w-1/2">
        Effortlessly navigate throught the process and land your Dream Job.
      </div>
      <div className="flex px-16 justify-between items-center">
        <div>
          <img className="w-[30rem]" src="/WorkingSectionImages/Girl.png" alt="girl" />
        </div>
        <div className='flex flex-col gap-10'>
          {work.map((task, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="p-3 bg-bright-sun-300 rounded-full">
                <img className="h-12 w-12" src="/Working/build.png" alt="" />
              </div>
              <div>
                <div className="text-mine-shaft-200 text-xl font-semibold">
                  {task.step}
                </div>
                <div className="text-mine-shaft-300">
                  {task.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
