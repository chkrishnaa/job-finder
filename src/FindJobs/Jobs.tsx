import React from "react";
import { Sort } from "./Sort";
import JobCards from "./JobCards";
import { jobList } from "../Data/JobData";

export default function Jobs() {
  return (
    <div className="p-5">
      <div className="flex justify-between">
        <div className="text-2xl font-semibold">Recommended Jobs</div>
        <Sort />
      </div>
      <div className="mt-10 flex flex-wrap gap-5 justify-center">
        {jobList.map((job, index) => (
          <JobCards key={index} {...job} />
        ))}
      </div>
    </div>
  );
}
