import React, { useEffect, useState } from "react";

const ReplyCard = ({ forumId }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(
          `http://136.228.158.126:50001/api/comments/`
        );
        if (response.ok) {
          const data = await response.json();
          setComments(data.results);
        } else {
          const errorData = await response.json();
          setErrorMessage(errorData.message || "Error fetching comments");
        }
      } catch (error) {
        console.error("Error fetching comments:", error);
        setErrorMessage(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchComments();
  }, [forumId]);

  return (
    <div>
      {comments.length > 0 ? (
        comments.map((comment) => (
          <div
            key={comment.id}
            className="mx-auto my-8 flex max-w-screen-sm rounded-xl border border-gray-100 p-4 text-left text-gray-600 shadow-lg sm:p-8 justify-start"
          >
            <img
              className="mr-5 block h-8 w-8 max-w-full text-left align-middle sm:h-16 sm:w-16"
              src="https://www.uifaces.co/wp-content/themes/uifaces-theme/src/img/home-animation/avatar-3.svg"
              alt="Profile Picture"
            />
            <div className="w-full text-left">
              <div className="mb-2 flex flex-col justify-between text-gray-600 sm:flex-row">
                <h3 className="font-medium">{comment.author}</h3>
              </div>
              <p className="text-sm">{comment.content}</p>
              <div className="mt-5 flex items-center justify-between text-gray-600">
                <button className="cursor-pointer border py-2 px-8 text-center text-xs leading-tight transition-colors duration-150 ease-in-out hover:border-gray-500 rounded-lg">
                  Reply
                </button>
                <a
                  title="Likes"
                  href="#"
                  className="group flex cursor-pointer items-center justify-around"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 rounded-full p-1 group-hover:bg-red-200 group-hover:text-red-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                  12
                </a>
              </div>
            </div>
          </div>
        ))
      ) : isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>Error: {errorMessage}</div>
      )}
    </div>
  );
};

export default ReplyCard;
