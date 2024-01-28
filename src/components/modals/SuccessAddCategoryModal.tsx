import useOutsideClick from '@/hooks/useOutsideClick';
import {
  CommonAddCategoryContainer,
  CommonCloseButton,
} from '@/styles/modals/common.style';
import CloseSvg from '@/assets/icons/close.svg?react';
import * as SuccessAddCategoryStyles from '@/styles/modals/SuccessAddCategoryModal.style';
import { ICommonModalProps } from 'types/modal';

interface IFolderProps {
  id: number;
  name: string;
}

interface ISuccessAddCategory extends ICommonModalProps {
  folders: IFolderProps[];
  setFolders: React.Dispatch<React.SetStateAction<IFolderProps[]>>;
  subFolders: IFolderProps[];
  setSubFolders: React.Dispatch<React.SetStateAction<IFolderProps[]>>;
  isSubAdded: boolean;
  setIsSubAdded: React.Dispatch<React.SetStateAction<boolean>>;
}

const SuccessAddCategoryModal = ({
  folders,
  setFolders,
  subFolders,
  setSubFolders,
  categoryName,
  setCategoryName,
  setIsSuccessAddCategoryModalOpen,
  isSubAdded,
  setIsSubAdded,
}: ISuccessAddCategory) => {
  const onCloseModal = () => {
    setIsSuccessAddCategoryModalOpen(false);
    setCategoryName('');
  };

  const [successAddCategoryModalRef] =
    useOutsideClick<HTMLDivElement>(onCloseModal);

  const handleGoToCategory = () => {
    isSubAdded
      ? setSubFolders([
          ...subFolders,
          { id: subFolders.length + 1, name: categoryName },
        ])
      : setFolders([
          ...folders,
          { id: folders.length + 1, name: categoryName },
        ]);
    setIsSubAdded(false);
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
        to={
          isSubAdded
            ? `/category/${folders.length}/${subFolders.length + 1}`
            : `/category/${folders.length + 1}`
        }
        onClick={handleGoToCategory}
      >
        보러가기
      </SuccessAddCategoryStyles.GoToCategoryButton>
    </CommonAddCategoryContainer>
  );
};

export default SuccessAddCategoryModal;
