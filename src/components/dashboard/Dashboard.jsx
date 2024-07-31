import React, { useEffect, useState } from "react";
import { GoBell } from "react-icons/go";
import { RxDashboard } from "react-icons/rx";
import { GrArticle } from "react-icons/gr";
import { MdForum } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { AUTH_HEADER } from "../../services/constants";
import axios from "axios";

const Dashboard = () => {
  const [activeLink, setActiveLink] = useState(0);
  const [profile, setProfile] = useState(null);
  const handleLinkClick = (index) => {
    setActiveLink(index);
  };
  const SIDEBAR_LINKS = [
    { id: 1, path: "/dashboard", name: "Dashboard", icon: RxDashboard },
    { id: 2, path: "/article?page=2", name: "Article", icon: GrArticle },
    { id: 3, path: "/setting", name: "Setting", icon: IoSettingsOutline },
    { id: 4, path: "/getforum?page=2", name: "Forum", icon: MdForum },
  ];

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(
          "http://136.228.158.126:50001/api/profile/",
          {
            headers: {
              ...AUTH_HEADER,
              "Content-Type": "multipart/form-data",
            },
          }
        );
        const data = await response.json();
        setProfile(data);
        localStorage.setItem('user',JSON.stringify({
          name:data.username
        }));
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchProfile();
  }, []);

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className=" flex justify-between md:items-center p-5 bg-blue-500">
        <div className="flex flex-row items-center w-full sm:w-auto">
          <h1 className="text-[20px] sm:text-[30px] text-white font-suwannaphum ml-8 sm:ml-14 md:ml-60">
            <input
              className="w-2/3 h-8 sm:w-full md:w-full text-black p-2"
              type="text"
              placeholder="Search..."
            />
          </h1>
        </div>
        <div className="flex items-center space-x-2 sm:space-x-5">
          <div className="hidden md:flex">{/* Any additional content */}</div>
          <div className="flex items-center space-x-2 sm:space-x-5">
            <button className="relative text-lg sm:text-2xl text-gray-100">
              <GoBell size={20} sm:size={28} />
              <span className="absolute top-0 right-0 -mt-1 -mr-1 flex justify-center items-center  text-white font-semibold text-[8px] sm:text-[10px] w-4 h-3 sm:w-5 sm:h-4 rounded-full border-2 border-white">
                9
              </span>
            </button>
            <img
              className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 sm:border-4 border-gray-100"
              src={profile.image}
              alt="Profile"
            />
            <p className="text-sm pr-3 sm:text-xl -mt-[1px] sm:-mt-[2px] font-semibold text-white font-suwannaphum">
              {profile.username}
            </p>
          </div>
        </div>
      </div>
      {/* Sidebar */}
      <div className="w-12 sm:w-16 md:w-56 fixed left-0 top-0 z-10 h-screen border-r pt-8 px-2 sm:px-4 bg-white">
        {/* Logo */}
        <div className="mb-8 flex justify-center sm:justify-start">
          <Link to="/home">
            <img
              src="../src/assets/stemlogo-removebg-preview.png"
              alt="logo"
              className="hidden sm:flex w-16 sm:w-28"
            />
          </Link>
          <img
            src="../src/assets/stemlogo-removebg-preview.png"
            alt="logo"
            className="w-6 sm:w-8 flex sm:hidden"
          />
        </div>
        {/* Navigation Links */}
        <ul className="mt-6 space-y-3 sm:space-y-6">
          {SIDEBAR_LINKS.map((link, index) => (
            <li
              key={index}
              className={`font-medium rounded-md py-1 sm:py-2 px-3 sm:px-5 hover:bg-gray-100 hover:text-indigo-500 ${
                activeLink === index ? "bg-indigo-100 text-indigo-500" : ""
              }`}
            >
              <Link
                to={link.path}

                className="flex justify-center md:justify-start items-center space-x-2 sm:space-x-5"
                onClick={() => handleLinkClick(index)}
              >
                <span>{<link.icon />}</span>
                <span className="text-xs sm:text-sm text-gray-500 hidden md:flex">
                  {link.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Dashboard;
