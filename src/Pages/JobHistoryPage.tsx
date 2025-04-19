import React from 'react'
import JobHistory from '../JobHistory/JobHistory';

export default function JobHistoryPage() {
  return (
    <div className='min-h-[100vh] bg-mine-shaft-950 font-["poppins"] px-3'>
      <div className="flex p-5">
        {/* <Company />
        <Divider orientation="vertical" className="mx-5" />
        <SimilarCompanies /> */}
        {/* <PostedJobs />
        <PostedJobDescription /> */}
        <JobHistory/>
      </div>
    </div>
  );
}
