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

export interface CheckEmailResponse {}

export interface JoinRequest {
  name: string;
  email: string;
  password: string;
  check_password: string;
  birth_date: string;
  gender: string;
  phone_number: string;
}

export interface JoinResponse {}

export interface MyInfoResponse {
  birth_date: string;
  email: string;
  gender: string;
  name: string;
  nick_name: string;
  phone_number: string;
  platform?: 'kakao' | 'naver';
}

export interface UpdateMyInfoRequest {
  nick_name: string;
  gender: string;
}

export interface UpdatePasswordRequest {
  old_password: string;
  new_password: string;
  confirm_password: string;
}
