import UserImage from '../images/userImage.jpg';

const UserProfileImage = () => {
  return (
    <div className="flex justify-center">
      <img
        src={UserImage}
        alt="User"
        className="rounded-full border-4 border-gray-400 w-1/2 object-cover"
      />
    </div>
  );
};

export default UserProfileImage;
