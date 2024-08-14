// components/Create_Forum.js
import React, { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { API_BASE_URI, AUTH_HEADER } from "../../services/constants";
import CustomEditor from "../texteditor/CustomEditor";

const Create_Forum = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  // Function to strip HTML tags and return plain text
  const stripHtmlTags = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  };

  // Handle form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Strip HTML tags and trim the content
    const strippedTitle = stripHtmlTags(title).trim();
    const strippedDescription = stripHtmlTags(description).trim();

    // Validate title and description
    if (!strippedTitle || !strippedDescription) {
      Swal.fire({
        title: "Error!",
        text: "Title and description cannot be blank.",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }

    const formData = new FormData();
    if (image) formData.append("file", image);

    try {
      // Upload the image if there is one
      let imageUrl = "";
      if (image) {
        const uploadResponse = await fetch(`${API_BASE_URI}upload/`, {
          method: "POST",
          body: formData,
        });

        if (!uploadResponse.ok) {
          throw new Error("Failed to upload image");
        }

        const uploadData = await uploadResponse.json();
        imageUrl = uploadData.url;
      }

      // Submit the post
      const postResponse = await fetch(`${API_BASE_URI}forums/`, {
        method: "POST",
        body: JSON.stringify({
          title: strippedTitle,
          description: strippedDescription,
          image: imageUrl,
        }),
        headers: {
          "Content-Type": "application/json",

          ...AUTH_HEADER,
        },
      });

      if (!postResponse.ok) {
        const errorData = await postResponse.json();
        throw new Error(
          `Failed to submit the post: ${
            errorData.title?.[0] ||
            errorData.description?.[0] ||
            "Unknown error"
          }`
        );
      }

      Swal.fire({
        title: "Success!",
        text: "Your post has been submitted successfully.",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        navigate("/forum");
      });
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: `There was an issue submitting your post. ${error.message}`,
        icon: "error",
        confirmButtonText: "Try Again",
      });
    }
  };

  // Handle image change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreviewImage(URL.createObjectURL(file));
  };

  return (
    <main className="max-w-7xl mx-auto p-4 space-y-4">
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          Create a New Forum Post
        </h2>
        <form onSubmit={handleFormSubmit}>
          <label
            htmlFor="title"
            className="block text-md leading-6 text-gray-900 font-bold"
          >
            Title
          </label>
          <CustomEditor value={title} onChange={setTitle} />

          <label
            htmlFor="description"
            className="block text-md leading-6 text-gray-900 font-bold"
          >
            Description
          </label>
          <CustomEditor value={description} onChange={setDescription} />

          <div className="col-span-full">
            <label
              htmlFor="file-upload"
              className="block text-md font-bold leading-6 text-gray-900"
            >
              Image
            </label>
            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
              <div className="text-center">
                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  className="sr-only"
                  onChange={handleImageChange}
                />
                <label
                  htmlFor="file-upload"
                  className="cursor-pointer font-semibold text-indigo-600"
                >
                  {previewImage ? (
                    <img
                      src={previewImage}
                      alt="Preview"
                      className="mt-2 rounded-lg"
                    />
                  ) : (
                    "Upload an image"
                  )}
                </label>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="inline-flex w-[100px] items-center py-2.5 px-4 text-md font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </main>
  );
};

export default Create_Forum;
