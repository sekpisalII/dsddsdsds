import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const BlogAllCard = ({ blog }) => {
  const [totalFollowers, setTotalFollowers] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch total followers for the blog author
  const fetchTotalFollowers = async () => {
    if (!blog || !blog.author_id) {
      console.error("Author ID is missing");
      return;
    }

    try {
      const response = await fetch(
        `http://136.228.158.126:50001/api/follow/${blog.author_id}/followers/`
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setTotalFollowers(data.total_followers);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTotalFollowers();
  }, [blog.author_id]); // Dependency on `blog.author_id` to refetch if it changes

  return (
    <Link to={`/blogDetail/${blog.id}`} className="block mb-4">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-lg">
        <div className="flex flex-col justify-between leading-normal rounded-lg w-full">
          <img
            src={
              blog.image ||
              "https://cdna.artstation.com/p/assets/images/images/034/807/864/large/gil-lagziel-oggy-artstation1.jpg?1613299994"
            }
            className="w-full h-[250px] object-cover rounded-lg"
            alt="Blog"
          />
          <div className="p-2 pt-2">
            <div className="mb-0">
              <p className="text-gray-700 text-[20px] blog-card-title line-clamp-1 -mt-1 pt-3 font-suwannaphum">
                {blog.title}
              </p>
            </div>
            <div className="flex items-center">
              <a href="#">
                <img
                  className="w-10 h-10 rounded-full mr-4 object-cover"
                  src={
                    blog.profileUser ||
                    "https://cdna.artstation.com/p/assets/images/images/034/807/864/large/gil-lagziel-oggy-artstation1.jpg?1613299994"
                  }
                  alt="Avatar"
                />
              </a>
              <a
                href="#"
                className="text-gray-600 font-semibold leading-none hover:text-indigo-600 font-suwannaphum text-[16px] -mt-4"
              >
                {blog.author}
              </a>
              <p className="text-gray-600 font-suwannaphum mb-4 text-[15px] pt-7">
                {loading
                  ? "Loading followers..."
                  : error
                  ? `Error: ${error}`
                  : `អ្នកតាមដាន ${totalFollowers} នាក់`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogAllCard;
