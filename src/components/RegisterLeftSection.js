import { Link } from 'react-router-dom';
import LoginatorSign from './LoginatorSign';
import WelcomeSign from './WelcomeSign';
import RegisterForm from './RegisterForm';

const RegisterLeftSection = () => {
  return (
    <div className="col-span-6 xl:col-span-3 p-4">
      <LoginatorSign />
      <WelcomeSign currentPage="register" />
      <RegisterForm />

      <div className="text-center">
        <Link
          to="/"
          className="text-sm text-gray-500 hover:text-gray-700 font-semibold cursor-pointer"
        >
          Sudah punya akun? Ayo masuk
        </Link>
      </div>
    </div>
  );
};

export default RegisterLeftSection;
