import { useRecoilState } from 'recoil';

import TransformationIcon from '@/assets/icons/transformation.svg?react';

import { summaryTransformModalState } from '@/stores/modal';

import ChangeKeywordModal from './ChangeKeywordModal';

type Props = {
  onChange: (keyword: string) => void;
};

const ChangeKeyword = (props: Props) => {
  const [isOpen, setIsOpen] = useRecoilState(summaryTransformModalState);

  return (
    <>
      <span className="icon-button" onClick={() => setIsOpen(true)}>
        <TransformationIcon width={18} height={18} />
      </span>

      {isOpen && (
        <ChangeKeywordModal onClose={() => setIsOpen(false)} {...props} />
      )}
    </>
  );
};

export default ChangeKeyword;
