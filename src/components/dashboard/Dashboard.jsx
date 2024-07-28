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
    { id: 2, path: "/article", name: "Article", icon: GrArticle },
    { id: 3, path: "/setting", name: "Setting", icon: IoSettingsOutline },
    { id: 4, path: "/getforum", name: "Forum", icon: MdForum },
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
      <div className="flex justify-between  items-center p-5 bg-e1f2fd bg-blue-500">
        <div>
          <h1 className="text-[30px] text-white font-suwannaphum ml-60">
            Welcome !
          </h1>
          <p className="text-1xl font-semibold text-white font-suwannaphum ml-60">
            {profile.username}
          </p>
        </div>
        <div className="flex items-center space-x-5">
          <div className="hidden md:flex">{/* Any additional content */}</div>
          <div className="flex items-center space-x-5">
            <button className="relative text-2xl text-gray-100">
              <GoBell size={28} />
              <span className="absolute top-0 right-0 -mt-1 -mr-1 flex justify-center items-center bg-e1f2fd text-white font-semibold text-[10px] w-5 h-4 rounded-full border-2 border-white">
                9
              </span>
            </button>
            <img
              className="w-8 h-8 rounded-full border-4 border-gray-100"
              src={profile.image}
              alt=""
            />
          </div>
        </div>
      </div>
      {/* Sidebar */}
      <div className="w-16 md:w-56 fixed left-0 top-0 z-10 h-screen border-r pt-8 px-4 bg-white">
        {/* Logo */}
        <div className="mb-8">
          <img
            src="../src/assets/stemlogo-removebg-preview.png"
            alt="logo"
            className="w-28 hidden md:flex"
          />
          <img src="./stem.png" alt="logo" className="w-8 flex md:hidden" />
        </div>
        {/* Logo */}

        {/* Navigation Links */}
        <ul className="mt-6 space-y-6">
          {SIDEBAR_LINKS.map((link, index) => (
            <li
              key={index}
              className={`font-medium rounded-md py-2 px-5 hover:bg-gray-100 hover:text-indigo-500 ${
                activeLink === index ? "bg-indigo-100 text-indigo-500" : ""
              }`}
            >
              <Link
                to={link.path}
                className="flex justify-center md:justify-start items-center md:space-x-5"
                onClick={() => handleLinkClick(index)}
              >
                <span>{<link.icon />}</span>
                <span className="text-sm text-gray-500 hidden md:flex">
                  {link.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        {/* Navigation Links */}
      </div>
      {/* Sidebar */}
    </>
  );
};

export default Dashboard;
