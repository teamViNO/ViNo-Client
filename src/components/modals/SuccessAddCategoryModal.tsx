import useOutsideClick from '@/hooks/useOutsideClick';
import {
  CommonAddCategoryContainer,
  CommonCloseButton,
} from '@/styles/modals/common.style';
import CloseSvg from '@/assets/icons/close.svg?react';
import * as SuccessAddCategoryStyles from '@/styles/modals/SuccessAddCategoryModal.style';

interface IFolderProps {
  id: number;
  name: string;
}

interface ISuccessAddCategory {
  folders: IFolderProps[];
  setFolders: React.Dispatch<React.SetStateAction<IFolderProps[]>>;
  categoryName: string;
  setCategoryName: React.Dispatch<React.SetStateAction<string>>;
  setIsSuccessAddCategoryModalOpen: React.Dispatch<
    React.SetStateAction<boolean>
  >;
}

const SuccessAddCategoryModal = ({
  folders,
  setFolders,
  categoryName,
  setCategoryName,
  setIsSuccessAddCategoryModalOpen,
}: ISuccessAddCategory) => {
  const onCloseModal = () => {
    //  모달 창 닫을 때 공백으로 바꿔주기
    setIsSuccessAddCategoryModalOpen(false);
    setCategoryName('');
  };

  const [successAddCategoryModalRef] =
    useOutsideClick<HTMLDivElement>(onCloseModal);

  const handleGoToCategory = () => {
    setFolders([...folders, { id: folders.length + 1, name: categoryName }]);
    onCloseModal();
  };
  return (
    <CommonAddCategoryContainer ref={successAddCategoryModalRef}>
      <CommonCloseButton onClick={onCloseModal}>
        <CloseSvg width={21.42} height={21.42} />
      </CommonCloseButton>
      <SuccessAddCategoryStyles.Image
        src="/src/assets/file.png"
        alt="완료 이미지"
      />
      <SuccessAddCategoryStyles.Title>
        <SuccessAddCategoryStyles.HighlightTitle>
          '{categoryName}'
        </SuccessAddCategoryStyles.HighlightTitle>{' '}
        생성 완료!
      </SuccessAddCategoryStyles.Title>
      <SuccessAddCategoryStyles.GoToCategoryButton
        to={`/category/${folders.length + 1}`}
        onClick={handleGoToCategory}
      >
        보러가기
      </SuccessAddCategoryStyles.GoToCategoryButton>
    </CommonAddCategoryContainer>
  );
};

export default SuccessAddCategoryModal;
