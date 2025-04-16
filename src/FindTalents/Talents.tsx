import { Sort } from "../FindJobs/Sort";
import TalentCards from "./TalentCards";
import { talents } from "../Data/TalentData";
export default function Talents() {
  return (
    <div className="p-5">
      <div className="flex justify-between">
        <div className="text-2xl font-semibold">Talents</div>
        <Sort />
      </div>
      <div className="mt-10 grid [grid-template-columns:repeat(auto-fit,minmax(384px,1fr))] gap-5 justify-center">
        {talents.map((talent, index) => (
          <TalentCards key={index} {...talent} />
        ))}
      </div>
    </div>
  );
}
