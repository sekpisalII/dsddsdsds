import React from "react";

const ForumContent = () => {
  return (
    <div>
      <main className="max-w-7xl mx-auto p-4 flex flex-col lg:flex-row justify-between lg:space-x-8">
        <div className=" lg:w-2/3 space-y-4">
          {/* Banner  */}
          <div className="relative w-full h-64 bg-blue-600 rounded-lg overflow-hidden">
            <img
              src="../src/assets/forum_detail.jpg"
              alt="Cartoon"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-3xl font-bold text-white font-suwannaphum">
                  សំណួរ និង ដំណោះស្រាយ
                </h1>
                <p className="text-gray-200 mt-2 font-suwannaphum">
                  ចួលរួមជាមួយពួកយើង​
                  អ្នកអាចធ្វើការបង្កើតសំណួរនិងធ្វើការឆ្លើយសំណួរដែលទាក់ទងនិងស្ទែម
                </p>
                <a href="/create_forum">
                  <button className="mt-4 bg-white text-blue-600 px-4 py-2 rounded-lg font-suwannaphum">
                    បង្កើតសំណួរឥឡូវនេះ
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Question Cards */}

          {/* Repeat the above block for more questions */}
        </div>

        {/* Sidebar */}
        <aside className="w-full lg:w-1/3 space-y-4 mt-8 lg:mt-0">
          <div className="bg-white shadow rounded-lg p-4">
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
          <div className="bg-white shadow rounded-lg p-4">
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
