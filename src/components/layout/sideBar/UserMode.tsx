import LookSvg from '@/assets/icons/look.svg?react';
import * as UserModeStyle from '@/styles/layout/sideBar/UserMode.style';
import { useLocation } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { topCategoryModalState } from '@/stores/modal';
import { BlurBackground } from '@/styles/modals/common.style';
import AddTopCategoryModal from '@/components/modals/AddTopCategoryModal';
import SuccessAddCategoryModal from '@/components/modals/SuccessAddCategoryModal';
import { useState } from 'react';
import TopCategory from './TopCategory';

interface IFolderProps {
  id: number;
  name: string;
}

const UserMode = () => {
  const isTopCategoryModalOpen = useRecoilValue(topCategoryModalState);
  const [isSuccessAddCategoryModalOpen, setIsSuccessAddCategoryModalOpen] =
    useState(false);
  const [isSubAdded, setIsSubAdded] = useState(false);
  const [categoryName, setCategoryName] = useState('');
  const [folders, setFolders] = useState<IFolderProps[]>([
    { id: 1, name: '기획' },
    { id: 2, name: '디자인' },
    { id: 3, name: '개발' },
    { id: 4, name: '팁' },
    { id: 5, name: '방법론' },
  ]);
  const [isSubCategoryModalOpen, setIsSubCategoryModalOpen] = useState(false);
  const [subFolders, setSubFolders] = useState<IFolderProps[]>([
    { id: 1, name: '마케팅' },
    { id: 2, name: '트렌드' },
    { id: 3, name: '기업' },
    { id: 4, name: '용어' },
  ]);

  const location = useLocation();
  const pathname = location.pathname.replace('/category/', '');
  const href = pathname === 'recent' ? 'recent' : pathname.split('/');
  const topId = Number(href[0]);
  const subId = Number(href[1]);
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
          <TopCategory
            topId={topId}
            subId={subId}
            id={folder.id}
            name={folder.name}
            subFolders={subFolders}
            setIsSubCategoryModalOpen={setIsSubCategoryModalOpen}
            key={folder.name}
          />
        ))}
      </div>
      {(isTopCategoryModalOpen || isSubCategoryModalOpen) && (
        <BlurBackground>
          <AddTopCategoryModal
            isTopCategoryModalOpen={isTopCategoryModalOpen}
            setIsSubCategoryModalOpen={setIsSubCategoryModalOpen}
            categoryName={categoryName}
            setCategoryName={setCategoryName}
            setIsSuccessAddCategoryModalOpen={setIsSuccessAddCategoryModalOpen}
            setIsSubAdded={setIsSubAdded}
          />
        </BlurBackground>
      )}
      {isSuccessAddCategoryModalOpen && (
        <BlurBackground>
          <SuccessAddCategoryModal
            folders={folders}
            setFolders={setFolders}
            subFolders={subFolders}
            setSubFolders={setSubFolders}
            categoryName={categoryName}
            setCategoryName={setCategoryName}
            setIsSuccessAddCategoryModalOpen={setIsSuccessAddCategoryModalOpen}
            isSubAdded={isSubAdded}
            setIsSubAdded={setIsSubAdded}
          />
        </BlurBackground>
      )}
    </>
  );
};

export default UserMode;
