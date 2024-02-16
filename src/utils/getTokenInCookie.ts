const getTokenInCookie = () =>
  document.cookie
    .split(';')
    .find((cookie) => cookie.includes('tempToken'))
    ?.split('=')[1];

export default getTokenInCookie;
