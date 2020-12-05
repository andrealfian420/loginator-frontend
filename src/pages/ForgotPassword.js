import { useEffect } from 'react';
import ForgotPwLeftSection from '../components/ForgotPwLeftSection';
import ImageRightSection from '../components/ImageRightSection';

const ForgotPassword = () => {
  useEffect(() => {
    document.title = 'Forgot Password';
  });

  return (
    <>
      <ForgotPwLeftSection />
      <ImageRightSection />
    </>
  );
};

export default ForgotPassword;
