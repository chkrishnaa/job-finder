import { Divider, TextInput } from '@mantine/core';

export default function ApplyJob() {
  return (
    <div className='w-2/3 mx-auto'>
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
        <Divider my="xl"/>
        <div className='text-xl font-semibold mb-5'>Submit your Application</div>
        <div>
            <div className="flex gap-10 [&>*]:w-1/2">
                <TextInput label="Full Name" description="Enter your Full" />
            </div>
        </div>
      </div>
    </div>
  );
}
