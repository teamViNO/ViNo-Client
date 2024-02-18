import * as CategoryTitleStyles from '@/styles/category/CategoryTitle.style';

interface ICategoryTitleProps {
  name: string | undefined;
  totalVideos: number | undefined;
}

const CategoryTitle = ({ name, totalVideos }: ICategoryTitleProps) => {
  return (
    <CategoryTitleStyles.Container>
      <CategoryTitleStyles.Title>{name}</CategoryTitleStyles.Title>
      <CategoryTitleStyles.Count>{totalVideos}</CategoryTitleStyles.Count>
    </CategoryTitleStyles.Container>
  );
};

export default CategoryTitle;
