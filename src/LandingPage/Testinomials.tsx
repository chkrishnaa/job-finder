import { Avatar, Rating } from '@mantine/core';
import { testinomials } from '../Data/Data';

export default function Testinomials() {
  return (
    <div className="mt-20 pb-5">
      <div className="text-4xl text-center font-semibold mb-3 text-mine-shaft-100 [&>span]:text-bright-sun-400">
        What <span>User</span> says about us ?
      </div>
      <div className="flex justify-evenly">
        {testinomials.map((testinomial, index) => (
          <div
            key={index}
            className="flex flex-col gap-3 w-[23%] border-bright-sun-400 border p-3 rounded-xl mt-15"
          >
            <div className="flex gap-2 items-center">
              <Avatar
                className="!h-16 !w-16"
                src="/AvatarImages/avatar-3.png"
                alt="it's me"
              />
              <div>
                <div className="text-lg text-mine-shaft-100 font-semibold">
                  {testinomial.name}
                </div>
                <Rating value={testinomial.rating} fractions={2} readOnly />
              </div>
            </div>
            <div className="text-sm text-mine-shaft-300 text-justify">
              {testinomial.testinomial}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
