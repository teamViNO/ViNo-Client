import logoSrc from '@/assets/logo.png';
import UpIcon from '@/assets/icons/up.svg?react';

import ExampleComponent from '@/components/example';

const HomePage = () => {
  return (
    <div>
      <img src={logoSrc} alt="Vi.No Logo" style={{ width: 100 }} />
      <ExampleComponent />
      Home Page
      <UpIcon />
    </div>
  );
};

export default HomePage;
