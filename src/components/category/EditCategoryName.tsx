import useOutsideClick from '@/hooks/useOutsideClick';
import * as EditCategoryNameStyles from '@/styles/category/EditCategoryName.style';
import handleEdit from '@/utils/handleEdit';
import { useState } from 'react';

interface IEditCategoryNameProps {
  mode: 'top' | 'sub';
  beforeEdit: string;
  categoryId: number;
  edit: string;
  setEdit: React.Dispatch<React.SetStateAction<string>>;
  setIsEditing: React.Dispatch<
    React.SetStateAction<{ activated: boolean; categoryId: number }>
  >;
}

const EditCategoryName = ({
  mode,
  categoryId,
  beforeEdit,
  edit,
  setEdit,
  setIsEditing,
}: IEditCategoryNameProps) => {
  const { editText, finishEdit } = handleEdit();
  const [nameRegex, setNameRegex] = useState(true);

  const handleFinish = () =>
    finishEdit(
      edit,
      setEdit,
      beforeEdit,
      setIsEditing,
      nameRegex,
      setNameRegex,
      categoryId,
    );

  const onKeydown = (e: React.KeyboardEvent) => {
    if (e.code === 'Enter') handleFinish();
  };

  const [editNameRef] = useOutsideClick<HTMLDivElement>(handleFinish);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    editText(e, setEdit, setNameRegex);
  return (
    <EditCategoryNameStyles.EditNameInputWrap
      ref={editNameRef}
      className={`${(!nameRegex || !edit.length) && 'warning'} ${
        mode === 'sub' && 'sub-category'
      }`}
    >
      <EditCategoryNameStyles.EditNameInput
        value={edit}
        onChange={handleInput}
        onKeyDown={onKeydown}
        className={`${mode === 'sub' && 'sub-category'}`}
      />
    </EditCategoryNameStyles.EditNameInputWrap>
  );
};

export default EditCategoryName;
