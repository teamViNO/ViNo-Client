import { getCategoryTags } from '@/apis/category';
import { getRecentVideos, getVideoById } from '@/apis/videos';
import { IFolderProps, ISubFolderProps, ITagProps } from 'types/category';
import { IVideoProps } from 'types/videos';

const handleVideo = async (
  categories: IFolderProps[],
  topCategoryId: string | undefined,
  subCategoryId: string | undefined,
  setMenus: React.Dispatch<
    React.SetStateAction<ISubFolderProps[] | ITagProps[]>
  >,
  setName: React.Dispatch<React.SetStateAction<string>>,
  setVideos: React.Dispatch<React.SetStateAction<IVideoProps[]>>,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  setIsLoading(true);
  if (!topCategoryId) {
    await getRecentVideos().then((res) => {
      setVideos(res.result.videos);
      setName('최근 읽은 영상');
      setMenus([]);
    });
  } else {
    await getVideoById(subCategoryId ?? topCategoryId).then(async (res) => {
      const topCategory = categories.find(
        (category) => category.categoryId === Number(topCategoryId),
      );
      if (subCategoryId) {
        const subName = topCategory?.subFolders.find(
          (subFolder) => subFolder.categoryId === Number(subCategoryId),
        );
        setName(subName!.name);
        await getCategoryTags(subCategoryId!).then((res) => {
          if (res.isSuccess) setMenus(res.result.tags);
          else setMenus([]);
        });
      } else {
        setName(topCategory!.name);
        setMenus(topCategory!.subFolders);
      }
      setVideos(res.isSuccess ? res.result.videos : []);
    });
  }
  setIsLoading(false);
};

export default handleVideo;
