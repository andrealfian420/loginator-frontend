import { useEffect } from 'react';
import LoginLeftSection from '../components/LoginLeftSection';
import ImageRightSection from '../components/ImageRightSection';

const Login = () => {
  useEffect(() => {
    document.title = 'Login';
  });

  return (
    <>
      <LoginLeftSection />
      <ImageRightSection />
    </>
  );
};

export default Login;
