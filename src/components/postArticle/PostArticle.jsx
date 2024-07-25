// import React from 'react';
import React, { useEffect, useState } from "react";
import { saveBlog, saveBook } from "../../services/fetchBooks";
import { useNavigate } from "react-router-dom";
import { API_BASE_URI } from "../../services/constants";

const PostArticle = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const onFormSubmited = async (e) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append("file", image);

    try {
      const response = await fetch(`${API_BASE_URI}upload/`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to upload image");
      }

      const json = await response.json();
      console.log(json);

      await saveBlog({
        title,
        content,
        image: json.url,
      });

      navigate("/blog");
    } catch (error) {
      console.error(error);
      // Handle any errors that occurred during the upload
    }
  };
  useEffect(() => {
    return () => {
      if (previewImage) {
        URL.revokeObjectURL(previewImage);
      }
    };
  }, [previewImage]);
  const onForumImage = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreviewImage(URL.createObjectURL(file));
  };
  return (
    <>
      <main className="max-w-7xl mx-auto p-4 space-y-4">
        <div className="bg-white shadow rounded-lg p-6">
          <div className="relative w-full h-64 bg-blue-600 rounded-lg overflow-hidden">
            <img
              src="../src/assets/create_forum.jpg "
              alt="Cartoon"
              className="object-cover w-full h-full p-2"
            />
          </div>
        </div>
        <div className="bg-white shadow rounded-lg p-6​ font-suwannaphum">
          <h2 className="text-3xl font-semibold text-gray-900 mb-2 text-center">
            ការបង្កើតប្លុក
          </h2>
          <form onSubmit={onFormSubmited}>
            <label
              for="cover-photo"
              className="block text-md fleading-6 text-gray-900 font-bold font-suwannaphum"
            >
              ចំណងជើង**
            </label>
            <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
              <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                <textarea
                  id="title"
                  name="title"
                  value={title}
                  rows="4"
                  className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                  placeholder="សរសេរ ចំណងជើង**"
                  required
                  onChange={(e) => setTitle(e.target.value)}
                ></textarea>
              </div>
            </div>
            <label
              for="cover-photo"
              className="block text-md  leading-6 text-gray-900 font-bold font-suwannaphum"
            >
              ពិពណ៏នាចំណងជើង**
            </label>
            <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
              <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                <textarea
                  id="description"
                  rows="4"
                  className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                  placeholder="ការពិពណ៏នាចមណងជើង**"
                  onChange={(e) => setContent(e.target.value)}
                  name="description"
                  value={content}
                  required
                ></textarea>
              </div>
            </div>
            <div className="col-span-full">
              <label
                for="cover-photo"
                className="block text-md font-bold leading-6 text-gray-900 font-suwannaphum"
              >
                រូបភាព**
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-300"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      for="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span className="font-suwannaphum">ដាក់បញ្ចូលរូបភាព</span>
                      <div>
                        {previewImage && (
                          <img
                            src={previewImage}
                            alt="Preview"
                            style={{
                              maxWidth: "200px",
                              borderRadius: "10px", // Adjust the value as needed
                            }}
                          />
                        )}
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                          onChange={onForumImage}
                        />
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between  py-2 border-t dark:border-gray-600">
              <button
                type="submit"
                className="inline-flex​ w-[100px] font-suwannaphum items-center py-2.5 px-4 text-md font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
              >
                បង្ហោះ
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};
export default PostArticle;
