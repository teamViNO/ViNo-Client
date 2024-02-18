export type ValidatePassword = {
  ALPHA_UPPER: boolean;
  ALPHA_LOWER: boolean;
  SPECIAL_CHAR: boolean;
  NUMBER: boolean;
  LENGTH: boolean;
};

export const validateNickname = (nickname: string) =>
  !/^[a-zA-Z가-힣\d\s]{1,7}$/g.test(nickname);

export const validatePassword = (password: string): ValidatePassword => {
  return {
    ALPHA_UPPER: /[A-Z]/g.test(password),
    ALPHA_LOWER: /[a-z]/g.test(password),
    SPECIAL_CHAR: /[#?!@$%^&*-]/g.test(password),
    NUMBER: /\d/g.test(password),
    LENGTH: 8 <= password.length && password.length <= 13,
  };
};

export const validateYoutubeLink = (link: string) => {
  return /^(https?:\/\/)?(www.youtube.com|youtu.?be)\/.+/g.test(link);
};
