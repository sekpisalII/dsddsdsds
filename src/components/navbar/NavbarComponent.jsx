import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Avatar, Dropdown, Navbar, Button } from "flowbite-react";
import { LuLayoutDashboard } from "react-icons/lu";
import { GrArticle } from "react-icons/gr";
import { IoSettingsSharp } from "react-icons/io5";
import { RiLogoutBoxLine } from "react-icons/ri";
const NavbarComponent = () => {
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
            {/* Optional header content */}
          </Dropdown.Header>
          <Dropdown.Item>
            <LuLayoutDashboard className="m-3 text-blue-600" />
            <NavLink to="/dashboard" className="font-suwannaphum" activeClassName="active-link">
              Dashboard
            </NavLink>
          </Dropdown.Item>
          <Dropdown.Item>
            <GrArticle className="m-3 text-blue-600" />
            <NavLink to="/article" className="font-suwannaphum" activeClassName="active-link">
              Articles
            </NavLink>
          </Dropdown.Item>
          <Dropdown.Item>
            <IoSettingsSharp className="m-3 text-blue-600" />
            <NavLink to="/setting" className="font-suwannaphum" activeClassName="active-link">
              Setting
            </NavLink>
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>
            <RiLogoutBoxLine className="m-3 text-blue-600" />
            <NavLink to="/logout" className="font-suwannaphum" activeClassName="active-link">
              Logout
            </NavLink>
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
