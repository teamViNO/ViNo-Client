export interface sendSMSRequest {
    phone_number: string;
  }
  
export interface checkSMSRequest {
  verification_code : string;
}

export interface smsResponse {
  success : boolean;
  message : string;
}