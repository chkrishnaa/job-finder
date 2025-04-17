import { ActionIcon, Button, Divider } from "@mantine/core";
import { IconBookmark } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { card, jobDesc, requiredSkills } from "../Data/JobDescriptionData";
//@ts-ignore
import DOMPurify from "dompurify";

export default function JobDescription() {
  const data = DOMPurify.sanitize(jobDesc);
  return (
    <div className="w-2/3 border border-mine-shaft-600 rounded-2xl py-10 px-5">
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <div className="p-3 mr-3 bg-mine-shaft-800 rounded-xl">
            <img className="h-14" src="Google.png" alt="" />
          </div>
          <div className="flex flex-col gap-1">
            <div className="font-semibold text-2xl">Software Engineer III</div>
            <div className="text-lg text-mine-shaft-300">
              Google &bull; 3 days ago &bull; 13,000+ Applicats
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-end justify-between">
          <IconBookmark className="text-bright-sun-400 cursor-pointer" />

          <Link to="/apply-job" className="py-2">
            <Button variant="light" color="brightSun.4" size="sm">
              Apply
            </Button>
          </Link>
        </div>
      </div>
      <Divider my="xl" />
      <div className="flex justify-around">
        {card.map((item: any, index: number) => (
          <div key={index} className="flex flex-col items-center gap-1">
            <ActionIcon
              variant="light"
              radius="xl"
              aria-label="Settings"
              className="!h-12 !w-12"
              color="brightSun.4"
            >
              <item.icon
                style={{ width: "70%", height: "70%" }}
                stroke={1.5}
                className="h-4/5 w-4/5"
              />
            </ActionIcon>
            <div className="text-sm text-mine-shaft-300">{item.name}</div>
            <div className="font-semibold">{item.value}</div>
          </div>
        ))}
      </div>
      <Divider my="xl" />
      <div>
        <div className="text-xl font-semibold mb-5">Required Skills</div>
        <div className="flex flex-wrap gap-2">
          {requiredSkills.map((skill: any, index: number) => (
            <ActionIcon
              key={index}
              variant="light"
              radius="xl"
              aria-label="Settings"
              className="!h-fit !w-fit !text-sm !font-medium"
              color="brightSun.4"
              p="xs"
            >
              {skill}
            </ActionIcon>
          ))}
        </div>
      </div>
      <Divider my="xl" />
      <div
        className="[&_h4]:text-xl [&_*]:text-mine-shaft-300 [&_li]:marker:text-bright-sun-400  [&_li]:mb-1 [&_h4]:mt-5 [&_h4]:mb-2 [&_h4]:font-semibold [&_h4]:text-mine-shaft-200 [&_p]:text-justify"
        dangerouslySetInnerHTML={{ __html: data }}
      ></div>
      <Divider my="xl" />
      <div>
        <div className="text-xl font-semibold mb-5">About the Company</div>
        <div className="flex justify-between mb-3">
          <div className="flex gap-2 items-center">
            <div className="p-3 mr-2 bg-mine-shaft-800 rounded-xl">
              <img className="h-8" src="Google.png" alt="" />
            </div>
            <div className="flex flex-col">
              <div className="font-medium text-lg">Google</div>
              <div className=" text-mine-shaft-300">13K+ Employees</div>
            </div>
          </div>

          <Link to="" className="py-2">
            <Button variant="light" color="brightSun.4">
              Company Page
            </Button>
          </Link>
        </div>
        <div className="text-mine-shaft-300 text-justify">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates,
          pariatur, quod commodi, iste officia aperiam amet rerum delectus
          doloribus eius perferendis. Harum eligendi nesciunt quod voluptatum
          debitis omnis fugit iste! Alias enim natus, eligendi architecto
          perspiciatis maiores laudantium. Nostrum natus dicta, esse numquam
          mollitia sequi sit adipisci aspernatur magnam at. Voluptas, ipsum
          deleniti. Voluptas molestiae ratione dolorum dolorem error tenetur.
          Magni veritatis laboriosam pariatur. Quasi inventore quas pariatur
          odio dolorum saepe maiores earum vero sint cupiditate, aspernatur
          facere ipsa nam explicabo voluptates! Amet, harum ad dicta reiciendis
          rem eveniet corrupti.
        </div>
      </div>
    </div>
  );
}
