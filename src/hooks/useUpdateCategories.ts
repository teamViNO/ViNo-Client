import { getCategories } from '@/apis/category';
import { categoryState } from '@/stores/category';
import handleCategory from '@/utils/handleCategory';
import { useSetRecoilState } from 'recoil';

const useUpdateCategories = () => {
  const setCategories = useSetRecoilState(categoryState);
  const { initializeCategory } = handleCategory();
  let failCount = 0;
  const updateCategories = async () => {
    await getCategories()
      .then((res) => {
        if (res.result === undefined) {
          failCount++;
          if (failCount >= 3) {
            alert('카테고리를 가져오는 도중 오류가 발생했습니다.');
            return;
          }
          updateCategories();
          return;
        }
        setCategories(initializeCategory(res.result));
      })
      .catch((err) => console.log(err));
  };

  return { updateCategories };
};

export default useUpdateCategories;
