import { Divider } from "@mantine/core";
import PostJob from "../PostJob/PostJob";

export default function PostJobPage() {
  return (
    <div className='min-h-[100vh] bg-mine-shaft-950 font-["poppins"] px-3'>
      <div className="flex justify-between p-5">
        <PostJob />
      </div>
    </div>
  );
}
