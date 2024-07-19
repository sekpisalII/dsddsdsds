import React, { useEffect, useState } from "react";
import { saveBook } from "../../services/fetchBooks";
import { useNavigate } from "react-router-dom";
import SpinnerSave from "../appSpinner/SpinnerSave";

const Create_Forum = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const onFormSubmited = (e) => {
    e.preventDefault();
    saveBook({
      title,
      description,
      image: "Null",
    });
    navigate("/forum");
  };
  return (
    <>
      <main className="max-w-7xl mx-auto p-4 space-y-4">
        <div className="bg-white shadow rounded-lg p-6">
          <div className="relative w-full h-64 bg-blue-600 rounded-lg overflow-hidden">
            <img
              src="../src/assets/forum_detail.jpg"
              alt="Cartoon"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-3xl font-bold text-white">
                  សំណួរ និង ដំណោះស្រាយ
                </h1>
                <p className="text-gray-200 mt-2">
                  ចួលរួមជាមួយពួកយើង​
                  អ្នកអាចធ្វើការបង្កើតសំណួរនិងធ្វើការឆ្លើយសំណួរដែលទាក់ទងនិងស្ទែម
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            តើ STEM ជាអ្វី?
          </h2>
          <p className="text-gray-700 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat
            aliquet maecenas ut sit nulla.
          </p>

          <form onSubmit={onFormSubmited}>
            {/* <p>{forumRequest.title}</p>
            <p>{forumRequest.description}</p>
            <p>{forumRequest.image}</p> */}
            <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
              <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                <label htmlFor="comment" className="sr-only">
                  Your comment
                </label>

                <textarea
                  id="title"
                  name="title"
                  value={title}
                  rows="4"
                  className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                  placeholder="Write a Title..."
                  required
                  onChange={(e) => setTitle(e.target.value)}
                ></textarea>
              </div>
            </div>
            <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
              <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                <label htmlFor="description" className="sr-only">
                  Your comment
                </label>

                <textarea
                  id="description"
                  rows="4"
                  className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                  placeholder="Write a comment..."
                  onChange={(e) => setDescription(e.target.value)}
                  name="description"
                  value={description}
                  required
                ></textarea>
              </div>
              <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
                <button
                  type="submit"
                  className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
                >
                  Post comment
                </button>
                {/* <div className="dp">
                  <SpinnerSave />
                </div> */}

                <div className="flex space-x-1 rtl:space-x-reverse sm:space-x-2">
                  <label
                    for="uploadFile1"
                    className="flex  inline-flex items-center bg-blue-700  hover:bg-gray-700 text-white text-base px-5 py-3 outline-none rounded w-max cursor-pointer mx-auto font-suwannaphum"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 mr-2 fill-white inline"
                      viewBox="0 0 32 32"
                    >
                      <path
                        d="M23.75 11.044a7.99 7.99 0 0 0-15.5-.009A8 8 0 0 0 9 27h3a1 1 0 0 0 0-2H9a6 6 0 0 1-.035-12 1.038 1.038 0 0 0 1.1-.854 5.991 5.991 0 0 1 11.862 0A1.08 1.08 0 0 0 23 13a6 6 0 0 1 0 12h-3a1 1 0 0 0 0 2h3a8 8 0 0 0 .75-15.956z"
                        data-original="#000000"
                      />
                      <path
                        d="M20.293 19.707a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L15 16.414V29a1 1 0 0 0 2 0V16.414z"
                        data-original="#000000"
                      />
                    </svg>
                    Upload
                    <input type="file" id="uploadFile1" className="hidden" />
                  </label>
                </div>
              </div>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default Create_Forum;
