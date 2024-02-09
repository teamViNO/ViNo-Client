import useOutsideClick from '@/hooks/useOutsideClick';
import {
  BlurBackground,
  CommonCategoryContainer,
  CommonCloseButton,
} from '@/styles/modals/common.style';
import CloseSvg from '@/assets/icons/close.svg?react';
import * as SuccessAddCategoryStyles from '@/styles/modals/SuccessAddCategoryModal.style';
import { ICommonModalProps } from 'types/modal';
import { useRecoilState } from 'recoil';
import { categoryState } from '@/stores/category';

interface ISuccessAddCategory extends ICommonModalProps {
  isSubAdded: boolean;
  setIsSubAdded: React.Dispatch<React.SetStateAction<boolean>>;
  topId: number;
}

const SuccessAddCategoryModal = ({
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
  const [categories, setCategories] = useRecoilState(categoryState);

  const [successAddCategoryModalRef] =
    useOutsideClick<HTMLDivElement>(onCloseModal);

  const handleGoToCategory = () => {
    if (isSubAdded) {
      const index = categories.findIndex(
        (folder) => folder.categoryId === topId,
      );
      categories[index].subFolders.push({
        name: categoryName,
        categoryId: categories[index].categoryId,
        topCategoryId: topId,
      });
    } else {
      setCategories([
        ...categories,
        {
          categoryId: categories.length + 1,
          name: categoryName,
          topCategoryId: null,
          subFolders: [],
        },
      ]);
    }
    setIsSubAdded(false);
    onCloseModal();
  };
  return (
    <BlurBackground>
      <CommonCategoryContainer ref={successAddCategoryModalRef}>
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
              ? `/category/${topId}`
              : `/category/${categories.length + 1}`
          }
          onClick={handleGoToCategory}
        >
          보러가기
        </SuccessAddCategoryStyles.GoToCategoryButton>
      </CommonCategoryContainer>
    </BlurBackground>
  );
};

export default SuccessAddCategoryModal;
