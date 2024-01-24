import LookSvg from '@/assets/icons/look.svg?react';
import ClosedFileSvg from '@/assets/icons/close-file.svg?react';
import OpenFileSvg from '@/assets/icons/open-file.svg?react';
import * as UserModeStyle from '@/styles/layout/sideBar/UserMode.style';
import { useLocation } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { topCategoryModalState } from '@/stores/modal';
import { BlurBackground } from '@/styles/modals/common.style';
import AddTopCategoryModal from '@/components/modals/AddTopCategoryModal';

const UserMode = () => {
  const isTopCategoryModalOpen = useRecoilValue(topCategoryModalState);
  const folders = [
    { id: 1, name: '기획' },
    { id: 2, name: '디자인' },
    { id: 3, name: '개발' },
    { id: 4, name: '팁' },
    { id: 5, name: '방법론' },
  ];
  const menus = ['마케팅', '트렌드', '기업', '용어'];
  const location = useLocation();
  const pathname = location.pathname.replace('/category/', '');
  const href = pathname === 'recent' ? 'recent' : pathname;

  return (
    <>
      <div>
        <UserModeStyle.RecentVideoButton
          selected={href === 'recent'}
          to={'/category/recent'}
        >
          <LookSvg width={28} height={28} />
          <UserModeStyle.CommonTitle>최근 읽은 영상</UserModeStyle.CommonTitle>
        </UserModeStyle.RecentVideoButton>
        {folders.map((folder: { id: number; name: string }) => (
          <div key={`${folder.name}-container`}>
            <UserModeStyle.FolderButton
              key={`${folder.name}-button`}
              selected={+href === folder.id}
              to={`/category/${folder.id}`}
            >
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
            </UserModeStyle.FolderButton>
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
          <AddTopCategoryModal />
        </BlurBackground>
      )}
    </>
  );
};

export default UserMode;
