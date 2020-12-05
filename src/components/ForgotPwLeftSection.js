import { Link } from 'react-router-dom';
import LoginatorSign from './LoginatorSign';
import WelcomeSign from './WelcomeSign';
import ForgotPwForm from './ForgotPwForm';

const ForgotPwLeftSection = () => {
  return (
    <div className="col-span-6 xl:col-span-3 p-4">
      <LoginatorSign />
      <WelcomeSign currentPage="forgotpassword" />
      <ForgotPwForm />

      <div className="text-center">
        <Link
          to="/"
          className="text-sm text-gray-500 hover:text-gray-700 font-semibold cursor-pointer"
        >
          Kembali ke halaman login
        </Link>
      </div>
    </div>
  );
};

export default ForgotPwLeftSection;
