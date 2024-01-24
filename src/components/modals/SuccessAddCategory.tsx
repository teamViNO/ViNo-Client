import useOutsideClick from '@/hooks/useOutsideClick';
import { CommonAddCategoryContainer } from '@/styles/modals/common.style';

interface ISuccessAddCategory {
  categoryName: string;
  setIsSuccessAddCategoryModalOpen: React.Dispatch<
    React.SetStateAction<boolean>
  >;
}

const SuccessAddCategory = ({
  categoryName,
  setIsSuccessAddCategoryModalOpen,
}: ISuccessAddCategory) => {
  const [successAddCategoryModalRef] = useOutsideClick<HTMLDivElement>(() =>
    setIsSuccessAddCategoryModalOpen(false),
  );
  return (
    <CommonAddCategoryContainer ref={successAddCategoryModalRef}>
      <h1>{categoryName}</h1>
    </CommonAddCategoryContainer>
  );
};

export default SuccessAddCategory;
