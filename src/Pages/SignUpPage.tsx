import { IconDeviceMobileSearch } from '@tabler/icons-react';
import SignUp from '../SignUpLogin/SignUp';
import Login from '../SignUpLogin/Login';
import { useLocation } from 'react-router-dom';

export default function SignUpPage() {

  const location =useLocation();
  return (
    <div className='min-h-[100vh] bg-mine-shaft-950 font-["poppins"] overflow-hidden'>
      <div
        className={`w-[100vw] h-[100vh] transition-all ease-in-out duration-1000 flex [&>*]:flex-shrink-0 ${location.pathname == "/sign-up" ? "-translate-x-1/2" : "translate-x-0"}`}
      >
        <Login />
        <div
          className={`w-1/2 h-full bg-mine-shaft-900 transition-all ease-in-out duration-1000 ${location.pathname == "/sign-up" ? "rounded-r-[200px]" : "rounded-l-[200px]"} bg-mine-shaft-900 flex items-center flex-col justify-center gap-5`}
        >
          <div className="flex gap-1 items-center text-bright-sun-400">
            <IconDeviceMobileSearch
              className="h-16 w-16"
              stroke={2.5}
            ></IconDeviceMobileSearch>
            <div className="text-6xl font-semibold">JobFinder</div>
          </div>
          <div className="text-2xl text-mine-shaft-200 font-semibold">
            Find a Jobs made for you
          </div>
        </div>
        <SignUp />
      </div>
    </div>
  );
}
