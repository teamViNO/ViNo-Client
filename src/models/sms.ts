export interface sendSMSRequest {
    phone_number: string;
  }
  
export interface checkSMSRequest {
  verification_code : number;
}

export interface smsResponse {
  success : boolean;
  message : string;
  token : string;
}