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
  const [followersCount, setFollowersCount] = useState(0); // Add state for followers count

  useEffect(() => {
    console.log("id", id)
    const fetchLessonData = async () => {
      try {
        const bookData = await fetchBlogById(id);
        console.log("Fetched blog data:", bookData); // Logging fetched data
        setBlog(bookData);
        setFollowersCount(bookData.followersCount || 0); // Initialize followers count
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };
    fetchLessonData();
  }, []);

  const handleFollow = async () => {
    if (!blog || !blog.id) {
      setFollowError("Author ID is missing or undefined");
      console.error("Author ID is missing or undefined:", blog); // Logging the blog object
      return;
    }

    try {
      const accessToken = localStorage.getItem("access_token");
      if (!accessToken) {
        throw new Error("No access token found");
      }

      const response = await fetch(`http://136.228.158.126:50001/api/follows/${blog.id}/follow_user/`, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
      });

      const responseText = await response.text();
      try {
        const responseData = JSON.parse(responseText);
        if (!response.ok) {
          if (responseData.detail === "User does not exist.") {
            setFollowError("User does not exist.");
          } else {
            throw new Error(responseData.detail || "Failed to follow user");
          }
          return;
        }
        setIsFollowing(true);
        setFollowersCount(followersCount + 1); // Increment followers count
        setFollowError("");
      } catch (error) {
        throw new Error("Invalid JSON response: " + responseText);
      }
    } catch (error) {
      console.error("Error following user:", error);
      setFollowError(error.message);
    }
  };

  if (!blog) {
    return <div>Loading...</div>;
  }


  return (
    <>
      <div className="mt-10 w-[80%] mx-auto">
        <span className="font-suwannaphum text-[25px] font-medium">ទំព័រប្លុក</span>
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
                  alt=""
                />
                <span className="ml-4 md:ml-5 font-md font-suwannaphum mt-2">
                  {blog.author}
                  <div className="text-[rgb(13, 12, 34)] text-center font-suwannaphum mt-2 flex cursor-pointer">
                    <FaRegCalendarAlt className="font-light" />
                    <h1 className="text-[14px] md:text-[16px] text-black -mt-[2px] ml-2 font-light">
                      {blog.created_at}
                    </h1>
                  </div>
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span>{followersCount} followers</span>
                <div
                  className={`flex text-white space-x-4 py-2 px-4 rounded-xl cursor-pointer ${
                    isFollowing ? "bg-gray-400" : "bg-[#16a1df] hover:bg-[#246a8b]"
                  } mt-4 md:mt-0`}
                  onClick={handleFollow}
                  disabled={isFollowing}
                >
                  <SlUserFollow className="mt-[2px]" />
                  <button className="-mt-[2px] ml-1">
                    {isFollowing ? "Following" : "Follow"}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 p-4 w-[80%] mx-auto h-auto bg-[#F5F5F5]">
            {followError && (
              <div className="text-red-500 mb-4">
                {followError}
              </div>
            )}
            <h3>{blog.title}</h3>
            <img className="mt-4 mb-4 md:w-full md:h-[1000px]" src={blog.image} alt={blog.title} />
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
