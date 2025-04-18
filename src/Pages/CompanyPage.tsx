import { Button, Divider } from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import Company from '../CompanyProfile/Company';
import SimilarCompanies from '../CompanyProfile/SimilarCompanies';

export default function CompanyPage() {
  const navigate = useNavigate();
  return (
    <div className='min-h-[100vh] bg-mine-shaft-950 font-["poppins"] px-3'>
      <Button
        leftSection={<IconArrowLeft size={20} />}
        variant="light"
        color="brightSun.4"
        onClick={() => navigate(-1)}
        my="md"
      >
        Back
      </Button>
      <div className="flex justify-between p-5">
        <Company />
        <Divider orientation="vertical" className="mx-5" />
        <SimilarCompanies />
      </div>
    </div>
  );
}