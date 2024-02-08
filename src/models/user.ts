export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}

export interface CheckEmailRequest {
  email: string;
}

export interface CheckEmailResponse {
}

export interface getNicknameResponse {
  nickname: string;
}