import messagesReducer from './messageHandler/reducers';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {usersReducer} from '@redux/components/reducers';
import {persistCombineReducers} from 'redux-persist';

const reducers = {
  users: usersReducer,
  messages: messagesReducer,
};

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  timeout: undefined,
  whitelist: [''],
};

export const persistedRootReducer = persistCombineReducers(
  persistConfig,
  reducers,
);

export type RootState = ReturnType<typeof persistedRootReducer>;

export default persistedRootReducer;
