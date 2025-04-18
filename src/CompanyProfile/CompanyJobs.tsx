import { jobList } from '../Data/JobData';
import JobCards from '../FindJobs/JobCards';

export default function CompanyJobs() {
  return (
    <div className="mt-10 grid [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))] gap-3 justify-center">
      {jobList.map((job, index) => index<8 && (
        <JobCards key={index} {...job} />
      ))}
    </div>
  );
}
