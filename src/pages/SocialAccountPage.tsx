import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { kakaoLoginAPI } from '@/apis/social-account';

const SocialAccountPage = () => {
  const navigate = useNavigate();
  const { search } = useLocation();

  const callAPI = async (code: string) => {
    try {
      console.log(await kakaoLoginAPI(code));
    } catch (e) {
      console.error(e);
      navigate('/sign-in');
    }
  };

  useEffect(() => {
    const params = new URLSearchParams(search);
    const code = params.get('code');

    if (!code) {
      navigate('/sign-in');
      return;
    }

    callAPI(code);
  });

  return <div />;
};

export default SocialAccountPage;
