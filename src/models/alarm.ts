export interface IAlarm {
  state: 'success';
  type: 'video' | 'notice';
  alarm_id: number;
  video_id?: number;
  title?: string;
  content: string;
  is_confirm: number;
  created_at: string;
  updated_at: string;
}

export interface AlarmResponse {
  alarms: IAlarm[];
}

export interface DeleteAlarmRequest {
  alarms: number[];
}

export interface DeleteAlarmResponse {
  status: string;
}
