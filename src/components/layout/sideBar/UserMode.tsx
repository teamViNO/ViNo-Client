import LookSvg from '@/assets/icons/look.svg?react';
import ClosedFileSvg from '@/assets/icons/close-file.svg?react';
import OpenFileSvg from '@/assets/icons/open-file.svg?react';
import * as UserModeStyle from '@/styles/layout/sideBar/UserMode.style';
import { useLocation } from 'react-router-dom';

const UserMode = () => {
  const folders = [
    { id: 1, name: '기획' },
    { id: 2, name: '디자인' },
    { id: 3, name: '개발' },
    { id: 4, name: '팁' },
    { id: 5, name: '방법론' },
  ];
  const location = useLocation();
  const pathname = location.pathname.replace('/category/', '');
  const href = pathname === 'recent' ? 'recent' : pathname;

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <UserModeStyle.RecentVideoButton
        selected={href === 'recent'}
        to={'/category/recent'}
      >
        <LookSvg width={28} height={28} />
        <UserModeStyle.CommonTitle>최근 읽은 영상</UserModeStyle.CommonTitle>
      </UserModeStyle.RecentVideoButton>
      {folders.map((folder: { id: number; name: string }) => (
        <UserModeStyle.FolderButton
          key={`${folder.name}button`}
          selected={+href === folder.id}
          to={`/category/${folder.id}`}
        >
          {+href === folder.id ? (
            <OpenFileSvg key={`${folder.name}folder`} width={28} height={28} />
          ) : (
            <ClosedFileSvg
              key={`${folder.name}folder`}
              width={28}
              height={28}
            />
          )}

          <UserModeStyle.CommonTitle key={`${folder.name}`}>
            {folder.name}
          </UserModeStyle.CommonTitle>
        </UserModeStyle.FolderButton>
      ))}
    </div>
  );
};

export default UserMode;
