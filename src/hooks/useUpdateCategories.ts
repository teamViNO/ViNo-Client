import { getCategories } from '@/apis/category';
import { categoryState } from '@/stores/category';
import handleCategory from '@/utils/handleCategory';
import { useSetRecoilState } from 'recoil';

const useUpdateCategories = () => {
  const setCategories = useSetRecoilState(categoryState);
  const { initializeCategory } = handleCategory();
  const updateCategories = async () => {
    await getCategories()
      .then((res) => setCategories(initializeCategory(res.result)))
      .catch((err) => console.log(err));
  };

  return { updateCategories };
};

export default useUpdateCategories;
