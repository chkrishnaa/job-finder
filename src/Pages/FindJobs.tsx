import { Divider } from "@mantine/core";
import SearchBar from "../FindJobs/SearchBar"


export default function FindJobs() {
  return (
    <div className='min-h-[100vh] bg-mine-shaft-950 font-["poppins"]'>
      <Divider size="xs" mx="md"/>
      <SearchBar />
      <div></div>
    </div>
  );
}
