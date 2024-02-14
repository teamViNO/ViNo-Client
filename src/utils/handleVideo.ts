import { getCategoryTags } from '@/apis/category';
import { getVideoById } from '@/apis/videos';
import { IFolderProps, ISubFolderProps, ITagProps } from 'types/category';
import { IVideoProps } from 'types/videos';

const handleVideo = async (
  categories: IFolderProps[],
  topCategoryId: string,
  subCategoryId: string,
  setMenus: React.Dispatch<
    React.SetStateAction<ISubFolderProps[] | ITagProps[]>
  >,
  setName: React.Dispatch<React.SetStateAction<string>>,
  setVideos: React.Dispatch<React.SetStateAction<IVideoProps[]>>,
) => {
  await getVideoById(topCategoryId).then((res) => {
    const topCategory = categories.find(
      (category) => category.categoryId === Number(topCategoryId),
    );
    if (subCategoryId) {
      const subName = topCategory?.subFolders.find(
        (subFolder) => subFolder.categoryId === Number(subCategoryId),
      );
      setName(subName!.name);
      getCategoryTags(subCategoryId!).then((res) => {
        if (res.isSuccess) setMenus(res.result.tags);
        else setMenus([]);
      });
    } else {
      setName(topCategory!.name);
      setMenus(topCategory!.subFolders);
    }
    setVideos(res.isSuccess ? res.result.videos : []);
  });
};
export default handleVideo;
