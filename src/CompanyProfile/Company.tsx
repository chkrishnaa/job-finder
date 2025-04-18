import { Avatar, Divider, Tabs } from "@mantine/core";
import { IconBriefcase, IconMapPin } from "@tabler/icons-react";
import CompanyAbout from "./CompanyAbout";
import CompanyJobs from "./CompanyJobs";
import CompanyEmployees from "./CompanyEmployees";

export default function Company() {
  return (
    <div className="w-3/4 border border-mine-shaft-600 rounded-2xl pb-5">
      <div className="relative">
        <img className="w-full h-50 rounded-t-2xl" src="Banner1.jpg" alt="" />
        <img
          className="h-36 w-36 rounded-3xl left-3 absolute border-mine-shaft-950 bg-mine-shaft-950 border-8 -bottom-1/4"
          src="/Google.png"
          alt=""
        />
      </div>
      <div className="px-5 mt-12">
        <div className="text-3xl font-semibold flex justify-between">
          Google
          <Avatar.Group>
            <Avatar src="AvatarImages/avatar-1.png" />
            <Avatar src="AvatarImages/avatar-2.png" />
            <Avatar src="AvatarImages/avatar-3.png" />
            <Avatar src="AvatarImages/avatar-4.png" />
            <Avatar size="md">+10K</Avatar>
          </Avatar.Group>
        </div>
        <div className="flex text-xl items-center">
          <IconBriefcase className="h-5 w-5" stroke={2} />
          <span className="ml-3">Software Engineer III &bull; Google</span>
        </div>
        <div className="text-lg flex gap-1 items-center text-mine-shaft-300">
          <IconMapPin className="h-5 w-5" stroke={2} />
          <span className="ml-3">Maharashtra, India</span>
        </div>
        <Divider my="xl" />
        <div>
          <Tabs variant="outline" radius="lg" defaultValue="about">
            <Tabs.List className="[&_button]:!text-lg font-semibold mb-5 [&_button[data-active='true']]:!text-bright-sun-400 [&_button[data-active='true']]:!bg-mine-shaft-900">
              <Tabs.Tab value="about">About</Tabs.Tab>
              <Tabs.Tab value="jobs">Jobs</Tabs.Tab>
              <Tabs.Tab value="employees">Employees</Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="about">
              <CompanyAbout />
            </Tabs.Panel>
            <Tabs.Panel value="jobs">
              <CompanyJobs />
            </Tabs.Panel>
            <Tabs.Panel value="employees">
              <CompanyEmployees />
            </Tabs.Panel>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
