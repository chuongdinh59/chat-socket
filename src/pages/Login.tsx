import * as React from "react";

export interface LoginProps {}

export default function Login(props: LoginProps) {
  return (
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
          <form className="w-[40%]  float-right mr-4 mt-[12%] p-3 shadow-2xl ">
            <h3 className="text-black font-semibold	 text-3xl text-center mb-3">
              Login
            </h3>
            <div className="mb-4">
              <h3 className="text-[16px ] mb-2">Username</h3>
              <input
                type="text"
                placeholder="Username"
                className=" outline-none w-full rounded-lg p-2 border-2 border-cyan-900 focus: border-purple-500"
              />
            </div>
            <div className="">
              <h3 className="text-[16px ] mb-2">Password</h3>
              <input
                type="text"
                placeholder="Password"
                className=" outline-none w-full rounded-lg p-2 border-2 border-purple-500"
              />
            </div>
            <span className="block p-2 text-xs">Do you want register now?</span>
            <button className="font-semibold w-[100%] p-2 text-stone-50 bg-purple-500 my-0 mx-[auto] rounded-lg">
              Login Now !
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
