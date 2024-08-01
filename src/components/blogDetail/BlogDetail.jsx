import React, { useEffect, useState } from "react";
import { fetchBlogById } from "../../services/fetchBlogById";
import { useParams } from "react-router-dom";
import { SlUserFollow } from "react-icons/sl";
import { FaRegCalendarAlt } from "react-icons/fa";

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [isFollowing, setIsFollowing] = useState(false);
  const [followError, setFollowError] = useState("");
  const [followSuccessMessage, setFollowSuccessMessage] = useState("");
  const [followersCount, setFollowersCount] = useState(0);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const blogData = await fetchBlogById(id);
        setBlog(blogData);
        setFollowersCount(blogData.followersCount || 0);

        // Retrieve follow status from local storage or check from backend
        const followedBlogs =
          JSON.parse(localStorage.getItem("followed_blogs")) || {};
        if (blogData.author_id in followedBlogs) {
          setIsFollowing(followedBlogs[blogData.author_id]);
        } else {
          // Check follow status from backend if not in local storage
          const accessToken = localStorage.getItem("access_token");
          if (accessToken) {
            const response = await fetch(
              `http://136.228.158.126:50001/api/follows/${blogData.author_id}/unfollow_user/`, // Ensure correct endpoint
              {
                method: "POST",
                headers: {
                  Authorization: `Bearer ${accessToken}`,
                },
              }
            );
            const responseData = await response.json();
            setIsFollowing(responseData.isFollowing || false);
            followedBlogs[blogData.author_id] = responseData.isFollowing;
            localStorage.setItem(
              "followed_blogs",
              JSON.stringify(followedBlogs)
            );
          }
        }
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };

    fetchBlogData();
  }, [id]);
  const incrementFollowersCount = () => {
    setFollowersCount((prev) => prev + 1);
  };

  const decrementFollowersCount = () => {
    setFollowersCount((prev) => (prev > 0 ? prev - 1 : 0));
  };
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
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        setFollowError(errorData.detail || "Failed to update follow status");
        setFollowSuccessMessage("");
        return;
      }

      const newIsFollowing = !isFollowing;
      setIsFollowing(newIsFollowing);

      // Update followers count based on the new follow status
      if (newIsFollowing) {
        incrementFollowersCount();
        setFollowSuccessMessage("You have started following this blog.");
      } else {
        decrementFollowersCount();
        setFollowSuccessMessage("You have unfollowed this blog.");
      }

      setFollowError("");

      const followedBlogs =
        JSON.parse(localStorage.getItem("followed_blogs")) || {};
      followedBlogs[blog.author_id] = newIsFollowing;
      localStorage.setItem("followed_blogs", JSON.stringify(followedBlogs));
    } catch (error) {
      console.error("Error toggling follow status:", error);
      setFollowError(error.message);
      setFollowSuccessMessage("");
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
        <div className="w-full mx-auto md:w-full grid grid-rows-[auto_auto]">
          <div className="w-full sticky top-0 h-auto bg-[#F5F5F5] shadow-sm">
            <div className="w-[90%] md:w-[80%] mx-auto md:pl-16 h-auto p-2 flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center">
                <img
                  className="rounded-full md:-ml-12 w-[50px] md:w-[60px] mt-[4px] md:mt-[4px] h-[50px] md:h-[60px]"
                  src={
                    blog.profileUser ||
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNK2libct1ti7CliA65qLEOpjZutZy6penfA&s"
                  }
                  alt="Profile"
                />
                <span className="ml-4 md:ml-5 font-md font-suwannaphum mt-2 object-cover">
                  {blog.author}
                  <div className="text-[rgb(13, 12, 34)] text-center font-suwannaphum mt-2 flex cursor-pointer">
                    <FaRegCalendarAlt className="font-light" />
                    <h1 className="text-[14px] md:text-[16px] text-black -mt-[2px] ml-2 font-light">
                      {new Date(blog.created_at).toLocaleDateString()}
                    </h1>
                  </div>
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span>
                  {followersCount}{" "}
                  {followersCount === 1 ? "follower" : "followers"}
                </span>
                <div
                  className={`flex text-white space-x-4 py-2 px-4 rounded-xl cursor-pointer ${
                    isFollowing
                      ? "bg-gray-400"
                      : "bg-[#16a1df] hover:bg-[#246a8b]"
                  } mt-4 md:mt-0`}
                  onClick={handleFollowToggle}
                >
                  <SlUserFollow className="mt-[2px]" />
                  <button className="-mt-[2px] ml-1">
                    {isFollowing ? "Unfollow" : "Follow"}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 p-4 w-[80%] mx-auto h-auto bg-[#F5F5F5]">
            {followError && (
              <div className="text-red-500 mb-4">{followError}</div>
            )}
            {followSuccessMessage && (
              <div className="text-green-500 mb-4">{followSuccessMessage}</div>
            )}
            <h3>{blog.title}</h3>
            <img
              className="mt-4 mb-4 md:w-full md:h-[1000px]"
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
