import { updateCategoryName } from '@/apis/category';

const handleEdit = () => {
  const editText = (
    e: React.ChangeEvent<HTMLInputElement>,
    setValue: React.Dispatch<React.SetStateAction<string>>,
    setNameRegex?: React.Dispatch<React.SetStateAction<boolean>>,
  ) => {
    const categoryNameRegex = /^[a-zA-Z0-9가-힣\s]*$/;
    if (e.target.value.length > 10) return;
    if (!categoryNameRegex.test(e.target.value)) {
      setNameRegex && setNameRegex(false);
    } else {
      setNameRegex && setNameRegex(true);
    }
    setValue(e.target.value);
  };

  const finishEdit = (
    edit: string,
    setEdit: React.Dispatch<React.SetStateAction<string>>,
    beforeEdit: string,
    setIsEditing: React.Dispatch<
      React.SetStateAction<{ activated: boolean; categoryId: number }>
    >,
    nameRegex: boolean,
    setNameRegex: React.Dispatch<React.SetStateAction<boolean>>,
    categoryId: number,
  ) => {
    if (!edit.length || !nameRegex) {
      setEdit(beforeEdit);
      setIsEditing({ activated: false, categoryId });
      setNameRegex(true);
      return;
    }
    if (edit !== beforeEdit) updateCategoryName(edit, categoryId);
    setIsEditing({ activated: false, categoryId });
  };

  return { editText, finishEdit };
};
export default handleEdit;
