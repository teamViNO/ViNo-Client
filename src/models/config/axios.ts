export interface APIBaseResponse {
  status: number;
  success: boolean;
  message: string;
  code: string;
}

export interface APIResponse<T> extends APIBaseResponse {
  result: T;
}
