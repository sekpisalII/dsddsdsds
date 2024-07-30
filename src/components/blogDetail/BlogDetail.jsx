import React, { useEffect, useState } from "react";
import { fetchBlogById } from "../../services/fetchBlogById";
import { useParams } from "react-router-dom";
import { SlUserFollow, SlUserUnfollow } from "react-icons/sl";
import { FaRegCalendarAlt } from "react-icons/fa";
import axios from "axios";
import { AUTH_HEADER } from "../../services/constants";

const BlogDetail = () => {
  const { id } = useParams();
  const bookId = decodeURIComponent(id);
  const [blog, setblog] = useState(null);
  const [isFollowing, setIsFollowing] = useState(false);

  useEffect(() => {
    const fetchlessonData = async () => {
      try {
        const bookData = await fetchBlogById(encodeURIComponent(bookId));
        setblog(bookData);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };
    fetchlessonData();
  }, []);

  const handleFollow = async () => {
    try {
      await axios.post(
        `http://136.228.158.126:50001/api/follows/${blog.userId}/follow_user/`,
        {
          headers: {
            ...AUTH_HEADER,
            "Content-Type": "application/json",
          },
        }
      );
      setIsFollowing(true);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        // Handle unauthorized response
        console.error("Unauthorized access. Please login to continue.");
        // Redirect the user to the login page or display an error message
      } else {
        console.error("Error following user:", error);
      }
    }
  };
  const handleUnfollow = async () => {
    try {
      await axios.post(
        `http://136.228.158.126:50001/api/follows/${blog.userId}/unfollow_user/`,
        {},
        {
          headers: {
            ...AUTH_HEADER,
            "Content-Type": "application/json",
          },
        }
      );
      setIsFollowing(false);
    } catch (error) {
      console.error("Error unfollowing user:", error);
    }
  };

  if (!blog) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className="mt-10 w-[80%] mx-auto">
        <span className="font-suwannaphum text-[25px] font-medium">
          ទំព័រប្លុក
        </span>
      </div>
      <section className="mt-10 mb-10 w-full mx-auto flex flex-col md:flex-row font-suwannaphum">
        <div className=" w-full mx-auto md:w-full grid grid-rows-[auto_auto]">
          <div className="w-full sticky top-0 h-auto bg-[#F5F5F5] shadow-sm">
            <div className="w-[90%] md:w-[80%] mx-auto  md:pl-16 h-auto p-2 flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center">
                <img
                  className="rounded-full  md:-ml-12 w-[50px] md:w-[60px] mt-[4px] md:mt-[4px] h-[50px] md:h-[60px]"
                  src={
                    blog.profileUser ||
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNK2libct1ti7CliA65qLEOpjZutZy6penfA&s"
                  }
                  alt=""
                />
                <span className="ml-4 md:ml-5 font-md font-suwannaphum mt-2">
                  {blog.author}
                  <div className=" text-[rgb(13, 12, 34)] text-center font-suwannaphum mt-2 flex cursor-pointer">
                    <FaRegCalendarAlt className="font-light" />
                    <h1 className="text-[14px] md:text-[16px] text-black -mt-[2px] ml-2 font-light">
                      {blog.created_at}
                    </h1>
                  </div>
                </span>
              </div>
              <div className="flex text-white space-x-4 bg-[#16a1df] py-2 px-4 rounded-xl mt-4 md:mt-0 cursor-pointer">
                {isFollowing ? (
                  <div
                    className="flex items-center hover:bg-[#246a8b]"
                    onClick={handleUnfollow}
                  >
                    <SlUserUnfollow className="mt-[2px]" />
                    <span className="-mt-[2px] ml-1">អាបរ</span>
                  </div>
                ) : (
                  <div
                    className="flex items-center hover:bg-[#246a8b]"
                    onClick={handleFollow}
                  >
                    <SlUserFollow className="mt-[2px]" />
                    <span className="-mt-[2px] ml-1">តាមដាន</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="mt-8 p-4 w-[80%] mx-auto h-auto bg-[#F5F5F5]">
            <h3>{blog.title}</h3>
            <img
              className="mt-4 mb-4 md:w-full md:h-[1000px]"
              src={blog.image}
            />
            <span className="text-black text-base font-light font-suwannaphum">
              {blog.content}
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetail;
