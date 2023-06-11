import type {RootState} from '@redux/reducers';
import {createSelector} from '@reduxjs/toolkit';

const usersSelector = (state: RootState) => state.users;

export const allUsersLoading = createSelector(
  usersSelector,
  usersState => usersState.usersList.loading,
);
export const allUsers = createSelector(
  usersSelector,
  usersState => usersState.usersList.users || [],
);
export const usersListCurrentPage = createSelector(
  usersSelector,
  usersState => usersState.usersList.page,
);
export const usersListTotalResults = createSelector(
  usersSelector,
  usersState => usersState.usersList.total,
);
export const usersListTotalPages = createSelector(
  usersSelector,
  usersState => usersState.usersList.total_pages,
);

export const userDetailsLoading = createSelector(
  usersSelector,
  usersState => usersState.userDetails.loading,
);
export const userDetails = createSelector(
  usersSelector,
  usersState => usersState.userDetails.details,
);
