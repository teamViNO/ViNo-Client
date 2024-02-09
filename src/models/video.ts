export type VideoVersionType = 'original' | 'revision';

export interface IVideoSubHeading {
  id: number;
  start_time: string;
  end_time: string;
  content: string;
}

export interface IVideoSummary {
  id: number;
  content: string;
}

export interface IVideoTag {
  name: string;
}

export interface IVideo {
  video_id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  youtube_created_at: string;
  created_at: string;
  updated_at: string;
  subHeading: IVideoSubHeading[];
  summary: IVideoSummary[];
  tag: IVideoTag[];
}

export interface VideoResponse {
  videos: IVideo[];
}
