import React, { useEffect, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { Avatar, Dropdown, Navbar, Button } from "flowbite-react";
import { LuLayoutDashboard } from "react-icons/lu";
import { GrArticle } from "react-icons/gr";
import { IoSettingsSharp } from "react-icons/io5";
import { RiLogoutBoxLine } from "react-icons/ri";
import { MdForum } from "react-icons/md";
import { AUTH_HEADER } from "../../services/constants";
const NavbarComponent = () => {
  const navigate = useNavigate();
  const [hasAccessToken, setHasAccessToken] = useState(false);
  const [profile, setProfile] = useState(null);
  const handleNavigate = (path) => {
    // Check if the user has an access token
    const access_token = localStorage.getItem("access_token");
    if (!access_token) {
      // If the user doesn't have an access token, navigate to the login page
      navigate("/login");
    } else {
      // If the user has an access token, navigate to the requested page
      navigate(path);
    }
  };

  const handleSignOut = () => {
    try {
      // Remove the access token from the local storage
      localStorage.removeItem("access_token");
      // Remove the AUTH_HEADER from the constant.js file
      delete AUTH_HEADER.Authorization;
      // Show a success message to the user
      alert("You have been successfully signed out.");
      // Redirect the user to the login page
      navigate("/login");
    } catch (error) {
      // Show an error message to the user
      alert("There was an error signing you out. Please try again.");
      console.error(error);
    }
  };
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
      <nav className="w-full  bg-[#16A1DF] sticky top-[0] z-50">
        <Navbar fluid rounded className="bg-[#16A1DF]   mx-[40px]">
          <Navbar.Brand>
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              <Link as={Link} to="/">
                <img
                  className="w-[100px] h-[60px]  object-cover"
                  src="../src/assets/STEM_LOGO_TUTOR.png"
                  alt=""
                />
              </Link>
            </span>
          </Navbar.Brand>
          <div className="flex md:order-2 items-center space-x-4">
            <Link to="/login">
              <Button className="border-1 hover:bg-blue-500 text-white font-suwannaphum">
                ចូលគណនី
              </Button>
            </Link>
            <Dropdown
              arrowIcon={false}
              inline
              label={<Avatar alt="User settings" img={profile.image} rounded />}
            >
              <Dropdown.Header>User Actions</Dropdown.Header>
              <Dropdown.Item onClick={() => handleNavigate("/dashboard")}>
                <LuLayoutDashboard className="m-3 text-blue-600" />
                <span className="font-suwannaphum">Dashboard</span>
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleNavigate("/article")}>
                <GrArticle className="m-3 text-blue-600" />
                <span className="font-suwannaphum">Articles</span>
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleNavigate("/getForum")}>
                <MdForum className="m-3 text-blue-600" />=
                <span className="font-suwannaphum">Forum</span>
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleNavigate("/setting")}>
                <IoSettingsSharp className="m-3 text-blue-600" />
                <span className="font-suwannaphum">Settings</span>
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item onClick={handleSignOut}>
                <RiLogoutBoxLine className="m-3 text-blue-600" />
                <span>Sign Out</span>
              </Dropdown.Item>
            </Dropdown>
            <Navbar.Toggle />
          </div>
          <Navbar.Collapse>
            <NavLink
              to="/book"
              className={({ isActive }) =>
                `font-suwannaphum text-2xl font-medium  text-white ${
                  isActive ? "text-yellow-300" : ""
                }`
              }
            >
              សៀវភៅ
            </NavLink>
            <NavLink
              to="/lesson"
              className={({ isActive }) =>
                `font-suwannaphum text-2xl font-medium  text-white ${
                  isActive ? "text-yellow-300" : ""
                }`
              }
            >
              មេរៀន
            </NavLink>
            <NavLink
              to="/forum"
              className={({ isActive }) =>
                `font-suwannaphum text-2xl font-medium  text-white ${
                  isActive ? "text-yellow-300" : ""
                }`
              }
            >
              វេទិកា
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `font-suwannaphum text-2xl font-medium  text-white ${
                  isActive ? "text-yellow-300" : ""
                }`
              }
            >
              ប្លុក
            </NavLink>
            <NavLink
              to="/about-us"
              className={({ isActive }) =>
                `font-suwannaphum text-2xl font-medium  text-white ${
                  isActive ? "text-yellow-300" : ""
                }`
              }
            >
              អំពីយើង
            </NavLink>
          </Navbar.Collapse>
        </Navbar>
      </nav>
    </>
  );
};

export default NavbarComponent;
