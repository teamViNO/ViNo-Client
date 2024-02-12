import {
  putSubToOtherTop,
  putSubToTop,
  putTopToOtherTop,
} from '@/apis/category';
import { categoryState } from '@/stores/category';
import handleCategory from '@/utils/handleCategory';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { ISubFolderProps } from 'types/category';
import useUpdateCategories from './useUpdateCategories';

const useMoveCategory = () => {
  const [categories, setCategories] = useRecoilState(categoryState);
  const navigate = useNavigate();
  const { updateCategories } = useUpdateCategories();
  const {
    deleteSubCategory,
    deleteTopCategory,
    insertCategory,
    insertSubToTopCategory,
  } = handleCategory();

  const subToOtherTop = async (
    topId: number,
    grabedCategory: React.MutableRefObject<ISubFolderProps | undefined>,
  ) => {
    if (grabedCategory.current?.name === '기타') {
      alert(`'기타' 폴더는 이동할 수 없습니다.`);
      return;
    }
    // 하위에 있는 폴더를 다른 상위 폴더로 이동하는 기능
    // 카테고리 이동1
    const deleteResponse = deleteSubCategory(
      categories,
      topId,
      grabedCategory.current?.categoryId,
    );
    const insertResponse = insertCategory(
      deleteResponse,
      grabedCategory.current?.topCategoryId,
      grabedCategory.current!,
    );
    const res = await putSubToOtherTop(
      grabedCategory.current!.categoryId,
      topId,
    );
    if (res.isSuccess) {
      updateCategories();
      setCategories([...insertResponse]);
      navigate(`/category/${grabedCategory.current?.topCategoryId}`);
    } else {
      alert('카테고리를 옮기는데 오류가 발생했습니다.');
    }
  };

  const subToTop = async (
    topId: number,
    grabedCategory: React.MutableRefObject<ISubFolderProps | undefined>,
    dropedCategory: React.MutableRefObject<number | undefined>,
  ) => {
    if (grabedCategory.current?.name === '기타') {
      alert(`'기타' 폴더는 이동할 수 없습니다.`);
      return;
    }
    // 하위에 있는 폴더를 상위로 올리는 기능
    // 카테고리 이동2
    const deleteResponse = deleteSubCategory(
      categories,
      topId,
      grabedCategory.current?.categoryId,
    );
    const insertResponse = insertSubToTopCategory(
      deleteResponse,
      dropedCategory.current,
      grabedCategory.current!,
    );
    const res = await putSubToTop(grabedCategory.current!.categoryId);
    if (res.isSuccess) {
      updateCategories();
      setCategories([...insertResponse]);
    } else {
      alert('카테고리를 옮기는데 오류가 발생했습니다.');
    }
  };

  const topToOtherTop = async (
    grabedCategory: React.MutableRefObject<ISubFolderProps | undefined>,
    dropedCategory: React.MutableRefObject<number | undefined>,
  ) => {
    // 상위에 있는 폴더를 다른 상위 폴더로 넣는 기능
    // 카테고리 이동3
    const deleteResponse = deleteTopCategory(
      categories,
      grabedCategory.current!.categoryId,
    );
    const insertResponse = insertCategory(
      deleteResponse,
      dropedCategory.current!,
      {
        categoryId: grabedCategory.current!.categoryId,
        name: grabedCategory.current!.name,
        topCategoryId: dropedCategory.current!,
      },
    );
    const res = await putTopToOtherTop(
      grabedCategory.current!.categoryId,
      dropedCategory.current!,
    );
    if (res.isSuccess) {
      setCategories(insertResponse);
      navigate(`/category/${dropedCategory.current}`);
    } else {
      alert('카테고리를 옮기는데 오류가 발생했습니다.');
    }
  };

  return { subToOtherTop, subToTop, topToOtherTop };
};

export default useMoveCategory;
