import React from "react";
import { talents } from "../Data/TalentData";
import TalentCards from "../FindTalents/TalentCards";

export default function RecommendTalents() {
  return (
    <div>
      <div className="text-xl font-semibold mb-5">Recommended Talents</div>
      <div className="flex flex-col flex-wrap gap-5">
        {talents.map(
          (talent, index) =>
            index < 5 && <TalentCards key={index} {...talent} />
        )}
      </div>
    </div>
  );
}
