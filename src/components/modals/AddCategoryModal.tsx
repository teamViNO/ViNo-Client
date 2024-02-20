import useOutsideClick from '@/hooks/useOutsideClick';
import { topCategoryModalState } from '@/stores/modal';
import { useSetRecoilState } from 'recoil';
import OpenFileSvg from '@/assets/icons/open-file.svg?react';
import CloseSvg from '@/assets/icons/close.svg?react';
import * as AddTopCategoryModalStyles from '@/styles/modals/AddCategoryModal.style';
import { useState } from 'react';
import {
  BlurBackground,
  CommonCategoryContainer,
  CommonCloseButton,
} from '@/styles/modals/common.style';
import { ICommonModalProps } from 'types/modal';
import handleEdit from '@/utils/handleEdit';
import { postSubCategroy, postTopCategroy } from '@/apis/category';
import useUpdateCategories from '@/hooks/useUpdateCategories';
import useCreateToast from '@/hooks/useCreateToast';

interface IAddTopCategoryModalProps extends ICommonModalProps {
  isTopCategoryModalOpen: boolean;
  setIsSubCategoryModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  topCategoryId: number;
  setTo: React.Dispatch<React.SetStateAction<string>>;
}

const AddCategoryModal = ({
  isTopCategoryModalOpen,
  setIsSubCategoryModalOpen,
  categoryName,
  setCategoryName,
  setIsSuccessAddCategoryModalOpen,
  topCategoryId,
  setTo,
}: IAddTopCategoryModalProps) => {
  const setIsTopCategoryModalOpen = useSetRecoilState(topCategoryModalState);
  const { createToast } = useCreateToast();
  const { updateCategories } = useUpdateCategories();
  const { editText } = handleEdit();

  const [isFocused, setIsFocused] = useState(false);

  const categoryNameRegex = /^[a-zA-Z0-9가-힣\s]*$/;
  const checkCategoryNameRegex = categoryNameRegex.test(categoryName);
  const addEnabled = categoryName.length > 0 && checkCategoryNameRegex;

  const onCloseModal = () => {
    isTopCategoryModalOpen
      ? setIsTopCategoryModalOpen(false)
      : setIsSubCategoryModalOpen(false);
  };

  const [topCategoryModalRef] = useOutsideClick<HTMLDivElement>(onCloseModal);

  const handleInputCategoryName = (e: React.ChangeEvent<HTMLInputElement>) =>
    editText(e, setCategoryName);

  const addCategory = async (e: React.MouseEvent) => {
    if (categoryName === '기타') {
      createToast(`'기타' 이름은 사용하실 수 없어요`);
      return;
    }
    const response = isTopCategoryModalOpen
      ? await postTopCategroy(categoryName)
      : await postSubCategroy(categoryName, topCategoryId);
    if (response.isSuccess) {
      updateCategories();
      setTo(
        isTopCategoryModalOpen
          ? `${response.result.categoryId}`
          : `${response.result.topCategoryId}/${response.result.categoryId}`,
      );
      setIsSuccessAddCategoryModalOpen(true);
    }
    e.stopPropagation();
    onCloseModal();
  };
  return (
    <BlurBackground>
      <CommonCategoryContainer ref={topCategoryModalRef}>
        <CommonCloseButton onClick={onCloseModal}>
          <CloseSvg width={21.42} height={21.42} />
        </CommonCloseButton>
        <OpenFileSvg width={56} height={56} />
        <AddTopCategoryModalStyles.Title>
          {isTopCategoryModalOpen ? '상위' : '하위'} 카테고리 추가
        </AddTopCategoryModalStyles.Title>
        <AddTopCategoryModalStyles.SubTitle>
          만들고 싶은 카테고리의 이름을 작성해주세요
        </AddTopCategoryModalStyles.SubTitle>
        <AddTopCategoryModalStyles.InputCategoryNameWrap
          focused={isFocused.toString()}
        >
          <AddTopCategoryModalStyles.InputCategoryName
            value={categoryName}
            onChange={handleInputCategoryName}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder="카테고리의 이름을 작성해주세요"
          />
          <AddTopCategoryModalStyles.InputCategoryNameMessage>
            <AddTopCategoryModalStyles.InputCategoryNameLength
              category_name_length={categoryName.length}
            >
              {categoryName.length}
            </AddTopCategoryModalStyles.InputCategoryNameLength>
            /10(공백포함)
          </AddTopCategoryModalStyles.InputCategoryNameMessage>
        </AddTopCategoryModalStyles.InputCategoryNameWrap>
        {!checkCategoryNameRegex && (
          <AddTopCategoryModalStyles.WarningMessage>
            *아쉽지만,이모티콘은 사용할 수 없어요
          </AddTopCategoryModalStyles.WarningMessage>
        )}
        <AddTopCategoryModalStyles.AddButton
          onClick={addCategory}
          disabled={!addEnabled}
          add_enabled={addEnabled.toString()}
        >
          추가하기
        </AddTopCategoryModalStyles.AddButton>
      </CommonCategoryContainer>
    </BlurBackground>
  );
};

export default AddCategoryModal;
