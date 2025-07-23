
import Profile from '../Profile/Profile';
import { profile } from '../Data/TalentData';

export default function ProfilePage() {
  return (
    <div className='min-h-[100vh] bg-mine-shaft-950 font-["poppins"]'>
        <Profile {...profile}/>
    </div>
  );
}
