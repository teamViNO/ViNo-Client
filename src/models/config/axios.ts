export interface APIBaseResponse {
  isSuccess: boolean;
  success: boolean;

  message: string;

  code: string;
  status: number;
}

export interface APIResponse<T> extends APIBaseResponse {
  result: T;
}
