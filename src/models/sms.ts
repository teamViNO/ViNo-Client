export interface sendSMSRequest {
    phone_number: string;
  }
  
  export interface sendSMSResponse {
    verificationCode: string;
  }