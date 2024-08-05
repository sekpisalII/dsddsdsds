import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForumContent = () => {
  const navigate = useNavigate();
  const [hasAccessToken, setHasAccessToken] = useState(false);

  const handleNavigate = (path) => {
    // Check if the user has an access token
    const access_token = localStorage.getItem("access_token");
    if (!access_token) {
      // If the user doesn't have an access token, navigate to the login page
      navigate("/login");
    } else {
      // If the user has an access token, navigate to the requested page
      navigate(path);
    }
  };
  return (
    <div>
     <main className="max-w-7xl w-[96%] mx-auto p-4 flex flex-col lg:flex-row justify-between lg:space-x-8">
  <div className="lg:w-2/3 space-y-4 transition-transform duration-500 hover:scale-105">
    {/* Banner */}
    <div className="relative w-full bg-blue-600 rounded-lg overflow-hidden">
      <img
        src="../src/assets/forum_content.gif"
        alt="Cartoon"
        className="object-cover w-full h-full"
      />
      <div className="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center">
        <div className="text-center animate-fadeInUp">
          <h1 className="text-3xl font-bold text-white font-suwannaphum transition-transform duration-300 hover:scale-105">
            សំណួរ និង ដំណោះស្រាយ
          </h1>
          <p className="text-gray-200 mt-2 font-suwannaphum transition-transform duration-300 hover:scale-105">
            ចួលរួមជាមួយពួកយើង​
            អ្នកអាចធ្វើការបង្កើតសំណួរនិងធ្វើការឆ្លើយសំណួរដែលទាក់ទងនិងស្ទែម
          </p>
          <button
            onClick={() => handleNavigate("/create_forum")}
            className="mt-4 bg-white text-blue-600 px-4 py-2 rounded-lg font-suwannaphum transition-transform duration-300 hover:scale-105"
          >
            បង្កើតសំណួរឥឡូវនេះ
          </button>
        </div>
      </div>
    </div>
  </div>

  {/* Sidebar */}
  <aside className="w-full lg:w-1/3 space-y-4 mt-8 lg:mt-0">
    <div className="bg-white shadow rounded-lg p-4 transition-transform duration-300 transform hover:scale-105">
      <h2 className="text-lg font-semibold text-gray-900 mb-4 font-suwannaphum">
        សំណួរដែលពេញនិយម
      </h2>
      <ul className="space-y-2">
        <li className="text-gray-900 hover:underline font-suwannaphum">
          តើ STEM ជាអ្វី?
        </li>
        <li className="text-gray-900 hover:underline font-suwannaphum">
          ហេតុអ្វីត្រូវរៀន STEM?
        </li>
        <li className="text-gray-900 hover:underline font-suwannaphum">
          What is the Best AI Technology?
        </li>
        <li className="text-gray-900 hover:underline font-suwannaphum">
          What does STEM stand for?
        </li>
        <li className="text-gray-900 hover:underline font-suwannaphum">
          How to get into STEM?
        </li>
      </ul>
    </div>
    <div className="bg-white shadow rounded-lg p-4 transition-transform duration-300 transform hover:scale-105">
      <h2 className="text-lg font-semibold text-gray-900 mb-4 font-suwannaphum">
        សំណួរដែលទាក់ទង
      </h2>
      <ul className="space-y-2">
        <li className="text-gray-900 hover:underline font-suwannaphum">
          How many skills are in STEM?
        </li>
        <li className="text-gray-900 hover:underline font-suwannaphum">
          Five unbelievable facts about money
        </li>
        <li className="text-gray-900 hover:underline font-suwannaphum">
          Best Pinterest Boards for learning about business
        </li>
        <li className="text-gray-900 hover:underline font-suwannaphum">
          Skills that you can learn from business
        </li>
      </ul>
    </div>
  </aside>
</main>

    </div>
  );
};

export default ForumContent;
