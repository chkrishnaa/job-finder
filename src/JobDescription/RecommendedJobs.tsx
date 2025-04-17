import React from 'react'
import JobCards from '../FindJobs/JobCards';
import { jobList } from '../Data/JobData';
import { Link } from 'react-router-dom';
import { Button } from '@mantine/core';

export default function RecommendedJobs() {
  return (
    <div>
      <div className="text-xl font-semibold mb-5">Recommended Jobs</div>
      <div className="grid grid-template-columns:1fr gap-5 max-w-[400px]">
        {jobList.map(
          (job, index) =>
            index < 6 && <JobCards key={index} {...job} />
        )}
      </div>
      <Link to="/find-jobs" className="my-4 inline-block w-[100%]">
        <Button variant="light" color="brightSun.4" fullWidth>
          View More Jobs
        </Button>
      </Link>
    </div>
  );
}
