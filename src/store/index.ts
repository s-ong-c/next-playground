import {
  Action,
  Dispatch,
  Middleware,
  MiddlewareAPI,
  ReducersMapObject,
  ThunkAction,
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';

import error from './error';

const rootReducer = combineReducers({
  error: error.reducer,
} as ReducersMapObject);

const persistMiddleware: Middleware = ({}: MiddlewareAPI) => (
  next: Dispatch,
) => (action) => {
  const returnValue = next(action);

  return returnValue;
};

export type IRootState = ReturnType<typeof rootReducer>;
export default configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware(), persistMiddleware],
});
export type AppThunk = ThunkAction<void, IRootState, unknown, Action<string>>;
