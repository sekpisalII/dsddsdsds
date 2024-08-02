import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const BlogAllCard = ({ blog }) => {
  const [followerCount, setFollowerCount] = useState(0);

  useEffect(() => {
    // Fetch follower count from API
    const fetchFollowerCount = async () => {
      try {
        const response = await fetch(`https://your-api-url.com/api/followers/${blog.author_id}`);
        const data = await response.json();
        setFollowerCount(data.count);
      } catch (error) {
        console.error("Error fetching follower count:", error);
      }
    };

    fetchFollowerCount();
  }, [blog.author_id]);

  return (
    <Link to={`/blogDetail/` + blog.id}>
    <div class="max-w-sm shadow-lg">
      <div class="relative h-[200px]">
        <img
          src={
            blog?.image ||
            "https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg"
          }
          alt=""
          class="absolute inset-0 w-full h-full object-cover "
        />
      </div>
      <div class="mt-4 px-4 pb-4">
        <a href="#">
          <h5 class="text-gray-700 text-[20px] blog-card-title line-clamp-1 font-suwannaphum">
            {blog.title}
          </h5>
        </a>
        <div class="mt-5 flex items-center">
          <img
            class="w-10 h-10 rounded-full object-cover"
            src={
              blog?.profileUser ||
              "https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg"
            }
            alt=""
          />

          <div class="flex flex-col">
            <span class="ml-3 mr-2 rounded px-2.5 py-0.5 text-gray-600 font-semibold hover:text-indigo-600 font-suwannaphum text-[16px]">
              {blog?.author}
            </span>
            <span class="text-gray-600 font-suwannaphum text-[15px] ml-6">
              អ្នកតាមដាន {followerCount} នាក់
            </span>
          </div>
        </div>
      </div>
    </div>
  </Link>

  );
};

export default BlogAllCard;
