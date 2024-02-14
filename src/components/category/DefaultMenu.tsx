import * as CategoryPageStyles from '@/styles/category/index.style';
import { ISubFolderProps, ITagProps } from 'types/category';
import Chip from '../common/chip/Chip';
import ChangeBottomSvg from '@/assets/icons/change-bottom.svg?react';
import ChangeTopSvg from '@/assets/icons/change-top.svg?react';

interface IDefaultMenuProps {
  menus: ISubFolderProps[] | ITagProps[];
  recentRegisterMode: boolean;
  selectedTags: string[];
  setSelectedTags: React.Dispatch<React.SetStateAction<string[]>>;
  toggleRecentRegisterMode: () => void;
}

const DefaultMenu = ({
  menus,
  recentRegisterMode,
  selectedTags,
  setSelectedTags,
  toggleRecentRegisterMode,
}: IDefaultMenuProps) => {
  const onSelectTag = (name: string) => {
    if (selectedTags.includes(name)) {
      setSelectedTags(selectedTags.filter((tag) => tag !== name));
    } else {
      setSelectedTags([...selectedTags, name]);
    }
  };
  return (
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
  );
};

export default DefaultMenu;
