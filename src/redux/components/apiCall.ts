import {URL_API_ROUTE} from './comom';
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
import ApiClient from '@api';

export async function getUsers({pageParam, per_page}: UsersRequestPayload) {
  try {
    const response = await ApiClient.get<UsersSuccessPayload>(
      `${'API_URL'}/users`,
      {
        params: {
          ...(pageParam && {
            page: pageParam,
          }),
          ...(per_page && {
            per_page,
          }),
        },
      },
    );

    return response.data;
  } catch (error) {
    console.error('getUsers - Error: ', error);
    throw error;
  }
}

export async function getUserDetails({userId}: UserDetailsRequestPayload) {
  try {
    const response = await ApiClient.get<UserDetailsSuccessPayload>(
      `${'API_URL'}/users/${userId}`,
    );

    return response.data;
  } catch (error) {
    console.error('getUserDetails - Error: ', error);
    throw error;
  }
}

export async function createUser({name, job}: CreateUserRequestPayload) {
  try {
    const response = await ApiClient.post<CreateUserSuccessPayload>(
      `${'API_URL'}/users`,
      {
        params: {
          name,
          job,
        },
      },
    );

    return response.data;
  } catch (error) {
    console.error('createUser - Error: ', error);
    throw error;
  }
}

export async function updateUser({
  userId,
  name,
  job,
}: UpdateUserRequestPayload) {
  try {
    const response = await ApiClient.put<UpdateUserSuccessPayload>(
      `${'API_URL'}/users/${userId}`,
      {
        params: {
          name,
          job,
        },
      },
    );

    return response.data;
  } catch (error) {
    console.error('updateUser - Error: ', error);
    throw error;
  }
}

export async function deleteUser({userId}: DeleteUserRequestPayload) {
  try {
    const response = await ApiClient.delete(`${'API_URL'}/users/${userId}`);

    return response;
  } catch (error) {
    console.error('deleteUser - Error: ', error);
    throw error;
  }
}
