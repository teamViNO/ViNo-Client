import CategoryTitle from '@/components/category/CategoryTitle';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ChangeBottomSvg from '@/assets/icons/change-bottom.svg?react';
import ChangeTopSvg from '@/assets/icons/change-top.svg?react';
import GarbageSvg from '@/assets/icons/garbage.svg?react';
import CloseSvg from '@/assets/icons/close.svg?react';
import * as CategoryPageStyles from '@/styles/category/index.style';
import Card from '@/components/category/Card';
import { useRecoilValue } from 'recoil';
import { categoryState } from '@/stores/category';
import { ISubFolderProps, ITagProps } from 'types/category';
import EmptyCard from '@/components/category/EmptyCard';
import { deleteVideos, getRecentVideos } from '@/apis/videos';
import { IVideoProps } from 'types/videos';
import { sortVideos } from '@/utils/sortVideos';
import { CardContainer } from '@/styles/category/Card.style';
import { CategorySelectBox } from '@/components/SummaryPage/SummaryDetailBox/CategorySelectBox';
import Chip from '@/components/common/chip/Chip';
import handleVideo from '@/utils/handleVideo';

const CategoryPage = () => {
  const params = useParams();
  const [name, setName] = useState('');
  const [menus, setMenus] = useState<ISubFolderProps[] | ITagProps[]>([]);
  const [videos, setVideos] = useState<IVideoProps[]>([]);
  const [recentRegisterMode, setRecentRegisterMode] = useState(false);
  const [checkedVideos, setCheckedVideos] = useState<number[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const categories = useRecoilValue(categoryState);

  const [selectedCategoryId, setSelectedCategoryId] = useState(
    categories.length ? categories[0].categoryId : -1,
  );

  const onSelectTag = (name: string) => {
    if (selectedTags.includes(name)) {
      setSelectedTags(selectedTags.filter((tag) => tag !== name));
    } else {
      setSelectedTags([...selectedTags, name]);
    }
  };

  const handleSelectCategory = (categoryId: number) => {
    setSelectedCategoryId(categoryId);
  };

  const toggleRecentRegisterMode = () =>
    setRecentRegisterMode(!recentRegisterMode);

  const sortedVideos = sortVideos(videos, recentRegisterMode);

  useEffect(() => {
    if (!params.top_folder) {
      getRecentVideos()
        .then((res) => {
          setVideos(res.result.videos);
          setName('최근 읽은 영상');
          setMenus([]);
        })
        .catch((err) => console.log(err));
    } else {
      handleVideo(
        categories,
        params.top_folder,
        params.sub_folder!,
        setMenus,
        setName,
        setVideos,
      );
    }
    setCheckedVideos([]);
  }, [categories, params.sub_folder, params.top_folder]);

  const handleDeleteVideos = async () => {
    const res = await deleteVideos(checkedVideos);
    if (res.isSuccess) {
      const existVideos = videos.filter(
        (video) => !checkedVideos.includes(video.video_id),
      );
      setVideos(existVideos);
      setCheckedVideos([]);
    } else {
      alert('비디오를 삭제하는데 실패했습니다.');
    }
  };

  const allCheckBtnHandler = async () => {
    if (checkedVideos.length === videos.length) {
      handleDeleteVideos();
    } else {
      setCheckedVideos(videos.map((video) => video.video_id));
    }
  };

  const onFileClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    // 비디오 이동 API 호출 후 모든 비디오 받아오는 API 재호출로 최신화하기
  };

  return (
    <CategoryPageStyles.Container>
      <CategoryTitle name={name} totalVideos={sortedVideos.length} />
      <CategoryPageStyles.MenuWrap>
        {checkedVideos.length > 0 ? (
          <CategoryPageStyles.SelectModeWrap>
            <div>
              <CategoryPageStyles.AllSelectBtn onClick={allCheckBtnHandler}>
                {checkedVideos.length === sortedVideos.length
                  ? '모두 삭제'
                  : '모두 선택'}
              </CategoryPageStyles.AllSelectBtn>
              <CategoryPageStyles.SelectedCount>
                {checkedVideos.length}개 선택
              </CategoryPageStyles.SelectedCount>
            </div>
            <CategoryPageStyles.CardManagement>
              <CategoryPageStyles.DropdownWrap>
                <CategorySelectBox
                  selectedCategoryId={selectedCategoryId}
                  onSelect={handleSelectCategory}
                  onFileClick={onFileClick}
                />
              </CategoryPageStyles.DropdownWrap>
              <CategoryPageStyles.ManagementBoxGray
                onClick={handleDeleteVideos}
              >
                <GarbageSvg width={28} height={28} />
              </CategoryPageStyles.ManagementBoxGray>
              <CategoryPageStyles.ManagementBox>
                <CloseSvg
                  width={28}
                  height={28}
                  onClick={() => {
                    setCheckedVideos([]);
                  }}
                />
              </CategoryPageStyles.ManagementBox>
            </CategoryPageStyles.CardManagement>
          </CategoryPageStyles.SelectModeWrap>
        ) : (
          <>
            <div style={{ display: 'flex' }}>
              {menus.map((menu: ISubFolderProps | ITagProps) => (
                <>
                  {'tag_id' in menu && (
                    <Chip
                      key={menu.tag_id}
                      name={menu.name}
                      light
                      selected={selectedTags.includes(menu.name)}
                      onSelectTag={onSelectTag}
                    />
                  )}
                  {!('tag_id' in menu) && (
                    <CategoryPageStyles.Menu
                      to={`/category/${menu.topCategoryId}/${menu.categoryId}`}
                      key={`${menu.name}-${menu.categoryId}`}
                    >
                      {menu.name}
                    </CategoryPageStyles.Menu>
                  )}
                </>
              ))}
            </div>
            <CategoryPageStyles.ModeWrap onClick={toggleRecentRegisterMode}>
              <CategoryPageStyles.Mode>
                {recentRegisterMode ? '최근등록순' : '최근영상순'}
              </CategoryPageStyles.Mode>
              {recentRegisterMode ? (
                <ChangeBottomSvg width={24} height={24} />
              ) : (
                <ChangeTopSvg width={24} height={24} />
              )}
            </CategoryPageStyles.ModeWrap>
          </>
        )}
      </CategoryPageStyles.MenuWrap>

      {(sortedVideos.length === 0 || sortedVideos === undefined) && (
        <EmptyCard />
      )}
      {sortedVideos.length > 0 && (
        <CardContainer>
          {sortedVideos.map((video) => {
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
                key={video.category_id}
              />
            );
          })}
        </CardContainer>
      )}
    </CategoryPageStyles.Container>
  );
};

export default CategoryPage;
