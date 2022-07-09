import { Formik } from "formik";
import React, { useLayoutEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import socket from "../config/socket";
import { RootState } from "../store";
import { authState, fetchLogin } from "../store/redux/reducers/userSlice";
export interface LoginProps {}

export default function Login(props: LoginProps) {
  const dispatch = useDispatch();
  const user: authState = useSelector((state: RootState) => state.user);
  const memoizedValue = useMemo(() => user, [user.id, user.loading]);
  const navigate = useNavigate();
  useLayoutEffect(() => {
    if (!!user.name && !user?.loading) {
      navigate("/chat");
    }
  }, [memoizedValue.name, memoizedValue.loading]);
  return (
    <React.Fragment>
      {user.loading ? (
        <div> LOADING ...</div>
      ) : (
        <div className="h-screen w-screen  border-ra justify-center flex items-center bg-center  bg-[url('./src/assets/rain.jpg')]">
          <div className="absolute w-full h-full bg-opacity-5 bg-zinc-800"></div>
          <div className="w-[60%] h-[70%] rounded-2xl bg-slate-50 z-10 relative overflow-hidden ">
            <div>
              <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 absolute left-[-35%] h-[100vh] right-[50%] bottom-0 rounded-full rotate-[-45deg]"></div>
              <img
                src="./src/assets/login.png"
                className="absolute w-[40%] h-[40%] bottom-[20%] left-[4%] "
                alt=""
              />
            </div>

            <div>
              <Formik
                initialValues={{ username: "", password: "" }}
                validate={(values) => {
                  const errors: { username?: String; password?: String } = {};
                  if (!values.username) {
                    errors.username = "Required";
                  } else if (values.username.length <= 2) {
                    errors.username = "Invalid username";
                  }
                  if (!values.password) {
                    errors.password = "Required";
                  } else if (
                    !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(
                      values.password
                    )
                  ) {
                    errors.password = "Invalid  password";
                  }

                  return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                  dispatch(fetchLogin(values));
                }}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  /* and other goodies */
                }) => (
                  <form
                    className="w-[40%]  float-right mr-4 mt-[12%] p-3 shadow-2xl "
                    onSubmit={handleSubmit}
                  >
                    <h3 className="text-black font-semibold	 text-3xl text-center mb-3">
                      Login
                    </h3>
                    <div className="mb-4">
                      <h3 className="text-[16px ] mb-2">Username</h3>
                      <input
                        placeholder="Username"
                        type="username"
                        name="username"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.username}
                        className=" outline-none w-full rounded-lg p-2 border-2 border-cyan-900 focus: border-purple-500"
                      />
                      {errors.username && touched.username && (
                        <span className="text-red-500 text-sm">
                          {errors.username}
                        </span>
                      )}
                    </div>
                    <div className="">
                      <h3 className="text-[16px ] mb-2">Password</h3>
                      <input
                        placeholder="Password"
                        className=" outline-none w-full rounded-lg p-2 border-2 border-purple-500"
                        type="password"
                        name="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                      />
                      {errors.password && touched.password && (
                        <span className="text-red-500 text-sm">
                          {errors.password}
                        </span>
                      )}
                    </div>
                    <span className="block p-2 text-xs">
                      Do you want register now?
                    </span>
                    <button
                      type="submit"
                      disabled={Object.keys(errors).length !== 0}
                      className="font-semibold w-[100%] p-2 text-stone-50 bg-purple-500 my-0 mx-[auto] rounded-lg disabled:bg-slate-500"
                    >
                      Login Now !
                    </button>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}
