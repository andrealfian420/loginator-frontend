import { Link } from 'react-router-dom';
import LoginatorSign from './LoginatorSign';
import WelcomeSign from './WelcomeSign';
import LoginForm from './LoginForm';

const LoginLeftSection = () => {
  return (
    <div className="col-span-6 xl:col-span-3 p-4">
      <LoginatorSign />
      <WelcomeSign currentPage="login" />
      <LoginForm />

      <div class="text-center">
        <Link
          to="/register"
          class="text-sm text-gray-400 hover:text-gray-700 font-semibold cursor-pointer"
        >
          Belum punya akun? Buat sekarang
        </Link>
      </div>
    </div>
  );
};

export default LoginLeftSection;
