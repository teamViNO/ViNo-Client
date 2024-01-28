import useOutsideClick from '@/hooks/useOutsideClick';
import {
  CommonAddCategoryContainer,
  CommonCloseButton,
} from '@/styles/modals/common.style';
import CloseSvg from '@/assets/icons/close.svg?react';
import * as SuccessAddCategoryStyles from '@/styles/modals/SuccessAddCategoryModal.style';
import { ICommonModalProps } from 'types/modal';

interface ISubFolderProps {
  categoryID: number;
  name: string;
  topCategoryID: number;
}

interface IFolderProps {
  categoryID: number;
  name: string;
  topCategoryID: null;
  subFolders: ISubFolderProps[];
}

interface ISuccessAddCategory extends ICommonModalProps {
  folders: IFolderProps[];
  setFolders: React.Dispatch<React.SetStateAction<IFolderProps[]>>;
  isSubAdded: boolean;
  setIsSubAdded: React.Dispatch<React.SetStateAction<boolean>>;
  topId: number;
}

const SuccessAddCategoryModal = ({
  folders,
  setFolders,
  categoryName,
  setCategoryName,
  setIsSuccessAddCategoryModalOpen,
  isSubAdded,
  setIsSubAdded,
  topId,
}: ISuccessAddCategory) => {
  const onCloseModal = () => {
    setIsSuccessAddCategoryModalOpen(false);
    setCategoryName('');
  };

  const [successAddCategoryModalRef] =
    useOutsideClick<HTMLDivElement>(onCloseModal);

  const handleGoToCategory = () => {
    if (isSubAdded) {
      const index = folders.findIndex((folder) => folder.categoryID === topId);
      folders[index].subFolders.push({
        name: categoryName,
        categoryID: folders[index].categoryID,
        topCategoryID: topId,
      });
    } else {
      setFolders([
        ...folders,
        {
          categoryID: folders.length + 1,
          name: categoryName,
          topCategoryID: null,
          subFolders: [],
        },
      ]);
    }
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
          isSubAdded ? `/category/${topId}` : `/category/${folders.length + 1}`
        }
        onClick={handleGoToCategory}
      >
        보러가기
      </SuccessAddCategoryStyles.GoToCategoryButton>
    </CommonAddCategoryContainer>
  );
};

export default SuccessAddCategoryModal;
