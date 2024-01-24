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
import useOutsideClick from '@/hooks/useOutsideClick';

interface IFolderProps {
  id: number;
  name: string;
}

const UserMode = () => {
  const isTopCategoryModalOpen = useRecoilValue(topCategoryModalState);
  const [isSuccessAddCategoryModalOpen, setIsSuccessAddCategoryModalOpen] =
    useState(false);
  const [isSubAdded, setIsSubAdded] = useState(false);
  const [folderOptionModalOpen, setFolderOptionModalOpen] = useState(false);
  const [categoryName, setCategoryName] = useState('');
  const options = ['추가', '수정', '삭제', '이동'];
  const [folders, setFolders] = useState<IFolderProps[]>([
    { id: 1, name: '기획' },
    { id: 2, name: '디자인' },
    { id: 3, name: '개발' },
    { id: 4, name: '팁' },
    { id: 5, name: '방법론' },
  ]);
  const [isSubCategoryModalOpen, setIsSubCategoryModalOpen] = useState(false);
  const [menus, setMenus] = useState<IFolderProps[]>([
    { id: 1, name: '마케팅' },
    { id: 2, name: '트렌드' },
    { id: 3, name: '기업' },
    { id: 4, name: '용어' },
  ]);
  const [folderOptionModalRef] = useOutsideClick<HTMLDivElement>(() =>
    setFolderOptionModalOpen(false),
  );

  const location = useLocation();
  const pathname = location.pathname.replace('/category/', '');
  const href = pathname === 'recent' ? 'recent' : pathname.split('/');
  const topId = Number(href[0]);
  const subId = Number(href[1]);

  const handleOptionClick = (e: React.MouseEvent, option: string) => {
    if (option === '추가') {
      e.stopPropagation();
      setFolderOptionModalOpen(false);
      setIsSubCategoryModalOpen(true);
    }
  };

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
            <UserModeStyle.ButtonsWrap selected={topId === folder.id && !subId}>
              <UserModeStyle.FolderButton
                key={`${folder.name}-button`}
                to={`/category/${folder.id}`}
              >
                <UserModeStyle.ImageTextWrap>
                  {topId === folder.id ? (
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
              {topId === folder.id && !subId && (
                <UserModeStyle.ShowOptionButton
                  onClick={(e: React.MouseEvent) => {
                    e.stopPropagation();
                    setFolderOptionModalOpen(true);
                  }}
                >
                  <MoreOptionsSvg />
                </UserModeStyle.ShowOptionButton>
              )}
              {folderOptionModalOpen && topId === folder.id && (
                <UserModeStyle.OptionsContainer>
                  <BlurBackground />
                  <UserModeStyle.OptionsWrap ref={folderOptionModalRef}>
                    {options.map((option) => (
                      <UserModeStyle.OptionButton
                        onClick={(e) => handleOptionClick(e, option)}
                        key={option}
                      >
                        {option}
                      </UserModeStyle.OptionButton>
                    ))}
                  </UserModeStyle.OptionsWrap>
                </UserModeStyle.OptionsContainer>
              )}
            </UserModeStyle.ButtonsWrap>
            {topId === folder.id && (
              <UserModeStyle.SubFolderWrap
                key={`${folder.name}-sub-folder-container`}
              >
                {menus.map((menu) => (
                  <UserModeStyle.SubFolder
                    selected={subId === menu.id}
                    to={`/category/${topId}/${menu.id}`}
                    key={`${folder.name}-${menu.name}-sub-folder`}
                  >
                    {menu.name}
                    {subId === menu.id && (
                      <UserModeStyle.ShowOptionButton
                        onClick={() => {
                          // e.stopPropagation();
                          // setFolderOptionModalOpen(true);
                        }}
                      >
                        <MoreOptionsSvg width={18} height={18} />
                      </UserModeStyle.ShowOptionButton>
                    )}
                  </UserModeStyle.SubFolder>
                ))}
              </UserModeStyle.SubFolderWrap>
            )}
          </div>
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
            menus={menus}
            setMenus={setMenus}
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
