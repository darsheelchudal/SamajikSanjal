import React from "react";

function LoginPage() {
  return (
    <>
      <div className="nav h-20 flex items-center justify-center border-2 bg-slate-200">
        <div className="logo">
          <h1 className="font-bold text-2xl text-blue-500">Interlinked</h1>
        </div>
      </div>
      <div className="form flex justify-center my-10">
        <div className="card h-[400px] w-[800px] border-2 p-10 rounded-2xl">
          <div className="header mb-10 font-bold text-blue-700">
            Welcome to Interlinked, A new social platform for Healthy
            Conversation
          </div>
          <div className="form w-100">
            <div className="mb-5">
              <input
                type="text"
                name=""
                id=""
                className="border-2 bg-slate-100 w-[100%] h-[40px] pl-4 rounded-md shadow-md"
                placeholder="Email"
              />
            </div>
            <div className="mb-5">
              <input
                type="text"
                name=""
                id=""
                className="border-2 bg-slate-100 w-[100%] h-[40px] pl-4 rounded-md shadow-md"
                placeholder="Password"
              />
            </div>
            <div className="mb-5">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white w-full rounded-lg h-10 my-4"
              >
                Login
              </button>
            </div>
            <div className="">
              <h1>
                Don't have an account?
                <span className="mx-2 text-blue-500 font-semibold">
                  Sign up
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
