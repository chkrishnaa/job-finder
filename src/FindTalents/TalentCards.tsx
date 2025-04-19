import { IconCalendarMonth, IconHeart, IconMapPin } from "@tabler/icons-react";
import { Avatar, Button, Divider, Modal, Text } from "@mantine/core";
import { Link } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";
import { DateInput, TimeInput } from "@mantine/dates";
import { useRef, useState } from "react";

export default function TalentCards(props: any) {
  const [opened, { open, close }] = useDisclosure(false);
  const [value, setValue] = useState<Date | null>(null);
  const ref = useRef<HTMLInputElement>(null);

  return (
    <div className="bg-mine-shaft-900 p-4 flex flex-col gap-4 rounded-xl hover:shadow-[0_0_5px_1px_yellow] !shadow-bright-sun-400">
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <div className="p-2 bg-mine-shaft-800 rounded-full">
            <Avatar size="lg" src={props.image} alt="" />
          </div>
          <div>
            <div className="font-semibold">{props.name}</div>
            <div className="text-sm text-mine-shaft-300">
              {props.role} &bull; {props.company}
            </div>
          </div>
        </div>
        <IconHeart className="text-mine-shaft-300 cursor-pointer" />
      </div>
      <div className="flex gap-2">
        {props.topSkills?.map((skill: any, index: any) => (
          <div
            key={index}
            className="p-2 py-1 bg-mine-shaft-800 rounded-lg text-bright-sun-400 text-xs font-semibold"
          >
            {skill}
          </div>
        ))}
      </div>
      <Text
        className="!text-xs text-justify !text-mine-shaft-300"
        lineClamp={4}
      >
        {props.about}
      </Text>
      <Divider size="xs" color="mineShaft.7" />

      {props.invited ? (
        <div className="flex gap-1 text-mine-shaft-200 text-sm items-center [&>svg]:!text-bright-sun-400">
          <IconCalendarMonth stroke={1.5} className="mr-2"/>Interview: August 27, 2024 10:00 AM
        </div>
      ) : (
        <div className="flex justify-between">
          <div className="font-semibold text-mine-shaft-200">
            {props.expectedCtc}
          </div>
          <div className="flex gap-1 text-xs text-mine-shaft-400 items-center">
            <IconMapPin className="h-5 w-5" stroke={1.5} /> {props.location}
          </div>
        </div>
      )}

      <Divider size="xs" color="mineShaft.7" />
      <div className="flex [&>*]:w-1/2 [&>*]:p-1">
        {!props.invited && (
          <>
            <Link to="/talent-profile">
              <Button variant="outline" color="brightSun.4" fullWidth>
                View Profile
              </Button>
            </Link>
            <div>
              {props.applicant ? (
                <Button
                  onClick={open}
                  rightSection={<IconCalendarMonth className="h-5 w-5" />}
                  variant="light"
                  color="brightSun.4"
                  fullWidth
                >
                  Schedule
                </Button>
              ) : (
                <Button variant="light" color="brightSun.4" fullWidth>
                  Message
                </Button>
              )}
            </div>
          </>
        )}
        {props.invited && (
          <>
            <div>
              <Button variant="outline" color="brightSun.4" fullWidth>
                Accept
              </Button>
            </div>
            <div>
              {" "}
              <Button variant="light" color="brightSun.4" fullWidth>
                Reject
              </Button>
            </div>
          </>
        )}
      </div>
      <Modal
        opened={opened}
        onClose={close}
        title="Schedule Interview"
        centered
        color="brightSun.4"
      >
        <div className="flex flex-col gap-5 text-mine-shaft-500">
          <DateInput
            value={value}
            onChange={setValue}
            clearable
            minDate={new Date()}
            valueFormat="YYYY MMM DD"
            label="Date"
            placeholder="Enter Data"
          />
          <TimeInput
            label="Time"
            ref={ref}
            onClick={() => ref.current?.showPicker()}
          />
          <Button variant="light" color="brightSun.4" fullWidth>
            Schedule
          </Button>
        </div>
      </Modal>
    </div>
  );
}
