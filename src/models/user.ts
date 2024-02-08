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

export interface JoinRequest {
  name: string;
  email: string;
  password: string;
	check_password: string;
  birth_date: string;
  gender: string;
  phone_number: string;
}

export interface JoinResponse {
}
