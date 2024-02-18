import useOutsideClick from '@/hooks/useOutsideClick';
import {
  BlurBackground,
  CommonCategoryContainer,
  CommonCloseButton,
} from '@/styles/modals/common.style';
import CloseSvg from '@/assets/icons/close.svg?react';
import * as SuccessAddCategoryStyles from '@/styles/modals/SuccessAddCategoryModal.style';
import { ICommonModalProps } from 'types/modal';
import FileImage from '@/assets/file.png';

interface ISuccessAddCategory extends ICommonModalProps {
  to: string;
}

const SuccessAddCategoryModal = ({
  categoryName,
  setCategoryName,
  setIsSuccessAddCategoryModalOpen,
  to,
}: ISuccessAddCategory) => {
  const onCloseModal = () => {
    setIsSuccessAddCategoryModalOpen(false);
    setCategoryName('');
  };

  const [successAddCategoryModalRef] =
    useOutsideClick<HTMLDivElement>(onCloseModal);
  return (
    <BlurBackground>
      <CommonCategoryContainer ref={successAddCategoryModalRef}>
        <CommonCloseButton onClick={onCloseModal}>
          <CloseSvg width={21.42} height={21.42} />
        </CommonCloseButton>
        <SuccessAddCategoryStyles.Image src={FileImage} alt="완료 이미지" />
        <SuccessAddCategoryStyles.Title>
          <SuccessAddCategoryStyles.HighlightTitle>
            '{categoryName}'
          </SuccessAddCategoryStyles.HighlightTitle>{' '}
          생성 완료!
        </SuccessAddCategoryStyles.Title>
        <SuccessAddCategoryStyles.GoToCategoryButton
          to={`/category/${to}`}
          onClick={onCloseModal}
        >
          보러가기
        </SuccessAddCategoryStyles.GoToCategoryButton>
      </CommonCategoryContainer>
    </BlurBackground>
  );
};

export default SuccessAddCategoryModal;
