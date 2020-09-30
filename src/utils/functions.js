import axios from 'axios';

//saving the access_token, token_type, expire_in returned by spotify login request
//expire_in is default to 1hr
export const getParamValues = (url) => {
  return url
    .slice(1)
    .split('&')
    .reduce((prev, curr) => {
      const [title, value] = curr.split('=');
      prev[title] = value;
      return prev;
    }, {});
};
// add the access_token to every axios API request call
export const setAuthHeader = () => {
  try {
    const params = JSON.parse(localStorage.getItem('params'));
    if (params) {
      axios.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${params.access_token}`;
    }
  } catch (error) {
    console.log('Error setting auth', error);
  }
};
