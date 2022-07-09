import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import userReducer, { fetchUser } from "./redux/reducers/userSlice";
import chatReducer from "./redux/reducers/chatSlice";
import rootSaga from "./redux/saga";

const sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

export const store = configureStore({
  reducer: {
    user: userReducer,
    chat: chatReducer,
  },
  middleware,
});

sagaMiddleware.run(rootSaga);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

const token = localStorage.getItem("token");

if (token) {
  store.dispatch(fetchUser());
}
