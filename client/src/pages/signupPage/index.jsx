import React from "react";
import { Link } from "react-router-dom";

function SignupPage() {
  return (
    <>
      <div className="nav h-20 flex items-center justify-center border-2 bg-slate-200">
        <div className="logo">
          <h1 className="font-bold text-2xl text-blue-500">Interlinked</h1>
        </div>
      </div>
      <div className="form flex justify-center my-10">
        <div className="card h-[680px] w-full max-w-[800px] border-2 p-10 rounded-2xl">
          <div className="header mb-10 font-bold text-blue-700 text-center">
            Welcome to Interlinked, A new social platform for Healthy
            Conversation
          </div>
          <div className="form w-full">
            <div className="flex flex-col md:flex-row md:justify-between">
              <div className="mb-5 md:w-[48%]">
                <input
                  type="text"
                  name=""
                  id=""
                  className="border-2 bg-slate-100 h-[40px] pl-4 rounded-md shadow-md w-full"
                  placeholder="Full Name"
                />
              </div>
              <div className="mb-5 md:w-[48%]">
                <input
                  type="text"
                  name=""
                  id=""
                  className="border-2 bg-slate-100 h-[40px] pl-4 rounded-md shadow-md w-full"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="mb-5">
              <input
                type="text"
                name=""
                id=""
                className="border-2 bg-slate-100 w-full h-[40px] pl-4 rounded-md shadow-md"
                placeholder="Location"
              />
            </div>
            <div className="mb-5">
              <input
                type="text"
                name=""
                id=""
                className="border-2 bg-slate-100 w-full h-[40px] pl-4 rounded-md shadow-md"
                placeholder="Occupation"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="formFile"
                className="mb-2 inline-block text-neutral-500 dark:text-neutral-400"
              >
                Add picture here
              </label>
              <input
                className="bg-slate-100 relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded border border-solid border-secondary-500 bg-transparent bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-surface transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:me-3 file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-e file:border-solid file:border-inherit file:bg-transparent file:px-3  file:py-[0.32rem] file:text-surface focus:border-primary focus:text-gray-700 focus:shadow-inset focus:outline-none dark:border-white/70 dark:text-white file:dark:text-white"
                type="file"
                id="formFile"
                accept="image/*"
              />
            </div>
            <div className="mb-5">
              <input
                type="text"
                name=""
                id=""
                className="border-2 bg-slate-100 w-full h-[40px] pl-4 rounded-md shadow-md"
                placeholder="Email"
              />
            </div>

            <div className="mb-5">
              <input
                type="text"
                name=""
                id=""
                className="border-2 bg-slate-100 w-full h-[40px] pl-4 rounded-md shadow-md"
                placeholder="Password"
              />
            </div>
            <div className="mb-5">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white w-full rounded-lg h-10 my-4"
              >
                Register
              </button>
            </div>
            <div className="">
              <h1 className="text-center">
                Already have an account?
                <Link to="/">
                  <span className="mx-2 text-blue-500 font-semibold">
                    Log in
                  </span>
                </Link>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignupPage;
