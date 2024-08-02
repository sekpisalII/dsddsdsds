import React, { useEffect, useState } from "react";
import { fetchBlogById } from "../../services/fetchBlogById";
import { useParams } from "react-router-dom";
import { SlUserFollow } from "react-icons/sl";
import { FaRegCalendarAlt } from "react-icons/fa";
import NavbarComponent from "../../components/navbar/NavbarComponent";

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [isFollowing, setIsFollowing] = useState(false);
  const [followError, setFollowError] = useState("");
  const [followersCount, setFollowersCount] = useState(0);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const blogData = await fetchBlogById(id);
        setBlog(blogData);
        setFollowersCount(blogData.followersCount || 0);

        const accessToken = localStorage.getItem("access_token");
        if (accessToken) {
          const response = await fetch(`http://136.228.158.126:50001/api/follows/${blogData.author_id}`, {
            headers: {
              "Authorization": `Bearer ${accessToken}`,
            },
          });
          const responseData = await response.json();
          setIsFollowing(responseData.isFollowing || false);
        }
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };
    fetchBlogData();
  }, [id]);

  const handleFollowToggle = async () => {
    if (!blog || !blog.author_id) {
      setFollowError("Author ID is missing or undefined");
      return;
    }

    try {
      const accessToken = localStorage.getItem("access_token");
      if (!accessToken) {
        throw new Error("No access token found");
      }

      const url = isFollowing
        ? `http://136.228.158.126:50001/api/follows/${blog.author_id}/unfollow_user/`
        : `http://136.228.158.126:50001/api/follows/${blog.author_id}/follow_user/`;

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setFollowError(errorData.detail || "Failed to update follow status");
        return;
      }

      setIsFollowing(!isFollowing);
      setFollowersCount((prevCount) => (isFollowing ? prevCount - 1 : prevCount + 1));
      setFollowError("");
    } catch (error) {
      console.error("Error toggling follow status:", error);
      setFollowError(error.message);
    }
  };

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <>
       <NavbarComponent />
      <div className="mt-10 w-[80%] mx-auto">
        <span className="font-suwannaphum text-3xl font-bold">ទំព័រប្លុក</span>
      </div>
      <section className="mt-5 mb-10 w-full mx-auto font-suwannaphum">
        <div className="w-full mx-auto md:w-full grid grid-rows-[auto_auto]">
          <div className="w-full z-10 sticky top-0 h-auto bg-white shadow-sm transition-all duration-300">
            <div className="w-[90%] md:w-[80%] mx-auto md:pl-16 h-auto p-2 flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center transition-transform duration-300 hover:scale-105">
                <img
                  className="rounded-full object-cover md:-ml-12 w-[50px] md:w-[60px] mt-[4px] md:mt-[4px] h-[50px] md:h-[60px] transition-transform duration-300 hover:scale-105"
                  src={
                    blog?.profileUser ||
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNK2libct1ti7CliA65qLEOpjZutZy6penfA&s"
                  }
                  alt=""
                />
                <span className="ml-4 md:ml-5 font-md font-suwannaphum mt-2 object-cover">
                  {blog.author}
                  <div className="text-[rgb(13, 12, 34)] text-center font-suwannaphum mt-2 flex cursor-pointer">
                    <FaRegCalendarAlt className="font-light" />
                    <h1 className="text-[14px] md:text-[16px] text-black -mt-[2px] ml-2 font-light">
                      {blog.created_at}
                    </h1>
                  </div>
                </span>
              </div>
              <div className="flex flex-col md:flex-row items-center space-x-3 space-y-2 md:space-y-0">
                <div className="flex items-center space-x-2 text-sm md:text-base transition-opacity duration-300 hover:opacity-75">
                  <span>{followersCount}</span>
                  <span>followers</span>
                </div>
                <div
                  className={`flex text-white space-x-2 py-1 px-2 md:py-2 md:px-4 rounded-xl cursor-pointer transition-all duration-300 
                    ${
                    isFollowing
                      ? "bg-gray-400"
                      : "bg-[#16a1df] hover:bg-[#246a8b] transform hover:scale-105"
                  }`}
                  onClick={handleFollowToggle }
                >
                  <SlUserFollow className="text-sm mt-[2px] md:mt-[3px]" />
                  <button className="ml-1 -mt-[0.1px] text-sm md:text-base">
                    {isFollowing ? "Unfollow" : "Follow"}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 p-4 w-[80%] mx-auto h-auto transition-opacity duration-300">
            {followError && (
              <div className="text-red-500 mb-4">{followError}</div>
            )}
            <h3 className="text-3xl font-semibold mb-10 text-center">
              {blog.title}
            </h3>
            <img
              className="mt-4 mb-4 w-full object-cover rounded-lg transition-transform duration-500 hover:scale-95 border border-solid"
              src={blog.image}
              alt={blog.title}
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
