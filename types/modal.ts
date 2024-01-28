export interface ICommonModalProps {
  categoryName: string;
  setCategoryName: React.Dispatch<React.SetStateAction<string>>;
  setIsSuccessAddCategoryModalOpen: React.Dispatch<
    React.SetStateAction<boolean>
  >;
}
