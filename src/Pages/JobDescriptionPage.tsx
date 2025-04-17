import { Button, Divider } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import Profile from "../TalentProfile/Profile";
import { profile } from "../Data/TalentData";
import RecommendTalents from "../TalentProfile/RecommendTalents";
import JobDescription from "../JobDescription/JobDescription";
import RecommendedJobs from "../JobDescription/RecommendedJobs";

export default function JobDesriptionPage() {
  return (
    <div className='min-h-[100vh] bg-mine-shaft-950 font-["poppins"] px-3'>
      <Link to="/find-jobs" className="my-5 inline-block">
        <Button
          leftSection={<IconArrowLeft size={20} />}
          variant="light"
          color="brightSun.4"
        >
          Back
        </Button>
      </Link>
      <div className="flex justify-between p-5">
        <JobDescription/>
        <Divider orientation="vertical" className="mx-5" />
        <RecommendedJobs/>
      </div>
    </div>
  );
}
