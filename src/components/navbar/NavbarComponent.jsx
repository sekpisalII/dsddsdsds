import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Avatar, Dropdown, Navbar, Button } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { AUTH_HEADER } from "../../services/constants";
const NavbarComponent = () => {
  const navigate = useNavigate();

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
  return (
    <>
      <nav className="w-full  bg-[#16A1DF] sticky top-[0] z-50">
        <Navbar fluid rounded className="bg-[#16A1DF]   mx-[40px]">
          <Navbar.Brand>
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              <Link as={Link} to="/">
                <img
                  className="w-[90px] h-[60px] object-cover"
                  src="../src/assets/stemlogo-removebg-preview.png"
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
              label={
                <Avatar
                  alt="User settings"
                  img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  rounded
                />
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">Bonnie Green</span>
                <span className="block truncate text-sm font-medium">
                  name@flowbite.com
                </span>
              </Dropdown.Header>
              <Dropdown.Item>Dashboard</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Earnings</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item onClick={handleSignOut}>Sign out</Dropdown.Item>
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
