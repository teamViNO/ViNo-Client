export interface ISubFolderProps {
  categoryId: number;
  name: string;
  topCategoryId: number | null;
}

export interface IFolderProps {
  categoryId: number;
  name: string;
  topCategoryId: null;
  subFolders: ISubFolderProps[];
}

export interface ISelectedCategoryProps {
  name: string;
  categoryId: number;
}

export interface ITagProps {
  tag_id: number;
  name: string;
}

export interface IEditProps {
  activated: boolean;
  categoryId: number;
}

export interface IAddCategoryModalProps {
  location: string;
  isOpen: boolean;
  categoryId: number;
}
