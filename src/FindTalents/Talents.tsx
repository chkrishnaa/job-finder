import { Sort } from "../FindJobs/Sort";
import TalentCards from "./TalentCards";
import { talents } from "../Data/TalentData";
import { useState } from "react";
import { Group, Pagination } from "@mantine/core";
import {
  IconArrowBarToRight,
  IconArrowBarToLeft,
  IconArrowLeft,
  IconArrowRight,
  IconGripHorizontal,
} from "@tabler/icons-react";

function chunk<T>(array: T[], size: number): T[][] {
  if (!array.length) {
    return [];
  }
  const head = array.slice(0, size);
  const tail = array.slice(size);
  return [head, ...chunk(tail, size)];
}

const itemsPerPage = 12;
const paginatedTalents = chunk(talents, itemsPerPage);

export default function Talents() {
  const [activePage, setPage] = useState(1);
  const currentTalents = paginatedTalents[activePage - 1];

  return (
    <div className="p-5">
      <div className="flex justify-between">
        <div className="text-2xl font-semibold">Talents</div>
        <Sort />
      </div>
      <div className="mt-10 grid [grid-template-columns:repeat(auto-fit,minmax(384px,1fr))] gap-5 justify-center">
        {currentTalents.map((talent, index) => (
          <TalentCards key={index} {...talent} />
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <Pagination.Root autoContrast total={paginatedTalents.length} value={activePage} onChange={setPage}>
          <Group gap={7} mt="xl">
            <Pagination.First icon={IconArrowBarToLeft} />
            <Pagination.Previous icon={IconArrowLeft} />
            <Pagination.Items dotsIcon={IconGripHorizontal} />
            <Pagination.Next icon={IconArrowRight} />
            <Pagination.Last icon={IconArrowBarToRight} />
          </Group>
        </Pagination.Root>
      </div>
    </div>
  );
}
