import { Divider } from "@mantine/core";
import SearchBar from "../FindJobs/SearchBar";
import Jobs from "../FindJobs/Jobs";

export default function FindJobsPage() {
  return (
    <div className='min-h-[100vh] bg-mine-shaft-950 font-["poppins"]'>
      <SearchBar />
      <Divider size="xs" mx="md" />
      <Jobs />
    </div>
  );
}
