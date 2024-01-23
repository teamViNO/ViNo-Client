import LookSvg from '@/assets/icons/look.svg?react';
import ClosedFileSvg from '@/assets/icons/close-file.svg?react';
import OpenFileSvg from '@/assets/icons/open-file.svg?react';
import * as UserModeStyle from '@/styles/layout/sideBar/UserMode.style';
import { useLocation } from 'react-router-dom';
import theme from '@/styles/theme';

const UserMode = () => {
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
    <div>
      <UserModeStyle.RecentVideoButton
        selected={href === 'recent'}
        to={'/category/recent'}
      >
        <LookSvg width={28} height={28} />
        <UserModeStyle.CommonTitle>최근 읽은 영상</UserModeStyle.CommonTitle>
      </UserModeStyle.RecentVideoButton>
      {folders.map((folder: { id: number; name: string }) => (
        <>
          <UserModeStyle.FolderButton
            key={`${folder.name}button`}
            selected={+href === folder.id}
            to={`/category/${folder.id}`}
          >
            {+href === folder.id ? (
              <OpenFileSvg
                key={`${folder.name}folder`}
                width={28}
                height={28}
              />
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
          {+href === folder.id && (
            <div style={{ marginTop: '12px', paddingLeft: '60px' }}>
              {menus.map((menu) => (
                <div
                  style={{
                    padding: '10px 0px',
                    marginBottom: '4px',
                    ...theme.typography.Body3,
                    color: theme.color.gray400,
                  }}
                >
                  {menu}
                </div>
              ))}
            </div>
          )}
        </>
      ))}
    </div>
  );
};

export default UserMode;
