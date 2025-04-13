import { Button, TextInput } from "@mantine/core";

export default function Subscribe() {
  return (
    <div className="mt-20 flex items-center bg-mine-shaft-900 mx-20 py-2 rounded-xl justify-around">
      <div className="text-4xl w-2/5 text-center font-semibold mb-3 text-mine-shaft-100 [&>span]:text-bright-sun-400">
        Never Wants to Miss Any <span>Job News ?</span>
      </div>
      <div className="flex gap-4 rounded-xl bg-mine-shaft-700 px-3 py-2 items-center">
        <TextInput
          className="[&_button:text-mine-shaft-100 font-semibold"
          variant="unstyled"
          placeholder="Your@gmail.com"
          size="xl"
        />
        <Button className="!rounded-lg" color="brightSun.4" variant="filled" size="lg">
          Subscribe
        </Button>
      </div>
    </div>
  );
}
