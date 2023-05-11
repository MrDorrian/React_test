import queryString from 'query-string';
import { config } from "../config";

export const getUsers = (options = {}) => {
  const defaultOptions = {
    page: 1,
    results: config.DEFAULT_AMOUNT,
    inc: config.INCLUDE_FIELDS,
    seed: config.API_KEY,
  };

  const finalOptions = {
    ...defaultOptions,
    ...options,
  };

  const queryParams = queryString.stringify(finalOptions, {
    arrayFormat: 'comma',
  });

  return fetch(`${config.BASE_URL}/?${queryParams}`)
    .then(res => res.json())
};
