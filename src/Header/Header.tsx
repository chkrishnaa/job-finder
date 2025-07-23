import {
  IconDeviceMobileSearch,
  IconBell,
  IconSettings,
} from "@tabler/icons-react";
import { Avatar, Divider, Indicator } from "@mantine/core";
import NavLinks from "./NavLinks";
import { useLocation } from "react-router-dom";
import ProfileMenu from "./ProfileMenu";
// import '@mantine/core/styles.css';

export default function Header() {
  const location = useLocation();
  return location.pathname != "/sign-up" && location.pathname != "/login" ? (
    <>
      <div className="w-full bg-mine-shaft-950 h-20 text-white flex justify-between px-6 items-center bg-mine-shaft-950 font-['poppins']">
        <div className="flex gap-1 items-center text-bright-sun-400">
          <IconDeviceMobileSearch
            className="h-10 w-10"
            stroke={2}
          ></IconDeviceMobileSearch>
          <div className="text-3xl font-semibold">JobFinder</div>
        </div>
        <NavLinks></NavLinks>
        <div className="flex gap-5 items-center">
          <ProfileMenu/>
          <div className="bg-mine-shaft-900 p-1.5 rounded-full">
            <IconSettings stroke={1.5}></IconSettings>
          </div>
          <div className="bg-mine-shaft-900 p-1.5 rounded-full">
            <Indicator color="brightSun.4" offset={6} size={10} processing>
              <IconBell stroke={1.5}></IconBell>
            </Indicator>
          </div>
        </div>
      </div>
      <Divider size="xs" />
    </>
  ) : (
    <></>
  );
}