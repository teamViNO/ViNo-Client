import { IVideo } from './video';

export interface ModelingProcessResponse {
  nextEndPoint: string;
  progress: string;
  videoId: string;
}

export interface ModelingProcessRequest {
  videoId: string;
}

export interface ModelingResponse {
  finalData: IVideo;
  message: string;
}
