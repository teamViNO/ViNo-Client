import logoSrc from '@/assets/logo.png';
import UpIcon from '@/assets/icons/up.svg?react';

import ExampleComponent from '@/components/example';

import { ExampleStyledComponent } from '@/styles/example';

const ExamplePage = () => {
  return (
    <div>
      <img src={logoSrc} alt="Vi.No Logo" style={{ width: 100 }} />
      <ExampleComponent />
      <UpIcon />
      <ExampleStyledComponent>Example Page</ExampleStyledComponent>
    </div>
  );
};

export default ExamplePage;
