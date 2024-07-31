import React, { useEffect, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { Avatar, Dropdown, Navbar, Button } from "flowbite-react";
import { LuLayoutDashboard } from "react-icons/lu";
import { GrArticle } from "react-icons/gr";
import { IoSettingsSharp } from "react-icons/io5";
import { RiLogoutBoxLine } from "react-icons/ri";
import { AUTH_HEADER } from "../../services/constants";
import Background from "../../components/background/Background";
import BookCard from "../../components/bookCard/BookCard";
import FooterCard from "../../components/footer/FooterCard";
import LessonCard from "../../components/lessonCard/LessonCard";
import BlogCard from "../../components/blogCard/BlogCard";
import ForumCard from "../../components/forumCard/ForumCard";

const Home = () => {
  const navigate = useNavigate();
  const [hasAccessToken, setHasAccessToken] = useState(false);

  const handleNavigate = (path) => {
    const access_token = localStorage.getItem("access_token");
    if (!access_token) {
      navigate("/login");
    } else {
      navigate(path);
    }
  };

  const handleSignOut = () => {
    try {
      localStorage.removeItem("access_token");
      delete AUTH_HEADER.Authorization;
      alert("You have been successfully signed out.");
      navigate("/login");
    } catch (error) {
      alert("There was an error signing you out. Please try again.");
      console.error(error);
    }
  };

  return (
    <div>
      <nav className="w-full bg-[#16A1DF] sticky top-0 z-50">
        <Navbar fluid rounded className="bg-[#16A1DF] ">
          <Navbar.Brand>
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              <Link as={Link} to="/">
                <img
                  className="w-[80px] h-[50px] md:w-[100px] md:h-[60px] object-cover"
                  src="../src/assets/STEM_LOGO_TUTOR.png"
                  alt=""
                />
              </Link>
            </span>
          </Navbar.Brand>
          <div className="flex md:order-2 items-center space-x-4">
            <Link to="/login" className="hidden sm:block">
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
              <Dropdown.Header className="font-suwannaphum text-sm">
                User Actions
              </Dropdown.Header>
              <Dropdown.Item onClick={() => handleNavigate("/dashboard")}>
                <LuLayoutDashboard className="m-3 text-blue-600" />
                <span className="font-suwannaphum">Dashboard</span>
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
                `font-suwannaphum text-xl px-4 md:text-2xl font-medium text-white ${
                  isActive
                    ? "bg-cyan-400  md:text-[#FF9900] md:bg-[#16A1DF]"
                    : ""
                }`
              }
            >
              សៀវភៅ
            </NavLink>
            <NavLink
              to="/lesson"
              className={({ isActive }) =>
                `font-suwannaphum text-xl px-4 md:px-0 md:text-2xl font-medium text-white ${
                  isActive
                    ? "bg-cyan-400  md:text-[#FF9900] md:bg-[#16A1DF]"
                    : ""
                }`
              }
            >
              មេរៀន
            </NavLink>
            <NavLink
              to="/forum"
              className={({ isActive }) =>
                `font-suwannaphum text-xl px-4 md:px-0 md:text-2xl font-medium text-white ${
                  isActive
                    ? "bg-cyan-400  md:text-[#FF9900] md:bg-[#16A1DF]"
                    : ""
                }`
              }
            >
              វេទិកា
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `font-suwannaphum text-xl px-4 md:px-0 md:text-2xl font-medium text-white ${
                  isActive
                    ? "bg-cyan-400  md:text-[#FF9900] md:bg-[#16A1DF]"
                    : ""
                }`
              }
            >
              ប្លុក
            </NavLink>
            <NavLink
              to="/about-us"
              className={({ isActive }) =>
                `font-suwannaphum text-xl px-4 md:px-0 md:text-2xl font-medium text-white ${
                  isActive
                    ? "bg-cyan-400  md:text-[#FF9900] md:bg-[#16A1DF]"
                    : ""
                }`
              }
            >
              អំពីយើង
            </NavLink>
          </Navbar.Collapse>
        </Navbar>
      </nav>

      <Background />
      <section className="mt-[10px] m-3">
        <BookCard />
      </section>
      <section className="mt-[10px]">
        <LessonCard />
      </section>
      <section className="mt-[10px]">
        <ForumCard />
      </section>
      <section className="mt-[10px] ">
        <BlogCard />
      </section>
      <FooterCard />
    </div>
  );
};

export default Home;
