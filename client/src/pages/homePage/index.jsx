import React, { useState, useEffect } from "react";
import Navbar from "../navbar/index";
import { MdOutlineLocationOn } from "react-icons/md";
import { IoBriefcaseOutline } from "react-icons/io5";
import { FaTwitter, FaLinkedin, FaPen, FaUserCog } from "react-icons/fa";
import { useSelector } from "react-redux";

function HomePage() {
  const [user, setUser] = useState(null);
  const [picturePath, setPicturePath] = useState(null);
  const { _id } = useSelector((state) => state.user);

  const token = useSelector((state) => state.token);
  console.log(token);

  const getUser = async () => {
    try {
      const response = await fetch(`http://www.localhost:3001/users/${_id}`, {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });
      const userData = await response.json();
      setUser(userData);

      if (userData.picturePath) {
        setPicturePath(`http://www.localhost:3001/${userData.picturePath}`);
      }
    } catch (error) {
      console.error("Error fetching user data:", error.message);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  if (!user) {
    return null;
  }

  const {
    firstName,
    lastName,
    location,
    occupation,
    viewedProfile,
    impressions,
    friends,
  } = user;

  return (
    <>
      <Navbar />

      <div className="main flex justify-around">
        <div className="personalCard my-6">
          <div className="card border-2 h-[400px] w-[350px] rounded-xl">
            <div className="top flex gap-x-7 items-center my-5 mx-5">
              <div className="img">
                {picturePath && <img src={picturePath} alt="Profile" />}
              </div>
              <div className="name">
                <div className="">
                  <h2 className="font-bold">
                    {firstName} {lastName}
                  </h2>
                </div>
                <div className="">
                  <span className="text-slate-600">0 friends</span>
                </div>
              </div>
              <div className="">
                <FaUserCog />
              </div>
            </div>
            <hr />
            <div className="about p-4 space-y-2">
              <div className="flex gap-x-4 items-center">
                <MdOutlineLocationOn />
                <span className="text-slate-600">{location}</span>
              </div>
              <div className="flex gap-x-4 items-center">
                <IoBriefcaseOutline />
                <span className="text-slate-600">{occupation}</span>
              </div>
            </div>
            <hr />
            <div className="viewer">
              <div className="flex justify-between p-2 items-center">
                <p className="text-sm font-semibold text-slate-500">
                  Who's viewed your profile?
                </p>
                <span className="text-sm font-semibold">{viewedProfile}</span>
              </div>
              <div className="flex justify-between p-2 items-center">
                <p className="text-sm font-semibold text-slate-500">
                  Impressions of your profile?
                </p>
                <span className="text-sm font-semibold">{impressions}</span>
              </div>
            </div>
            <hr />
            <div className="socialplat">
              <h1 className="m-4 font-bold text-slate-700">Social profiles</h1>
              <div className="text-center">
                <div className="flex justify-between px-4 my-2">
                  <div className="text">
                    <div className="flex gap-x-8 items-center">
                      <FaTwitter />
                      <div>
                        <h2>Twitter</h2>
                      </div>
                    </div>
                  </div>
                  <div className="icon">
                    <FaPen />
                  </div>
                </div>
                <div className="flex justify-between px-4 my-2">
                  <div className="text">
                    <div className="flex gap-x-8 items-center">
                      <FaLinkedin />
                      <div>
                        <h2>Linkedin</h2>
                      </div>
                    </div>
                  </div>
                  <div className="icon">
                    <FaPen />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
        </div>
        <div className="posts">b</div>
        <div className="suggestions">c</div>
      </div>
    </>
  );
}

export default HomePage;
