export const validateNickname = (nickname: string) =>
  !/^[a-zA-Z가-힣\s]{1,7}$/g.test(nickname);
