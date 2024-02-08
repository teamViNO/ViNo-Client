import CategoryTitle from '@/components/category/CategoryTitle';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ChangeBottomSvg from '@/assets/icons/change-bottom.svg?react';
import ChangeTopSvg from '@/assets/icons/change-top.svg?react';
import GarbageSvg from '@/assets/icons/garbage.svg?react';
import FolderSvg from '@/assets/icons/open-file.svg?react';
import CloseSvg from '@/assets/icons/close.svg?react';
import * as CategoryPageStyles from '@/styles/category/index.style';
import Card from '@/components/category/Card';
import axiosInstance from '@/apis/config/instance';
import { useRecoilValue } from 'recoil';
import { categoryState } from '@/stores/category';
import { ISubFolderProps } from 'types/category';
import EmptyCard from '@/components/category/EmptyCard';

const CategoryPage = () => {
  const params = useParams();
  const [name, setName] = useState('');
  const [menus, setMenus] = useState<ISubFolderProps[]>([]);
  const [videos, setVideos] = useState([]);
  const [recentRegisterMode, setRecentRegisterMode] = useState(false);
  const [checkedVideos, setCheckedVideos] = useState<boolean[]>(
    new Array(6).fill(false),
  );
  const categories = useRecoilValue(categoryState);

  const toggleRecentRegisterMode = () =>
    setRecentRegisterMode(!recentRegisterMode);

  useEffect(() => {
    if (!params.top_folder) {
      // 최근 동영상 가져오는 로직
      setName('최근 읽은 영상');
    } else {
      (async () =>
        await axiosInstance
          .get(`/videos/${params.top_folder}`)
          .then((res) => {
            console.log(res);
            const index = categories.findIndex(
              (category) => category.categoryId === Number(params.top_folder),
            );
            setVideos(res.data.result.videos);
            setName(categories[index].name);
            setMenus(categories[index].subFolders);
          })
          .catch((err) => console.log(err)))();
    }
    setCheckedVideos(new Array(6).fill(false));
  }, [categories, params.top_folder]);

  const allCheckBtnHandler = () => {
    if (checkedVideos.includes(false)) {
      setCheckedVideos(checkedVideos.map(() => true));
    } else {
      // 모두 삭제
    }
  };

  const dirMoveHanlder = () => {
    checkedVideos.map((value, id) => {
      if (value === true) {
        console.log('이동해야할 index : ', id);
      }
    });
  };

  const garbageHandler = () => {
    checkedVideos.map((value, id) => {
      if (value === true) {
        console.log('삭제해야할 index : ', id);
      }
    });
  };

  return (
    <CategoryPageStyles.Container>
      <CategoryTitle name={name} totalVideos={videos.length} />
      <CategoryPageStyles.MenuWrap>
        {checkedVideos.includes(true) ? (
          <div>
            <CategoryPageStyles.AllSelectBtn onClick={allCheckBtnHandler}>
              {!checkedVideos.includes(false) ? '모두 삭제' : '모두 선택'}
            </CategoryPageStyles.AllSelectBtn>
            <CategoryPageStyles.SelectedCount>
              {checkedVideos.filter((bool) => bool === true).length}개 선택
            </CategoryPageStyles.SelectedCount>
          </div>
        ) : (
          <div>
            {menus.map((menu) => (
              <CategoryPageStyles.Menu key={menu.name}>
                {menu.name}
              </CategoryPageStyles.Menu>
            ))}
          </div>
        )}
        {checkedVideos.includes(true) ? (
          <CategoryPageStyles.CardManagement>
            <CategoryPageStyles.SelectManagement>
              {menus.map((menu) => (
                <option key={menu.name}>{menu.name}</option>
              ))}
            </CategoryPageStyles.SelectManagement>
            <CategoryPageStyles.ManagementBoxGray onClick={dirMoveHanlder}>
              <FolderSvg width={28} height={28} />
            </CategoryPageStyles.ManagementBoxGray>
            <CategoryPageStyles.ManagementBoxGray onClick={garbageHandler}>
              <GarbageSvg width={28} height={28} />
            </CategoryPageStyles.ManagementBoxGray>
            <CategoryPageStyles.ManagementBox>
              <CloseSvg
                width={28}
                height={28}
                onClick={() => {
                  setCheckedVideos(checkedVideos.map(() => false));
                }}
              />
            </CategoryPageStyles.ManagementBox>
          </CategoryPageStyles.CardManagement>
        ) : (
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
        )}
      </CategoryPageStyles.MenuWrap>

      {videos.length === 0 && <EmptyCard />}
      {videos.length > 0 && (
        <Card
          videos={videos}
          checkedVideos={checkedVideos}
          setCheckedVideos={setCheckedVideos}
        />
      )}
    </CategoryPageStyles.Container>
  );
};

export default CategoryPage;
