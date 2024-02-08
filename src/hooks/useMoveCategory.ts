import { categoryState } from '@/stores/category';
import handleCategory from '@/utils/handleCategory';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { ISubFolderProps } from 'types/category';

const useMoveCategory = () => {
  const [categories, setCategories] = useRecoilState(categoryState);
  const navigate = useNavigate();
  const {
    deleteSubCategory,
    deleteTopCategory,
    insertCategory,
    insertSubToTopCategory,
  } = handleCategory();

  const subToOtherTop = (
    topId: number,
    grabedCategory: React.MutableRefObject<ISubFolderProps | undefined>,
  ) => {
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
    setCategories([...insertResponse]);
    navigate(`/category/${grabedCategory.current?.topCategoryId}`);
  };

  const subToTop = (
    topId: number,
    grabedCategory: React.MutableRefObject<ISubFolderProps | undefined>,
    dropedCategory: React.MutableRefObject<number | undefined>,
  ) => {
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
    setCategories([...insertResponse]);
  };

  const topToOtherTop = (
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
    setCategories(insertResponse);
    navigate(`/category/${dropedCategory.current}`);
  };

  return { subToOtherTop, subToTop, topToOtherTop };
};

export default useMoveCategory;
