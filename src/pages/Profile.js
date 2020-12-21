import { useEffect } from 'react';
import UserProfileImage from '../components/UserProfileImage';
import WelcomeSign from '../components/WelcomeSign';
import UserProfileInfo from '../components/UserProfileInfo';
import LogoutButton from '../components/LogoutButton';

const Profile = () => {
  useEffect(() => {
    document.title = 'Profile';
  });

  const dummyData = {
    firstName: 'Kai',
    lastName: 'Havertz',
    email: 'kai@havertz.com',
    username: 'kaihavertz29',
  };

  return (
    <div className="col-span-6 flex flex-col justify-start items-center p-4">
      <UserProfileImage />
      <WelcomeSign currentPage="profile" userFirstName={dummyData.firstName} />
      <UserProfileInfo userInfo={dummyData} />
      <LogoutButton />
    </div>
  );
};

export default Profile;
