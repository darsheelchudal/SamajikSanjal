import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const fullName = `${user.firstName} ${user.lastName}`;
  return (
    <>
      <div className="flex">
        <div className="logo">Sociopedia</div>
        <div className="form">
          <label htmlFor="Search">Search</label>
          <input type="text" name="text" id="" className="border-2" />
        </div>
      </div>
    </>
  );
}

export default Navbar;
