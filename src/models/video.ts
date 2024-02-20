export type VideoVersionType = 'original' | 'revision';

export interface IVideoSubHeading {
  id: number;
  start_time: number;
  end_time: number;
  content: string;
  name: string;
}

export interface IVideoSummary {
  id: number;
  content: string;
}

export interface IVideoTag {
  name: string;
}

export interface IVideo {
  category_id?: number;
  video_id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  youtube_created_at: string;
  youtube_id: string;
  created_at: string;
  updated_at: string;
  subHeading: IVideoSubHeading[];
  summary: IVideoSummary[];
  tag: IVideoTag[];
}

export interface VideoResponse {
  videos: IVideo[];
}

export interface UpdateVideoSubHeading {
  id: number;
  name: string;
  content: string;
}

export interface UpdateVideoRequest {
  title?: string;
  description?: string;
  subheading?: UpdateVideoSubHeading[];
  summary?: IVideoSummary[];
}

export interface UpdateVideoCategoryRequest {
  video_id: (string | number)[];
}

export interface CreateVideoResponse {
  video_id: number;
}
