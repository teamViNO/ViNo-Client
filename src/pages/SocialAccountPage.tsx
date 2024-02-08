import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { socialAccountAPI } from '@/apis/user';

const SocialAccountPage = () => {
  const { search } = useLocation();

  const callAPI = async (code: string) => {
    try {
      console.log(await socialAccountAPI(code));
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    const params = new URLSearchParams(search);
    const code = params.get('code');

    if (!code) {
      return;
    }

    callAPI(code);
  }, [search]);

  return <div />;
};

export default SocialAccountPage;
