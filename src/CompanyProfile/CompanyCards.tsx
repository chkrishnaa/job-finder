import { ActionIcon } from "@mantine/core";
import { IconExternalLink } from "@tabler/icons-react";

export default function CompanyCards(props: any) {
  return (
    <div className="w-full border border-mine-shaft-600 rounded-2xl p-5 hover:bg-mine-shaft-900 hover:border-bright-sun-400">
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <div className="p-2 bg-mine-shaft-800 rounded-md">
            <img className="h-7" src="Google.png" alt="" />
          </div>
          <div>
            <div className="font-semibold">{props.name}</div>
            <div className="text-xs text-mine-shaft-300">
              {props.employees} Employees
            </div>
          </div>
        </div>
        <ActionIcon color="brightSun.4" variant="subtle">
          <IconExternalLink />
        </ActionIcon>
      </div>
    </div>
  );
}
