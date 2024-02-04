import {
  IFolderProps,
  ISubFolderProps,
} from '@/components/layout/sideBar/UserMode';

const handleCategory = () => {
  const deleteSubCategory = (
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

  const deleteTopCategory = (myFolders: IFolderProps[], categoryID: number) => {
    const newFolders = myFolders.filter(
      (folder) => folder.categoryID !== categoryID,
    );
    return newFolders;
  };

  const insertCategory = (
    myFolders: IFolderProps[],
    insertedCategoryID: number | null | undefined,
    insertData: ISubFolderProps,
  ) => {
    const newFolders = [...myFolders];
    const insertIndex = newFolders.findIndex(
      (newFolder) => newFolder.categoryID === insertedCategoryID,
    );
    newFolders[insertIndex].subFolders.push(insertData);
    return newFolders;
  };

  const insertSubToTopCategory = (
    myFolders: IFolderProps[],
    insertedCategoryID: number | undefined,
    insertData: ISubFolderProps,
  ) => {
    const newFolders = [
      ...myFolders.slice(0, insertedCategoryID! + 1),
      {
        categoryID: insertData.categoryID,
        name: insertData.name,
        topCategoryID: null,
        subFolders: [],
      },
      ...myFolders.slice(insertedCategoryID! + 1),
    ];
    return newFolders;
  };

  return {
    deleteSubCategory,
    deleteTopCategory,
    insertCategory,
    insertSubToTopCategory,
  };
};
export default handleCategory;
