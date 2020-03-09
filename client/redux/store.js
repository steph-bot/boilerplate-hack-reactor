import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import appSlice from './slices/app';

const rootReducer = combineReducers({
  app: appSlice.reducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;
