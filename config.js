
let baseUrl;

if (process.env.NODE_ENV === 'development') {
    baseURL = 'https://reqres.in/api/';
} else if (process.env.NODE_ENV === 'production') {
    baseURL = 'https://reqres.in/api/';
}

/*constant of apps for API call */
export const API_VERSION = "v1";
export const BASE_URL = baseURL;
export const USERS_API_URL = 'users';