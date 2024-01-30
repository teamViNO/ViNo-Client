import CategoryTitle from '@/components/category/CategoryTitle';
import { categoryItems } from '@/components/category/dummy';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ChangeBottomSvg from '@/assets/icons/change-bottom.svg?react';
import ChangeTopSvg from '@/assets/icons/change-top.svg?react';
import GarbageSvg from '@/assets/icons/garbage.svg?react';
import FolderSvg from '@/assets/icons/open-file.svg?react';
import CloseSvg from '@/assets/icons/close.svg?react';
import * as CategoryPageStyles from '@/styles/category/index.style';
import Card from '@/components/category/Card';

const CategoryPage = () => {
  const params = useParams();
  const [title, setTitle] = useState('');
  const [recentRegisterMode, setRecentRegisterMode] = useState(false);

  const [checkedItems, setCheckedItems] = useState<boolean[]>(new Array(6).fill(false));

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

  const allCheckBtnHandler = () => {
    if(checkedItems.includes(false)){
      setCheckedItems(checkedItems.map(() => true));
    }
    else { 
      // 모두 삭제
    }
  }

  const dirMoveHanlder = () => {
    checkedItems.map((value, id) => {
      if(value === true){
        console.log('이동해야할 index : ', id)
      }
    })
  }

  const garbageHandler = () => {
    checkedItems.map((value, id) => {
      if(value === true){
        console.log('삭제해야할 index : ', id)
      }
    })
  }


  return (
    <CategoryPageStyles.Container>
      <CategoryTitle title={title} totalVideos={categoryItems.length} />
      <CategoryPageStyles.MenuWrap>
        {checkedItems.includes(true) ? 
        <div>
          <CategoryPageStyles.AllSelectBtn onClick={allCheckBtnHandler}>{!checkedItems.includes(false) ? '모두 삭제' : '모두 선택'}</CategoryPageStyles.AllSelectBtn>
          <CategoryPageStyles.SelectedCount>{(checkedItems.filter((bool) => bool === true)).length}개 선택</CategoryPageStyles.SelectedCount>  
        </div>
        : 
        <div>
        {menus.map((menu) => (
          <CategoryPageStyles.Menu key={menu}>{menu}</CategoryPageStyles.Menu>
        ))}
        </div> 
        } 
        {checkedItems.includes(true) ? 
        <CategoryPageStyles.CardManagement>
          <CategoryPageStyles.SelectManagement>
          {menus.map((menu) => (
          <option key={menu}>{menu}</option>
          ))}
          </CategoryPageStyles.SelectManagement>
          <CategoryPageStyles.ManagementBoxGray onClick={dirMoveHanlder}><FolderSvg width = {28} height = {28} /></CategoryPageStyles.ManagementBoxGray>
          <CategoryPageStyles.ManagementBoxGray onClick={garbageHandler}><GarbageSvg width = {28} height = {28} /></CategoryPageStyles.ManagementBoxGray>
          <CategoryPageStyles.ManagementBox><CloseSvg width = {28} height = {28} onClick = {() => {setCheckedItems(checkedItems.map(() => false))}}/></CategoryPageStyles.ManagementBox>
        </CategoryPageStyles.CardManagement>
        : 
        <CategoryPageStyles.ModeWrap onClick={toggleRecentRegisterMode}>
          <CategoryPageStyles.Mode>
            {recentRegisterMode ? '최근등록순' : '최근영상순'}
          </CategoryPageStyles.Mode>
          {recentRegisterMode ? (
            <ChangeBottomSvg width = {24} height = {24} />
          ) : (
            <ChangeTopSvg width = {24} height = {24} />
          )}
           
        </CategoryPageStyles.ModeWrap>
        }
      </CategoryPageStyles.MenuWrap>

      <Card categoryItems = {categoryItems} checkedItems = {checkedItems} setCheckedItems = {setCheckedItems}/>
    </CategoryPageStyles.Container>
  );
};

export default CategoryPage;
