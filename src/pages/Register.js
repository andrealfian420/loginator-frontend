import { useEffect } from 'react';
import RegisterLeftSection from '../components/RegisterLeftSection';
import ImageRightSection from '../components/ImageRightSection';

const Register = () => {
  useEffect(() => {
    document.title = 'Register';
  });

  return (
    <>
      <RegisterLeftSection />
      <ImageRightSection />
    </>
  );
};

export default Register;
