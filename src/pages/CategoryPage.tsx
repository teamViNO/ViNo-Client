import React, { Suspense, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as CategoryPageStyles from '@/styles/category/index.style';
import { useRecoilValue } from 'recoil';
import { categoryState } from '@/stores/category';
import { ISubFolderProps, ITagProps } from 'types/category';
import EmptyCard from '@/components/category/EmptyCard';
import { deleteVideos } from '@/apis/videos';
import { IVideoProps } from 'types/videos';
import { sortVideos } from '@/utils/sortVideos';
import { CardContainer } from '@/styles/category/Card.style';
import VideoSelectMenu from '@/components/category/VideoSelectMenu';
import { putVideoToOtherCategory } from '@/apis/category';
import handleVideo from '@/utils/handleVideo';
import CategoryPageSkeleton from '@/components/skeleton/CategoryPageSkeleton';
import DefaultMenu from '@/components/category/DefaultMenu';

const CategoryTitle = React.lazy(
  () => import('@/components/category/CategoryTitle'),
);
const Card = React.lazy(() => import('@/components/category/Card'));

const CategoryPage = () => {
  const params = useParams();
  const [name, setName] = useState<string | undefined>();
  const [menus, setMenus] = useState<
    ISubFolderProps[] | ITagProps[] | undefined
  >();
  const [videos, setVideos] = useState<IVideoProps[] | undefined>();
  const [recentRegisterMode, setRecentRegisterMode] = useState(false);
  const [checkedVideos, setCheckedVideos] = useState<number[] | undefined>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const categories = useRecoilValue(categoryState);

  const toggleRecentRegisterMode = () =>
    setRecentRegisterMode(!recentRegisterMode);

  const sortedVideos = sortVideos(videos, recentRegisterMode);

  useEffect(() => {
    handleVideo(
      categories,
      params.top_folder,
      params.sub_folder,
      setMenus,
      setName,
      setVideos,
    );
    setCheckedVideos([]);
  }, [categories, params.sub_folder, params.top_folder]);

  const handleDeleteVideos = async () => {
    const res = await deleteVideos(checkedVideos);
    if (res.isSuccess) {
      const existVideos = videos?.filter(
        (video) => !checkedVideos?.includes(video.video_id),
      );
      setVideos(existVideos);
      setCheckedVideos([]);
    } else {
      alert('비디오를 삭제하는데 실패했습니다.');
    }
  };

  const allCheckBtnHandler = async () => {
    if (checkedVideos?.length === videos?.length) {
      handleDeleteVideos();
    } else {
      setCheckedVideos(videos?.map((video) => video.video_id));
    }
  };
  const onFileClick = async (categoryId: number) => {
    const res = await putVideoToOtherCategory(checkedVideos, categoryId);
    if (res.isSuccess) {
      handleVideo(
        categories,
        params.top_folder,
        params.sub_folder,
        setMenus,
        setName,
        setVideos,
      );
    }
  };

  return (
    <Suspense
      fallback={<CategoryPageSkeleton isSubSkeleton={!!params.sub_folder} />}
    >
      <CategoryPageStyles.Container>
        <CategoryTitle name={name} totalVideos={sortedVideos?.length} />
        <CategoryPageStyles.MenuWrap>
          {checkedVideos !== undefined && checkedVideos.length > 0 ? (
            <VideoSelectMenu
              categories={categories}
              totalVideoCount={sortedVideos!.length}
              checkedVideos={checkedVideos}
              setCheckedVideos={setCheckedVideos}
              handleDeleteVideos={handleDeleteVideos}
              allCheckBtnHandler={allCheckBtnHandler}
              onFileClick={onFileClick}
            />
          ) : (
            <DefaultMenu
              menus={menus}
              recentRegisterMode={recentRegisterMode}
              selectedTags={selectedTags}
              setSelectedTags={setSelectedTags}
              toggleRecentRegisterMode={toggleRecentRegisterMode}
            />
          )}
        </CategoryPageStyles.MenuWrap>

        {sortedVideos?.length === 0 && <EmptyCard />}
        {sortedVideos !== undefined && sortedVideos.length > 0 && (
          <CardContainer>
            {sortedVideos.map((video) => {
              // 하위 카테고리에 있을 때 태그 선택된 것에 따라 비디오 보여지게하는 로직
              const matchedTagCount = video.tag.reduce((acc, cur) => {
                if (selectedTags.includes(cur.name)) return (acc += 1);
                return acc;
              }, 0);
              if (
                params.sub_folder &&
                selectedTags.length &&
                matchedTagCount !== selectedTags.length
              )
                return;

              return (
                <Card
                  mode="category"
                  video={video}
                  checkedVideos={checkedVideos}
                  setCheckedVideos={setCheckedVideos}
                  key={video.video_id}
                />
              );
            })}
          </CardContainer>
        )}
      </CategoryPageStyles.Container>
    </Suspense>
  );
};

export default CategoryPage;
