import { withRouter } from 'react-router-dom';

const LogoutButton = (props) => {
  const handleLogout = () => {
    return props.history.push('/');
  };

  return (
    <button
      onClick={handleLogout}
      className="w-1/2 md:w-1/4 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white font-semibold p-2 rounded"
    >
      Logout
    </button>
  );
};

export default withRouter(LogoutButton);
