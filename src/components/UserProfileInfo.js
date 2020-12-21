const UserProfileInfo = ({ userInfo }) => {
  return (
    <div className="w-full mt-10 mb-5">
      <div className="flex flex-col xl:flex-row mb-2">
        <div className="w-full xl:w-1/2 mr-2">
          <span className="block text-gray-600 text-sm font-bold mb-2">
            First Name
          </span>
          <input
            type="text"
            className="shadow appearance-none border-2 rounded w-full py-2 px-3 bg-gray-200 text-gray-700 leading-tight focus:outline-none"
            value={userInfo.firstName}
            disabled
          />
        </div>
        <div className="w-full xl:w-1/2 mt-2 xl:mt-0">
          <span className="block text-gray-600 text-sm font-bold mb-2">
            Last Name
          </span>
          <input
            type="text"
            className="shadow appearance-none border-2 rounded w-full py-2 px-3 bg-gray-200 text-gray-700 leading-tight focus:outline-none"
            value={userInfo.lastName}
            disabled
          />
        </div>
      </div>

      <div className="flex flex-col xl:flex-row mb-2">
        <div className="w-full xl:w-1/2 mr-2">
          <span className="block text-gray-600 text-sm font-bold mb-2">
            Email
          </span>
          <input
            type="text"
            className="shadow appearance-none border-2 rounded w-full py-2 px-3 bg-gray-200 text-gray-700 leading-tight focus:outline-none"
            value={userInfo.email}
            disabled
          />
        </div>
        <div className="w-full xl:w-1/2 mt-2 xl:mt-0">
          <span className="block text-gray-600 text-sm font-bold mb-2">
            Username
          </span>
          <input
            type="text"
            className="shadow appearance-none border-2 rounded w-full py-2 px-3 bg-gray-200 text-gray-700 leading-tight focus:outline-none"
            value={userInfo.username}
            disabled
          />
        </div>
      </div>
    </div>
  );
};

export default UserProfileInfo;
