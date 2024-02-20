export type ModelingStatus =
  | 'NONE'
  | 'CONTINUE'
  | 'ERROR'
  | 'STOP'
  | 'COMPLETE';

export interface ModelingProcessResponse {
  nextEndPoint: string;
  progress: string;
  videoId: string;
}

export interface ModelingProcessRequest {
  videoId: string;
}

export interface ModelingSubHeading {
  content: string;
  end_time: number;
  name: string;
  start_time: number;
}

export interface ModelingSummary {
  content: string;
}

export interface ModelingTag {
  name: string;
}

export interface ModelingFinalData {
  description: string;
  link: string;
  subheading: ModelingSubHeading[];
  summary: ModelingSummary[];
  tag: ModelingTag[];
  title: string;
  youtube_created_at: string;
  youtube_id: string;

  created_at: string;
  updated_at: string;
}

export interface ModelingResponse {
  finalData: ModelingFinalData;
  message: string;
}
