import React from 'react'
import PostedJobs from '../PostedJobs/PostedJobs';
import PostedJobDescription from '../PostedJobs/PostedJobDescription';

export default function PostedJobsPage() {
  return (
    <div className='min-h-[100vh] bg-mine-shaft-950 font-["poppins"] px-3'>
      
      <div className="flex p-5">
        {/* <Company />
        <Divider orientation="vertical" className="mx-5" />
        <SimilarCompanies /> */}
        <PostedJobs/>
        <PostedJobDescription/>
      </div>
    </div>
  );
}
