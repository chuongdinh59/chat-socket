import { takeEvery } from "redux-saga/effects";
import { fetchfriends, fetchLogin, fetchUser } from "../reducers/userSlice";
import { fetchfriendsaga, fetchLoginSaga, fetchUserSaga } from "./userSaga";

const typeFechLogin = fetchLogin().type;
const typeFetchUser = fetchUser().type;
const typeFetchfriends = fetchfriends().type;
function* rootSaga() {
  yield takeEvery(typeFechLogin, fetchLoginSaga);
  yield takeEvery(typeFetchUser, fetchUserSaga);
  yield takeEvery(typeFetchfriends, fetchfriendsaga);
}

export default rootSaga;
