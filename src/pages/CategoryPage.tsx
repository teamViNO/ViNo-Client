import CategoryTitle from '@/components/category/CategoryTitle';
import { categoryItems } from '@/components/category/dummy';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CategoryPage = () => {
  const params = useParams();
  const [title, setTitle] = useState('');

  useEffect(() => {
    if (!params.id) {
      // 최근 동영상 가져오는 로직
      setTitle('최근 읽은 영상');
    } else {
      // params.id 값에 따라 가져오는 로직
      setTitle(params.id);
    }
  }, [params.id]);

  return (
    <div style={{ padding: '60px 60px 0px 120px' }}>
      <CategoryTitle title={title} totalVideos={categoryItems.length} />
    </div>
  );
};

export default CategoryPage;
