import { getCategoryTags } from '@/apis/category';
import { getRecentVideos, getVideoById } from '@/apis/videos';
import { IFolderProps, ISubFolderProps, ITagProps } from 'types/category';
import { IVideoProps } from 'types/videos';

const handleVideo = async (
  categories: IFolderProps[],
  topCategoryId: string | undefined,
  subCategoryId: string | undefined,
  setMenus: React.Dispatch<
    React.SetStateAction<ISubFolderProps[] | ITagProps[] | undefined>
  >,
  setName: React.Dispatch<React.SetStateAction<string | undefined>>,
  setVideos: React.Dispatch<React.SetStateAction<IVideoProps[] | undefined>>,
) => {
  subCategoryId &&
    getCategoryTags(subCategoryId!).then((res) => {
      if (res.isSuccess) setMenus(res.result.tags);
      else setMenus([]);
    });
  if (!topCategoryId) {
    await getRecentVideos().then((res) => {
      setVideos(res.result.videos);
      setName('최근 읽은 영상');
      setMenus([]);
    });
  } else {
    await getVideoById(subCategoryId ?? topCategoryId).then((res) => {
      const topCategory = categories.find(
        (category) => category.categoryId === Number(topCategoryId),
      );
      if (subCategoryId) {
        const subName = topCategory?.subFolders.find(
          (subFolder) => subFolder.categoryId === Number(subCategoryId),
        );
        setName(subName!.name);
      } else {
        setName(topCategory!.name);
        setMenus(topCategory!.subFolders);
      }
      setVideos(res.isSuccess ? res.result.videos : []);
    });
  }
};

export default handleVideo;
