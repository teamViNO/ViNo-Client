import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import { kakaoLoginAPI } from '@/apis/social-account';

import { userTokenState } from '@/stores/user';

const SocialAccountPage = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const setUserToken = useSetRecoilState(userTokenState);

  const callAPI = async (code: string) => {
    try {
      const { token } = (await kakaoLoginAPI(code)).data.result;

      setUserToken(token);
      navigate('/');
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
