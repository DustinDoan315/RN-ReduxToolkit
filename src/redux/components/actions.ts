import {
  CreateUserRequestPayload,
  CreateUserSuccessPayload,
  DeleteUserRequestPayload,
  UpdateUserRequestPayload,
  UpdateUserSuccessPayload,
  UserDetailsRequestPayload,
  UserDetailsSuccessPayload,
  UsersRequestPayload,
  UsersSuccessPayload,
} from './types';
import {createAction} from '@reduxjs/toolkit';

export const getUsersListRequest = createAction<UsersRequestPayload>(
  'ACTION/GET_USERS_LIST_REQUEST',
);
export const getUsersListSuccess = createAction<UsersSuccessPayload>(
  'ACTION/GET_USERS_LIST_SUCCESS',
);
export const getUsersListFailed = createAction('ACTION/GET_USERS_LIST_FAILED');

export const getUserDetailsRequest = createAction<UserDetailsRequestPayload>(
  'ACTION/GET_USER_DETAILS_REQUEST',
);
export const getUserDetailsSuccess = createAction<UserDetailsSuccessPayload>(
  'ACTION/GET_USER_DETAILS_SUCCESS',
);
export const getUserDetailsFailed = createAction(
  'ACTION/GET_USER_DETAILS_FAILED',
);

export const createUserRequest = createAction<CreateUserRequestPayload>(
  'ACTION/CREATE_USER_REQUEST',
);
export const createUserSuccess = createAction<CreateUserSuccessPayload>(
  'ACTION/CREATE_USER_SUCCESS',
);
export const createUserFailed = createAction('ACTION/CREATE_USER_FAILED');

export const updateUserRequest = createAction<UpdateUserRequestPayload>(
  'ACTION/UPDATE_USER_REQUEST',
);
export const updateUserSuccess = createAction<UpdateUserSuccessPayload>(
  'ACTION/UPDATE_USER_SUCCESS',
);
export const updateUserFailed = createAction('ACTION/UPDATE_USER_FAILED');

export const deleteUserRequest = createAction<DeleteUserRequestPayload>(
  'ACTION/DELETE_USER_REQUEST',
);
export const deleteUserSuccess = createAction('ACTION/DELETE_USER_SUCCESS');
export const deleteUserFailed = createAction('ACTION/DELETE_USER_FAILED');
