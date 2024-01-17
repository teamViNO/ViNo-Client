import LookSvg from '@/assets/icons/look.svg?react';
import ClosedFileSvg from '@/assets/icons/close-file.svg?react';
import * as UserModeStyle from '@/styles/layout/sideBar/UserMode.style';
import { useNavigate } from 'react-router-dom';

const UserMode = () => {
  const folders = ['기획', '디자인', '개발', '팁', '방법론'];
  const navigate = useNavigate();
  return (
    <div>
      <UserModeStyle.RecentVideoButton onClick={() => navigate('/category')}>
        <LookSvg width={28} height={28} />
        <UserModeStyle.CommonTitle>최근 읽은 영상</UserModeStyle.CommonTitle>
      </UserModeStyle.RecentVideoButton>
      {folders.map((folder: string) => (
        <UserModeStyle.FolderButton key={`${folder}button`}>
          <ClosedFileSvg key={`${folder}folder`} width={28} height={28} />
          <UserModeStyle.CommonTitle key={`${folder}`}>
            {folder}
          </UserModeStyle.CommonTitle>
        </UserModeStyle.FolderButton>
      ))}
    </div>
  );
};

export default UserMode;
