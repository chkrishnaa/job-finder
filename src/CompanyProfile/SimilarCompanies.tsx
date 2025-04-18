import { similarCompanies } from '../Data/CompanyData';
import CompanyCards from './CompanyCards';

export default function SimilarCompanies() {
  return (
    <div className='w-1/4'>
      <div className="text-xl font-semibold mb-5">Similar Companies</div>
      <div className="grid grid-template-columns:1fr gap-5">
        {similarCompanies.map(
          (company, index) => index<10 &&
             <CompanyCards key={index} {...company} />
        )}
      </div>
      {/* <Link to="/find-talents" className="my-4 inline-block w-[100%]">
        <Button variant="light" color="brightSun.4" fullWidth>
          View More Talents
        </Button>
      </Link> */}
    </div>
  );
}
