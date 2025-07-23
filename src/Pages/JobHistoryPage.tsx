import JobHistory from '../JobHistory/JobHistory';

export default function JobHistoryPage() {
  return (
    <div className='min-h-[100vh] bg-mine-shaft-950 font-["poppins"] px-3'>
      <div className="flex p-5">
        <JobHistory/>
      </div>
    </div>
  );
}
