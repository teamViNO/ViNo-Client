import {
  CommonCategoryContainer,
  CommonCloseButton,
} from '@/styles/modals/common.style';
import CloseSvg from '@/assets/icons/close.svg?react';
import useOutsideClick from '@/hooks/useOutsideClick';
import * as DeleteCategoryStyles from '@/styles/layout/sideBar/DeleteCategory.style';

import WastebasketImage from '@/assets/wastebasket.png';

interface IDeleteCategoryProps {
  setIsDeleteModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onDeleteClick: () => void;
}

const DeleteCategory = ({
  setIsDeleteModalOpen,
  onDeleteClick,
}: IDeleteCategoryProps) => {
  const onCloseModal = () => {
    setIsDeleteModalOpen(false);
  };
  const [deleteCategoryModalRef] =
    useOutsideClick<HTMLDivElement>(onCloseModal);
  return (
    <CommonCategoryContainer ref={deleteCategoryModalRef}>
      <CommonCloseButton onClick={onCloseModal}>
        <CloseSvg width={21.42} height={21.42} />
      </CommonCloseButton>
      <img src={WastebasketImage} alt="삭제 아이콘" />
      <DeleteCategoryStyles.ModalTitle>
        카테고리 삭제
      </DeleteCategoryStyles.ModalTitle>
      <DeleteCategoryStyles.ModalMessage>
        해당 파일을 삭제하면 그 안에 영상도 함께 삭제됩니다
      </DeleteCategoryStyles.ModalMessage>
      <DeleteCategoryStyles.ModalMessage>
        정말 삭제하시겠어요?
      </DeleteCategoryStyles.ModalMessage>
      <DeleteCategoryStyles.DeleteButton onClick={onDeleteClick}>
        그래도 삭제하기
      </DeleteCategoryStyles.DeleteButton>
      <DeleteCategoryStyles.CancelButton onClick={onCloseModal}>
        유지하기
      </DeleteCategoryStyles.CancelButton>
    </CommonCategoryContainer>
  );
};

export default DeleteCategory;
