import {
  createUserFailed,
  createUserRequest,
  createUserSuccess,
  deleteUserRequest,
  getUserDetailsFailed,
  getUserDetailsRequest,
  getUserDetailsSuccess,
  getUsersListFailed,
  getUsersListRequest,
  getUsersListSuccess,
  updateUserRequest,
} from './actions';
import * as UsersAPI from './apiCall';
import {
  UsersSuccessPayload,
  UsersRequestPayload,
  UserDetailsRequestPayload,
  UserDetailsSuccessPayload,
  CreateUserRequestPayload,
  CreateUserSuccessPayload,
  UpdateUserRequestPayload,
  UpdateUserSuccessPayload,
  DeleteUserRequestPayload,
} from './types';
import i18n from '@i18n';
import {messageHandlerSet} from '@redux/messageHandler/actions';
import {PayloadAction} from '@reduxjs/toolkit';
import {call, ForkEffect, put, takeLatest} from 'redux-saga/effects';

function* getUsersListSaga({payload}: PayloadAction<UsersRequestPayload>) {
  try {
    const response: UsersSuccessPayload = yield call(UsersAPI.getUsers, {
      ...payload,
    });

    if (!response) {
      yield put(getUsersListSuccess(response));
    } else {
      yield put(getUsersListFailed());
    }
  } catch (err) {
    yield put(getUsersListFailed());
  }
}

function* getUserDetailsSaga({
  payload,
}: PayloadAction<UserDetailsRequestPayload>) {
  try {
    const response: UserDetailsSuccessPayload = yield call(
      UsersAPI.getUserDetails,
      {...payload},
    );

    if (!response) {
      yield put(getUserDetailsSuccess(response));
    } else {
      yield put(getUserDetailsFailed());
    }
  } catch (err) {
    yield put(getUserDetailsFailed());
  }
}

function* createUserSaga({payload}: PayloadAction<CreateUserRequestPayload>) {
  try {
    const response: CreateUserSuccessPayload = yield call(UsersAPI.createUser, {
      ...payload,
    });

    if (!response) {
      yield put(createUserSuccess(response));
      yield put(
        messageHandlerSet({
          message: i18n.t('Homepage.UserCreated'),
          status: 'success',
        }),
      );
    } else {
      yield put(createUserFailed());
      yield put(
        messageHandlerSet({
          message: i18n.t('Homepage.UserNotCreated'),
          status: 'error',
        }),
      );
    }
  } catch (err: any) {
    yield put(createUserFailed());
    yield put(
      messageHandlerSet({
        message: err?.message?.message ?? i18n.t('Homepage.UserNotCreated'),
        status: 'error',
      }),
    );
  }
}

function* updateUserSaga({payload}: PayloadAction<UpdateUserRequestPayload>) {
  try {
    const response: UpdateUserSuccessPayload = yield call(UsersAPI.updateUser, {
      ...payload,
    });

    if (!response) {
      yield put(
        messageHandlerSet({
          message: i18n.t('Homepage.UserUpdated'),
          status: 'success',
        }),
      );
    } else {
      yield put(
        messageHandlerSet({
          message: i18n.t('Homepage.UserNotUpdated'),
          status: 'error',
        }),
      );
    }
  } catch (err: any) {
    yield put(
      messageHandlerSet({
        message: err?.message?.message ?? i18n.t('Homepage.UserNotUpdated'),
        status: 'error',
      }),
    );
  }
}

function* deleteUserSaga({payload}: PayloadAction<DeleteUserRequestPayload>) {
  try {
    const response: {status: number} = yield call(UsersAPI.deleteUser, {
      ...payload,
    });

    if (response.status === 204) {
      yield put(
        messageHandlerSet({
          message: i18n.t('Homepage.UserDeleted'),
          status: 'success',
        }),
      );
    } else {
      yield put(
        messageHandlerSet({
          message: i18n.t('Homepage.UserNotDeleted'),
          status: 'error',
        }),
      );
    }
  } catch (err: any) {
    yield put(
      messageHandlerSet({
        message: err?.message?.message ?? i18n.t('Homepage.UserNotDeleted'),
        status: 'error',
      }),
    );
  }
}

function* usersSaga(): Generator<ForkEffect<never>, void> {
  yield takeLatest(getUsersListRequest.type, getUsersListSaga);
  yield takeLatest(getUserDetailsRequest.type, getUserDetailsSaga);
  yield takeLatest(createUserRequest.type, createUserSaga);
  yield takeLatest(updateUserRequest.type, updateUserSaga);
  yield takeLatest(deleteUserRequest.type, deleteUserSaga);
}

export default usersSaga;
