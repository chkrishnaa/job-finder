import { Button } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { Link } from "react-router-dom";

export default function ApplyJobPage() {
  return (
    <div className='min-h-[100vh] bg-mine-shaft-950 font-["poppins"] px-3'>
      <div className="flex justify-between p-5">
        <Link to="/apply-job" className="my-5 inline-block">
          <Button
            leftSection={<IconArrowLeft size={20} />}
            variant="light"
            color="brightSun.4"
          >
            Back
          </Button>
        </Link>
        <ApplyJobPage/>
      </div>
    </div>
  );
}
