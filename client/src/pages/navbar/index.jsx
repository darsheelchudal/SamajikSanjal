import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { MdMessage } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import { FaQuestionCircle } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import { setLogout } from "../../state";

function Navbar() {
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  // const fullName = `${user.firstName} ${user.lastName}`;

  return (
    <>
      <div className="flex w-full justify-around h-20 items-center border-2">
        <div className="flex gap-x-8">
          <div className="logo">
            <h1 className="font-bold text-2xl text-blue-500">Interlinked</h1>
          </div>
          <div className="form">
            <div className="input relative flex justify-start items-center">
              <input
                type="text"
                name="text"
                placeholder="Search..."
                className="border-2 w-[250px] h-9 bg-slate-200 rounded-md shadow-2xl pl-4"
              />
              <IoIosSearch className="absolute right-6 text-gray-500" />
            </div>
          </div>
        </div>
        <div className="flex gap-x-8 items-center">
          <div className="msg">
            <MdMessage />
          </div>
          <div className="notification">
            <IoMdNotifications />
          </div>

          <div className="questionMark">
            <FaQuestionCircle />
          </div>
          <div className="fullname font-semibold text-slate-700">
            {/* {fullName} */}
          </div>
          <div className="logout">
            {/* <IoLogOut onClick={() => dispatch(setLogout())} /> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
