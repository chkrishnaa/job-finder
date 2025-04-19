import { Tabs } from "@mantine/core";
import { activeJobs } from "../Data/PostedJobsData";
import PostedJobCards from "./PostedJobCards";

export default function PostedJobs() {
  return (
    <div className="w-1/4">
      <div className="text-2xl font-semibold mb-5">Jobs Posted</div>
      <div>
        <Tabs autoContrast variant="pills" defaultValue="active">
          <Tabs.List className='[&_button[aria-selected="false"]]:bg-mine-shaft-900 font-semibold'>
            <Tabs.Tab value="active">Active [4]</Tabs.Tab>
            <Tabs.Tab value="draft">Draft [1]</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="active">
            <div className="flex flex-col gap-5 mt-10">
              {activeJobs.map(
                (item, index) =>
                  index < 10 && <PostedJobCards key={index} {...item} />
              )}
            </div>
          </Tabs.Panel>
          <Tabs.Panel value="draft">
            <div className="flex flex-col gap-5 mt-10">
              {activeJobs.map(
                (item, index) =>
                  index < 5 && <PostedJobCards key={index} {...item} />
              )}
            </div>
          </Tabs.Panel>
        </Tabs>
      </div>
    </div>
  );
}
