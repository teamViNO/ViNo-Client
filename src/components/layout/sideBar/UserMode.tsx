import LookSvg from '@/assets/icons/look.svg?react';
import * as UserModeStyle from '@/styles/layout/sideBar/UserMode.style';
import { useLocation } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { topCategoryModalState } from '@/stores/modal';
import { BlurBackground } from '@/styles/modals/common.style';
import AddTopCategoryModal from '@/components/modals/AddTopCategoryModal';
import SuccessAddCategoryModal from '@/components/modals/SuccessAddCategoryModal';
import { useEffect, useRef, useState } from 'react';
import TopCategory from './TopCategory';
import DeleteCategory from './DeleteCategory';

interface ISubFolderProps {
  categoryID: number;
  name: string;
  topCategoryID: number;
}

interface IFolderProps {
  categoryID: number;
  name: string;
  topCategoryID: null;
  subFolders: ISubFolderProps[];
}

const UserMode = () => {
  const isTopCategoryModalOpen = useRecoilValue(topCategoryModalState);
  const [isSuccessAddCategoryModalOpen, setIsSuccessAddCategoryModalOpen] =
    useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isSubAdded, setIsSubAdded] = useState(false);
  const [categoryName, setCategoryName] = useState('');
  const [myFolders, setMyFolders] = useState<IFolderProps[]>([]);
  const [folders, setFolders] = useState<IFolderProps[]>([
    { categoryID: 1, name: '기획', topCategoryID: null, subFolders: [] },
    { categoryID: 2, name: '디자인', topCategoryID: null, subFolders: [] },
    { categoryID: 3, name: '개발', topCategoryID: null, subFolders: [] },
    { categoryID: 4, name: '팁', topCategoryID: null, subFolders: [] },
    { categoryID: 5, name: '방법론', topCategoryID: null, subFolders: [] },
  ]);
  const [isSubCategoryModalOpen, setIsSubCategoryModalOpen] = useState(false);
  const subFolders: ISubFolderProps[] = [
    { categoryID: 6, name: '마케팅', topCategoryID: 1 },
    { categoryID: 7, name: '트렌드', topCategoryID: 2 },
    { categoryID: 8, name: '기업', topCategoryID: 3 },
    { categoryID: 9, name: '용어', topCategoryID: 3 },
    { categoryID: 10, name: '영화', topCategoryID: 3 },
  ];
  const grabedCategory = useRef<number | undefined>(undefined);
  const dropedCategory = useRef<number | undefined>(undefined);

  useEffect(() => {
    folders.forEach((folder: IFolderProps) => {
      subFolders.forEach((subFolder: ISubFolderProps) => {
        if (subFolder.topCategoryID === folder.categoryID) {
          folder.subFolders.push(subFolder);
        }
      });
    });
    setMyFolders(folders);
  }, []);

  const location = useLocation();
  const pathname = location.pathname.replace('/category/', '');
  const href = pathname === 'recent' ? 'recent' : pathname.split('/');
  const topId = Number(href[0]);
  const subId = Number(href[1]);

  const handleDeleteCategory = () => {
    if (!isNaN(subId)) {
      const index = folders.findIndex((folder) => folder.categoryID === topId);
      const preSubFolders = [...folders[index].subFolders];
      const filteredSubFolders = preSubFolders.filter(
        (preSubFolder) => preSubFolder.categoryID !== subId,
      );
      folders[index].subFolders = filteredSubFolders;
    } else {
      const newData = folders.filter((folder) => folder.categoryID !== topId);
      setFolders([...newData]);
    }
    setIsDeleteModalOpen(false);
  };

  const putCategoryFolder = async () => {
    // try {
    //   const data = await moveAPI(
    //     grabedCategory.current!,
    //     dropedCategory.current!,
    //   );
    //   console.log(data);
    // } catch (err) {
    //   console.log(err);
    // }
    // 잡은 카테고리, 놓은 카테고리 초기화
    grabedCategory.current = undefined;
    dropedCategory.current = undefined;
  };
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
        {myFolders.map((folder: IFolderProps) => (
          <TopCategory
            topId={topId}
            subId={subId}
            categoryID={folder.categoryID}
            name={folder.name}
            subFolders={folder.subFolders}
            grabedCategory={grabedCategory}
            dropedCategory={dropedCategory}
            setIsSubCategoryModalOpen={setIsSubCategoryModalOpen}
            setIsDeleteModalOpen={setIsDeleteModalOpen}
            putCategoryFolder={putCategoryFolder}
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
      {isDeleteModalOpen && (
        <BlurBackground>
          <DeleteCategory
            setIsDeleteModalOpen={setIsDeleteModalOpen}
            onDeleteClick={handleDeleteCategory}
          />
        </BlurBackground>
      )}
      {isSuccessAddCategoryModalOpen && (
        <BlurBackground>
          <SuccessAddCategoryModal
            folders={myFolders}
            setFolders={setFolders}
            categoryName={categoryName}
            setCategoryName={setCategoryName}
            setIsSuccessAddCategoryModalOpen={setIsSuccessAddCategoryModalOpen}
            isSubAdded={isSubAdded}
            setIsSubAdded={setIsSubAdded}
            topId={topId}
          />
        </BlurBackground>
      )}
    </>
  );
};

export default UserMode;
