import { Badge, Tabs } from "@mantine/core";
import React from "react";
import JobDescription from "../JobDescription/JobDescription";
import { talents } from "../Data/TalentData";
import TalentCards from "../FindTalents/TalentCards";

export default function PostedJobDescription() {
  return (
    <div className="mt-5 w-3/4 px-5">
      <div className="text-2xl font-semibold flex items-center">
        Software Engineer{" "}
        <Badge variant="light" ml="sm" color="brightSun.4" size="sm">
          Badge
        </Badge>
      </div>
      <div className="font-medium text-mine-shaft-300 mb-3">
        Maharashtra, India
      </div>
      <div>
        <Tabs variant="outline" radius="lg" defaultValue="overview">
          <Tabs.List className="[&_button]:!text-lg font-semibold mb-5 [&_button[data-active='true']]:!text-bright-sun-400 [&_button[data-active='true']]:!bg-mine-shaft-900">
            <Tabs.Tab value="overview">Overview</Tabs.Tab>
            <Tabs.Tab value="applicants">Applicants</Tabs.Tab>
            <Tabs.Tab value="invited">Invited</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="overview" className="[&>div]:w-full">
            <JobDescription edit />
          </Tabs.Panel>
          <Tabs.Panel value="applicants">
            <div className="mt-10 grid [grid-template-columns:repeat(auto-fit,minmax(384px,1fr))] gap-5 justify-center">
              {talents.map(
                (talent, index) =>
                  index < 6 && <TalentCards key={index} {...talent} posted />
              )}
            </div>
          </Tabs.Panel>
          <Tabs.Panel value="invited">
            Tab-3
          </Tabs.Panel>
        </Tabs>
      </div>
    </div>
  );
}
