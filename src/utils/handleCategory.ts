import {
  IFolderProps,
  ISubFolderProps,
} from '@/components/layout/sideBar/UserMode';

const handleCategory = () => {
  const deleteCategory = (
    myFolders: IFolderProps[],
    topId: number,
    deleteTarget: number | undefined,
  ) => {
    const newFolders = [...myFolders];
    const deleteIndex = newFolders.findIndex(
      (newFolder) => newFolder.categoryID === topId,
    );
    const preSubFolders = [...newFolders[deleteIndex].subFolders];
    const filteredSubFolders = preSubFolders.filter(
      (preSubFolder) => preSubFolder.categoryID !== deleteTarget,
    );
    newFolders[deleteIndex].subFolders = filteredSubFolders;
    return newFolders;
  };
  const insertCategory = (
    myFolders: IFolderProps[],
    insertTarget: number | null | undefined,
    insertData: ISubFolderProps,
  ) => {
    const newFolders = [...myFolders];
    const insertIndex = newFolders.findIndex(
      (newFolder) => newFolder.categoryID === insertTarget,
    );
    newFolders[insertIndex].subFolders.push(insertData);
    return newFolders;
  };

  const insertSubToTopCategory = (
    myFolders: IFolderProps[],
    insertTarget: number | undefined,
    insertData: ISubFolderProps,
  ) => {
    const newFolders = [
      ...myFolders.slice(0, insertTarget! + 1),
      {
        categoryID: insertData.categoryID,
        name: insertData.name,
        topCategoryID: null,
        subFolders: [],
      },
      ...myFolders.slice(insertTarget! + 1),
    ];
    return newFolders;
  };

  return { deleteCategory, insertCategory, insertSubToTopCategory };
};
export default handleCategory;
