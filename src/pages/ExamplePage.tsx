import { useRecoilState } from 'recoil';

import logoSrc from '@/assets/logo.png';
import UpIcon from '@/assets/icons/up.svg?react';

import ExampleComponent from '@/components/example';

import { exampleState } from '@/stores/example';

import { ExampleStyledComponent } from '@/styles/example';

const ExamplePage = () => {
  const [exampleRecoil] = useRecoilState(exampleState);

  return (
    <div>
      {exampleRecoil}
      <img src={logoSrc} alt="Vi.No Logo" style={{ width: 100 }} />
      <ExampleComponent />
      <UpIcon />
      <ExampleStyledComponent>Example Page</ExampleStyledComponent>
    </div>
  );
};

export default ExamplePage;
