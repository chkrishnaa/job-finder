import { Link } from "react-router-dom";
import { talents } from "../Data/TalentData";
import TalentCards from "../FindTalents/TalentCards";
import { Button } from "@mantine/core";

export default function RecommendTalents() {
  return (
    <div>
      <div className="text-xl font-semibold mb-5">Recommended Talents</div>
      <div className="grid grid-template-columns:1fr gap-5 max-w-[400px]">
        {talents.map(
          (talent, index) =>
            index < 5 && <TalentCards key={index} {...talent} />
        )}
      </div>
      <Link to="/find-talents" className="my-4 inline-block w-[100%]">
        <Button variant="light" color="brightSun.4" fullWidth>View More Talents</Button>
      </Link>
    </div>
  );
}
