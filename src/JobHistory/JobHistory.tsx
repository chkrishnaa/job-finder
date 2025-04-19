import { Tabs } from "@mantine/core";
import { jobList } from "../Data/JobData";
import JobHistoryCards from "./JobHistoryCards";

export default function JobHistory() {
  return (
    <div className="">
      <div className="text-2xl font-semibold mb-5">Job History</div>
      <div>
        <Tabs variant="outline" radius="lg" defaultValue="applied">
          <Tabs.List className="[&_button]:!text-lg font-semibold mb-5 [&_button[data-active='true']]:!text-bright-sun-400 [&_button[data-active='true']]:!bg-mine-shaft-900">
            <Tabs.Tab value="applied">Applied</Tabs.Tab>
            <Tabs.Tab value="saved">Saved</Tabs.Tab>
            <Tabs.Tab value="offered">Offered</Tabs.Tab>
            <Tabs.Tab value="interviewing">Interviewing</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="applied">
            <div className="mt-10 grid [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))] gap-5">
              {jobList.map((job, index) => (
                <JobHistoryCards key={index} {...job} applied></JobHistoryCards>
              ))}
            </div>
          </Tabs.Panel>
          <Tabs.Panel value="saved">
            <div className="mt-10 grid [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))] gap-5">
              {jobList.map((job, index) => (
                <JobHistoryCards key={index} {...job} saved></JobHistoryCards>
              ))}
            </div>
          </Tabs.Panel>
          <Tabs.Panel value="offered">
            <div className="mt-10 grid [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))] gap-5">
              {jobList.map((job, index) => (
                <JobHistoryCards key={index} {...job} offered></JobHistoryCards>
              ))}
            </div>
          </Tabs.Panel>
          <Tabs.Panel value="interviewing">
            <div className="mt-10 grid [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))] gap-5">
              {jobList.map((job, index) => (
                <JobHistoryCards
                  key={index}
                  {...job}
                  interviewing
                ></JobHistoryCards>
              ))}
            </div>
          </Tabs.Panel>
        </Tabs>
      </div>
    </div>
  );
}
