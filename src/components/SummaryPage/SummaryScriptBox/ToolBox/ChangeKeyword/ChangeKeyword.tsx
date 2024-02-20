import { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import TransformationIcon from '@/assets/icons/transformation.svg?react';

import GuestLoginModal from '@/components/modals/GuestLoginModal';

import { summaryTransformModalState } from '@/stores/modal';
import { userTokenState } from '@/stores/user';

import ChangeKeywordModal from './ChangeKeywordModal';

type Props = {
  onChange: (keyword: string) => void;
};

const ChangeKeyword = (props: Props) => {
  const userToken = useRecoilValue(userTokenState);
  const [isTransformModalOpen, setIsTransformModalOpen] = useRecoilState(
    summaryTransformModalState,
  );
  const [isGuestModalOpen, setIsGuestModalOpen] = useState(false);

  const handleClickButton = () => {
    if (userToken) {
      setIsTransformModalOpen(true);
    } else {
      setIsGuestModalOpen(true);
    }
  };

  return (
    <>
      <span className="icon-button" onClick={handleClickButton}>
        <TransformationIcon width={18} height={18} />
      </span>

      {isTransformModalOpen && (
        <ChangeKeywordModal
          onClose={() => setIsTransformModalOpen(false)}
          {...props}
        />
      )}

      {isGuestModalOpen && (
        <GuestLoginModal
          title="수정사항 저장 안내"
          description={
            <>
              로그인하지 않으면 수정한 부분을 나중에 다시 확인할 수 없어요!
              <br />
              로그인하고 수정내용을 저장해요
            </>
          }
          onClose={() => setIsGuestModalOpen(false)}
        />
      )}
    </>
  );
};

export default ChangeKeyword;
