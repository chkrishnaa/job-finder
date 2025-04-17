import { Button } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import ApplyJob from "../ApplyJob/ApplyJob";

export default function ApplyJobPage() {
  return (
    <div className='min-h-[100vh] bg-mine-shaft-950 font-["poppins"] px-3 pb-10'>
      <Link to="/job-description" className="my-5 inline-block">
        <Button
          leftSection={<IconArrowLeft size={20} />}
          variant="light"
          color="brightSun.4"
        >
          Back
        </Button>
      </Link>
      <ApplyJob/>
    </div>
  );
}
