import {
  putSubToOtherTop,
  putSubToTop,
  putTopToOtherTop,
} from '@/apis/category';
import { useNavigate } from 'react-router-dom';
import { ISubFolderProps } from 'types/category';
import useUpdateCategories from './useUpdateCategories';

const useMoveCategory = () => {
  const navigate = useNavigate();
  const { updateCategories } = useUpdateCategories();

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
    const res = await putSubToOtherTop(
      grabedCategory.current!.categoryId,
      topId,
    );
    if (res.isSuccess) {
      await updateCategories();
      navigate(`/category/${grabedCategory.current?.topCategoryId}`);
    }
    return res.isSuccess;
  };

  const subToTop = async (
    grabedCategory: React.MutableRefObject<ISubFolderProps | undefined>,
  ) => {
    if (grabedCategory.current?.name === '기타') {
      alert(`'기타' 폴더는 이동할 수 없습니다.`);
      return;
    }
    // 하위에 있는 폴더를 상위로 올리는 기능
    // 카테고리 이동2
    const res = await putSubToTop(grabedCategory.current!.categoryId);
    if (res.isSuccess) {
      await updateCategories();
    }
    return res.isSuccess;
  };

  const topToOtherTop = async (
    grabedCategory: React.MutableRefObject<ISubFolderProps | undefined>,
    dropedCategory: React.MutableRefObject<number | undefined>,
  ) => {
    // 상위에 있는 폴더를 다른 상위 폴더로 넣는 기능
    // 카테고리 이동3
    const res = await putTopToOtherTop(
      grabedCategory.current!.categoryId,
      dropedCategory.current!,
    );
    if (res.isSuccess) {
      await updateCategories();
      navigate(`/category/${dropedCategory.current}`);
    }
    return res.isSuccess;
  };

  return { subToOtherTop, subToTop, topToOtherTop };
};

export default useMoveCategory;
