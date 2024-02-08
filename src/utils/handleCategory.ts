/* eslint-disable @typescript-eslint/no-explicit-any */
import { IFolderProps, ISubFolderProps } from 'types/category';

const handleCategory = () => {
  const initializeCategory = (res: any) => {
    const responseCategories = res.sort(
      (prev: { topCategoryId: number }, next: { topCategoryId: number }) => {
        if (prev.topCategoryId > next.topCategoryId) return 1;
        else return -1;
      },
    );
    const initializeCategories: IFolderProps[] = [];
    responseCategories.map((category: IFolderProps) => {
      if (!category.topCategoryId) {
        initializeCategories.push({ ...category, subFolders: [] });
      } else {
        const index = initializeCategories.findIndex(
          ({ categoryId }) => categoryId === category.topCategoryId,
        );
        initializeCategories[index].subFolders.push(category);
      }
    });
    return initializeCategories;
  };

  const deleteSubCategory = (
    myFolders: IFolderProps[],
    topId: number,
    deleteTarget: number | undefined,
  ) => {
    const newFolders = JSON.parse(JSON.stringify(myFolders));
    const deleteIndex = newFolders.findIndex(
      (newFolder: IFolderProps) => newFolder.categoryId === topId,
    );
    const preSubFolders = [...newFolders[deleteIndex].subFolders];
    const filteredSubFolders = preSubFolders.filter(
      (preSubFolder) => preSubFolder.categoryId !== deleteTarget,
    );
    newFolders[deleteIndex].subFolders = filteredSubFolders;
    return newFolders;
  };

  const deleteTopCategory = (myFolders: IFolderProps[], categoryId: number) => {
    const newFolders = myFolders.filter(
      (folder) => folder.categoryId !== categoryId,
    );
    return newFolders;
  };

  const insertCategory = (
    myFolders: IFolderProps[],
    insertedCategoryID: number | null | undefined,
    insertData: ISubFolderProps,
  ) => {
    const newFolders = JSON.parse(JSON.stringify(myFolders));
    const insertIndex = newFolders.findIndex(
      (newFolder: IFolderProps) => newFolder.categoryId === insertedCategoryID,
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
        categoryId: insertData.categoryId,
        name: insertData.name,
        topCategoryId: null,
        subFolders: [],
      },
      ...myFolders.slice(insertedCategoryID! + 1),
    ];
    return newFolders;
  };

  return {
    initializeCategory,
    deleteSubCategory,
    deleteTopCategory,
    insertCategory,
    insertSubToTopCategory,
  };
};
export default handleCategory;
