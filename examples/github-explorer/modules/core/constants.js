export const ENTER_KEY = 13;
export const HTTP_CODES = {
  401: 'Bad credentials'
};
export const API = {
  GITHUB: {
    auth: 'https://api.github.com/user',
    repos: (user) => `https://api.github.com/users/${user}/repos`
  }
};
