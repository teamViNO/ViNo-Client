import * as CategoryTitleStyles from '@/styles/category/CategoryTitle.style';

interface ICategoryTitleProps {
  title: string;
  totalVideos: number;
}

const CategoryTitle = ({ title, totalVideos }: ICategoryTitleProps) => {
  return (
    <CategoryTitleStyles.Container>
      <CategoryTitleStyles.Title>{title}</CategoryTitleStyles.Title>
      <CategoryTitleStyles.Count>{totalVideos}</CategoryTitleStyles.Count>
    </CategoryTitleStyles.Container>
  );
};

export default CategoryTitle;
