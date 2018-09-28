
let baseUrl;

if (process.env.NODE_ENV === 'development') {
    baseUrl = 'https://reqres.in/api/';
} else if (process.env.NODE_ENV === 'production') {
    baseUrl = 'https://reqres.in/api/';
}

/*constant of apps for API call */
export const API_VERSION = "v1";
export const BASE_URL = baseUrl;
export const USERS_API_URL = 'users';