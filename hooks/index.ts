// all implemented hooks go from here

export { default as useStorage } from './useStorage';
export { default as useAxios } from './useAxios';
export { default as useLayout } from './useLayout';
export { default as useDetectUser } from './useDetectUser';
export { default as useUsername } from './useUsername';
export { default as useAlert } from './useAlert';
export { default as useOwnerChecker } from './useOwnerChecker';

// Auth
export { default as useRegister } from './Auth/useRegister';
export { default as useLogin } from './Auth/useLogin';
export { default as useToken } from './Auth/useToken';
export { default as useAuthChecker } from './Auth/useAuthChecker';

// Context
export { default as useLoginContext } from './Context/useLoginContext';
export { default as useSearchContext } from './Context/useSearchContext';

//Post
export { default as useCreatePost } from './Post/useCreatePost';
export { default as useEditPost } from './Post/useEditPost';

//Comment
export { default as useCreateComment } from './Post/Comment/useCreateComment';