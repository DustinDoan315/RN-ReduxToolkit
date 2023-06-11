import type {RootState} from '../reducers';
import {createSelector} from '@reduxjs/toolkit';

const messageHandlerSelector = (state: RootState) => state.messages;

export const messageHandlerFullInfo = createSelector(
  messageHandlerSelector,
  messageState => messageState,
);
