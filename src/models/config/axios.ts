export interface APIBaseResponse {
  status: number;
  success: boolean;
  message: string;
}

export interface APIResponse<T> extends APIBaseResponse {
  result: T;
}
