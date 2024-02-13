export interface IVideoProps {
  video_id: number;
  category_id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  created_at: string;
  youtube_created_at: string;
  tag: [{ name: string }];
}
