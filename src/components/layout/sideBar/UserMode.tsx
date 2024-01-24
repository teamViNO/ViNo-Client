import LookSvg from '@/assets/icons/look.svg?react';
import ClosedFileSvg from '@/assets/icons/close-file.svg?react';
import OpenFileSvg from '@/assets/icons/open-file.svg?react';
import MoreOptionsSvg from '@/assets/icons/more-options.svg?react';
import * as UserModeStyle from '@/styles/layout/sideBar/UserMode.style';
import { useLocation } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { topCategoryModalState } from '@/stores/modal';
import { BlurBackground } from '@/styles/modals/common.style';
import AddTopCategoryModal from '@/components/modals/AddTopCategoryModal';
import SuccessAddCategoryModal from '@/components/modals/SuccessAddCategoryModal';
import { useState } from 'react';

interface IFolderProps {
  id: number;
  name: string;
}

const UserMode = () => {
  const isTopCategoryModalOpen = useRecoilValue(topCategoryModalState);
  const [isSuccessAddCategoryModalOpen, setIsSuccessAddCategoryModalOpen] =
    useState(false);
  const [categoryName, setCategoryName] = useState('');
  const [folders, setFolders] = useState<IFolderProps[]>([
    { id: 1, name: '기획' },
    { id: 2, name: '디자인' },
    { id: 3, name: '개발' },
    { id: 4, name: '팁' },
    { id: 5, name: '방법론' },
  ]);
  const menus = ['마케팅', '트렌드', '기업', '용어'];

  const location = useLocation();
  const pathname = location.pathname.replace('/category/', '');
  const href = pathname === 'recent' ? 'recent' : pathname;

  // todo 상위 카테고리 추가 모달 구현
  return (
    <>
      <div>
        <UserModeStyle.RecentVideoButton
          selected={href === 'recent'}
          to={'/category/recent'}
        >
          <UserModeStyle.ImageTextWrap>
            <LookSvg width={28} height={28} />
            <UserModeStyle.CommonTitle>
              최근 읽은 영상
            </UserModeStyle.CommonTitle>
          </UserModeStyle.ImageTextWrap>
        </UserModeStyle.RecentVideoButton>
        {folders.map((folder: { id: number; name: string }) => (
          <div key={`${folder.name}-container`}>
            <UserModeStyle.ButtonsWrap
              selected={+href === folder.id}
              style={{ display: 'flex' }}
            >
              <UserModeStyle.FolderButton
                key={`${folder.name}-button`}
                to={`/category/${folder.id}`}
              >
                <UserModeStyle.ImageTextWrap>
                  {+href === folder.id ? (
                    <OpenFileSvg
                      key={`${folder.name}-open-folder`}
                      width={28}
                      height={28}
                    />
                  ) : (
                    <ClosedFileSvg
                      key={`${folder.name}-close-folder`}
                      width={28}
                      height={28}
                    />
                  )}
                  <UserModeStyle.CommonTitle key={folder.name}>
                    {folder.name}
                  </UserModeStyle.CommonTitle>
                </UserModeStyle.ImageTextWrap>
              </UserModeStyle.FolderButton>
              {+href === folder.id && (
                <UserModeStyle.ShowOptionButton>
                  <MoreOptionsSvg />
                </UserModeStyle.ShowOptionButton>
              )}
            </UserModeStyle.ButtonsWrap>
            {+href === folder.id && (
              <UserModeStyle.SubFolderWrap
                key={`${folder.name}-sub-folder-container`}
              >
                {menus.map((menu) => (
                  <UserModeStyle.SubFolder
                    key={`${folder.name}-${menu}-sub-folder`}
                  >
                    {menu}
                  </UserModeStyle.SubFolder>
                ))}
              </UserModeStyle.SubFolderWrap>
            )}
          </div>
        ))}
      </div>
      {isTopCategoryModalOpen && (
        <BlurBackground>
          <AddTopCategoryModal
            categoryName={categoryName}
            setCategoryName={setCategoryName}
            setIsSuccessAddCategoryModalOpen={setIsSuccessAddCategoryModalOpen}
          />
        </BlurBackground>
      )}
      {isSuccessAddCategoryModalOpen && (
        <BlurBackground>
          <SuccessAddCategoryModal
            folders={folders}
            setFolders={setFolders}
            categoryName={categoryName}
            setCategoryName={setCategoryName}
            setIsSuccessAddCategoryModalOpen={setIsSuccessAddCategoryModalOpen}
          />
        </BlurBackground>
      )}
    </>
  );
};

export default UserMode;
