import CategoryTitle from '@/components/category/CategoryTitle';
import { categoryItems } from '@/components/category/dummy';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ChangeBottomSvg from '@/assets/icons/change-bottom.svg?react';
import ChangeTopSvg from '@/assets/icons/change-top.svg?react';
import * as CategoryPageStyles from '@/styles/category/index.style';
import Card from '@/components/category/Card';

const CategoryPage = () => {
  const params = useParams();
  const [title, setTitle] = useState('');
  const [recentRegisterMode, setRecentRegisterMode] = useState(false);

  const [userSelectMode, setUserSelectMode] = useState(false); // checkbox 클릭 시 변경
  const menus = ['마케팅', '트렌드', '기업', '용어'];
  const toggleRecentRegisterMode = () =>
    setRecentRegisterMode(!recentRegisterMode);


  useEffect(() => {
    if (!params.id) {
      // 최근 동영상 가져오는 로직
      setTitle('최근 읽은 영상');
    } else {
      // params.id 값에 따라 가져오는 로직
      setTitle(params.id);
    }
  }, [params.id]);
 
  return (
    <CategoryPageStyles.Container>
      <CategoryTitle title={title} totalVideos={categoryItems.length} />
      <CategoryPageStyles.MenuWrap>

        {userSelectMode ? 
        <div>
          {menus.map((menu) => (
            <CategoryPageStyles.Menu key={menu}>{menu}</CategoryPageStyles.Menu>
          ))}
        </div> : ''}
            
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
      </CategoryPageStyles.MenuWrap>

      <Card userSelectMode={userSelectMode} setUserSelectMode={setUserSelectMode}/>
    </CategoryPageStyles.Container>
  );
};

export default CategoryPage;
