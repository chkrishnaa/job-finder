import { Button, Divider } from "@mantine/core";
import { IconBriefcase, IconMapPin } from "@tabler/icons-react";
import React from "react";
import ExperienceCard from "./ExperienceCard";
import CertificationCard from "./CertificationCard";

export default function Profile(props: any) {
  return (
    <div className="w-2/3">
      <div className="relative">
        <img className="w-full h-50 rounded-t-2xl" src="Banner1.jpg" alt="" />
        <img
          className="h-48 w-48 rounded-full -bottom-1/3 left-3 absolute border-mine-shaft-950 border-8"
          src="/AvatarImages/avatar-3.png"
          alt=""
        />
      </div>
      <div className="px-3 mt-16">
        <div className="text-3xl font-semibold flex justify-between">
          {props.name}
          <Button variant="light" color="brightSun.4">
            Message
          </Button>
        </div>
        <div className="flex text-xl flex items-center">
          {" "}
          <IconBriefcase className="h-5 w-5" stroke={1.5} />
          {props.role} &bull; {props.company}
        </div>
        <div className="text-lg flex gap-1 items-center text-mine-shaft-300">
          <IconMapPin className="h-5 w-5" stroke={1.5} /> {props.location}
        </div>
      </div>
      <Divider mx="xs" my="xl" />
      <div className="px-3">
        <div className="text-2xl font-semibold mb-3">About</div>
        <div className="text-sm text-mine-shaft-300 text-justify">
          {props.about}
        </div>
      </div>
      <Divider mx="xs" my="xl" />
      <div className="px-3">
        <div className="text-2xl font-semibold mb-3">Skills</div>
        <div className="flex flex-wrap gap-2">
          {props.skills.map((skill: any, index: any) => (
            <div
              key={index}
              className="bg-mine-shaft-900 text-sm font-medium rounded-3xl text-bright-sun-400 px-3 py-1"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
      <Divider mx="xs" my="xl" />
      <div className="px-3">
        <div className="text-2xl font-semibold mb-5">Experience</div>
        <div className="flex flex-col gap-8">
          {props.experience.map((experience: any, index: any) => (
            <ExperienceCard key={index} {...experience} />
          ))}
        </div>
      </div>
      <Divider mx="xs" my="xl" />
      <div className="px-3">
        <div className="text-2xl font-semibold mb-5">Certifications</div>
        <div className="flex flex-col gap-8">
          {props.certifications.map((certification: any, index: any) => (
            <CertificationCard key={index} {...certification} />
          ))}
        </div>
      </div>
    </div>
  );
}
