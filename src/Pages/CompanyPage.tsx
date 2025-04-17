import { Button } from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

export default function CompanyPage() {
  return (
    <div className='min-h-[100vh] bg-mine-shaft-950 font-["poppins"] px-3'>
      <Link to="/find-talents" className="my-5 inline-block">
        <Button
          leftSection={<IconArrowLeft size={20} />}
          variant="light"
          color="brightSun.4"
        >
          Back
        </Button>
      </Link>
      <div className="flex justify-between p-5">

      </div>
    </div>
  );
}
