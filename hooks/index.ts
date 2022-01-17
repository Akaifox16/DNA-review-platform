// all implemented hooks go from here

export { default as useStorage } from './useStorage';
export { default as useAxios } from './useAxios';
export { default as useLayout } from './useLayout';
export { default as useDetectUser } from './useDetectUser';
export { default as useUsername } from './useUsername';

// Auth
export { default as useRegister } from './Auth/useRegister';
export { default as useLogin } from './Auth/useLogin';
export { default as useToken } from './Auth/useToken';

// Context
export { default as useLoginContext } from './Context/useLoginContext';