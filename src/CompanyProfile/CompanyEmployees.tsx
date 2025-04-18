import { talents } from "../Data/TalentData";
import TalentCards from "../FindTalents/TalentCards";

export default function CompanyEmployees() {
  return (
    <div className="mt-10 grid [grid-template-columns:repeat(auto-fit,minmax(384px,1fr))] gap-5 justify-center">
      {talents.map((talent, index) => index<6 && (
        <TalentCards key={index} {...talent} />
      ))}
    </div>
  );
}
