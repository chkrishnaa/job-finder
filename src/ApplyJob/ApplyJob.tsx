import {
  Button,
  Divider,
  FileInput,
  LoadingOverlay,
  Notification,
  NumberInput,
  TextInput,
  Textarea,
  rem,
} from "@mantine/core";
import { IconCheck, IconPaperclip } from "@tabler/icons-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ApplyJob() {
  const [preview, setPreview] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [second, setSecond] = useState(5);
  const navigate = useNavigate();

  const handlePreview = () => {
    setPreview(!preview);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = () => {
    setSubmit(true);
    let x = 5;
    setInterval(() => {
      x--;
      setSecond(x);
      if (x == 0) {
        navigate("/find-jobs");
      }
    }, 1000);
  };

  return (
    <>
      <div className="w-2/3 mx-auto">
        <LoadingOverlay
          className="!fixed"
          visible={submit}
          zIndex={1000}
          overlayProps={{ radius: "sm", blur: 2 }}
          loaderProps={{ color: "brightSun.4", type: "bars" }}
        />

        <div className="flex justify-between">
          <div className="flex gap-2 items-center">
            <div className="p-3 mr-3 bg-mine-shaft-800 rounded-xl">
              <img className="h-14" src="Google.png" alt="" />
            </div>
            <div className="flex flex-col gap-1">
              <div className="font-semibold text-2xl">
                Software Engineer III
              </div>
              <div className="text-lg text-mine-shaft-300">
                Google &bull; 3 days ago &bull; 13,000+ Applicats
              </div>
            </div>
          </div>
          {/* <div className="flex flex-col gap-2 items-end justify-between">
          <IconBookmark className="text-bright-sun-400 cursor-pointer" />

          <Link to="/apply-job" className="py-2">
            <Button variant="light" color="brightSun.4" size="sm">
              Apply
            </Button>
          </Link>
        </div> */}
        </div>
        <Divider my="xl" />
        <div className="text-xl font-semibold mb-5">
          Submit your Application
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex gap-10 [&>*]:w-1/2">
            <TextInput
              readOnly={preview}
              variant={preview ? "unstyled" : "default"}
              className={`${preview ? "text-mine-shaft-300 font-semibold" : ""}`}
              label="Full Name"
              placeholder="Enter Full Name"
              withAsterisk
            />
            <TextInput
              readOnly={preview}
              variant={preview ? "unstyled" : "default"}
              className={`${preview ? "text-mine-shaft-300 font-semibold" : ""}`}
              label="Email"
              placeholder="Enter Email "
              withAsterisk
            />
          </div>
          <div className="flex gap-10 [&>*]:w-1/2">
            <NumberInput
              readOnly={preview}
              variant={preview ? "unstyled" : "default"}
              className={`${preview ? "text-mine-shaft-300 font-semibold" : ""}`}
              label="Phone Number"
              placeholder="Enter Phone Number"
              withAsterisk
              hideControls
              min={0}
              max={9999999999}
              clampBehavior="strict"
            />
            <TextInput
              readOnly={preview}
              variant={preview ? "unstyled" : "default"}
              className={`${preview ? "text-mine-shaft-300 font-semibold" : ""}`}
              label="Personal Project"
              placeholder="Enter Project URL"
              withAsterisk
            />
          </div>
          <FileInput
            readOnly={preview}
            variant={preview ? "unstyled" : "default"}
            className={`${preview ? "text-mine-shaft-300 font-semibold" : ""}`}
            leftSection={<IconPaperclip />}
            label="Upload Resume"
            placeholder="Your CV"
            withAsterisk
          />
          <Textarea
            readOnly={preview}
            variant={preview ? "unstyled" : "default"}
            className={`${preview ? "text-mine-shaft-300 font-semibold" : ""}`}
            placeholder="Type something about yourself..."
            label="Cover Letter"
            autosize
            minRows={8}
            maxRows={8}
            withAsterisk
          />
          {!preview && (
            <Button color="brightSun.4" variant="light" onClick={handlePreview}>
              Preview
            </Button>
          )}
          {preview && (
            <div className="flex gap-10 [&>*]:w-1/2">
              <Button
                fullWidth
                color="brightSun.4"
                variant="outline"
                onClick={handlePreview}
              >
                Edit
              </Button>
              <Button
                fullWidth
                color="brightSun.4"
                variant="light"
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </div>
          )}
        </div>
      </div>
      <Notification
        className={`z-[1001] border-bright-sun-400 -translate-y-20 !fixed top-0 left-[50%] translate-x-[-50%] transition duration-300 ease-in-out ${submit ? "translate-y-0" : "-translate-y-20"} `}
        icon={<IconCheck style={{ width: rem(20), height: rem(20) }} />}
        color="brightSun.4"
        withBorder
        title="Application Submitted !"
        mt="md"
        withCloseButton={false}
      >
        Redirecting to Find Jobs Section in {second} seconds ...
      </Notification>
    </>
  );
}
