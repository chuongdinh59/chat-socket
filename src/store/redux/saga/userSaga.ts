import { call, put } from "redux-saga/effects";
import { userNP } from "../../../interface/index";
import {
  fetchfriends,
  fetchUser,
  setfriends,
  setLoading,
  setUser,
} from "../reducers/userSlice";
import { User } from "./../../../interface/index";
import { authService } from "./../../../service/userService";

export function* fetchLoginSaga({ payload }: { payload: userNP }) {
  yield put(setLoading(true));
  yield call(authService.login, payload);
  yield put(fetchUser());
}

export function* fetchUserSaga() {
  let user: User;
  try {
    user = yield call(authService.getUser);
  } catch (error) {
    // handle loi token
    yield call(authService.refreshToken);
    user = yield call(authService.getUser);
  }
  yield put(setUser(user));
  yield put(setLoading(false));
  yield put(fetchfriends());
}
export function* fetchfriendsaga() {
  const allfriends: Array<User> = yield call(authService.getAllfriends);
  yield put(setfriends(allfriends));
}
