import { companyData } from "../Data/CompanyData";

export default function CompanyAbout() {
  const company: { [key: string]: any } = companyData;

  return (
    <div className="Flex flex-col gap-5">
      {Object.keys(company).map(
        (key, index) =>
          key != "Name" && (
            <div key={index}>
              <div className="text-xl font-semibold mt-5">{key}</div>
              {key != "Website" && (
                <div className="text-sm text-mine-shaft-300 text-justify">
                  {key != "Specialties"
                    ? company[key]
                    : company[key].map((item: string, index: number) => (
                        <span key={index}> &bull; {item}<br/></span>
                      ))}
                </div>
              )}
              {key == "Website" && (
                <a
                  href={company[key]}
                  target="_blank"
                  className="text-sm hover:text-bright-sun-400 text-justify"
                >
                  {company[key]}
                </a>
              )}
            </div>
          )
      )}
    </div>
  );
}
