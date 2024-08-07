import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const EditForum = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [forumData, setForumData] = useState({
    title: "",
    description: "",
    image: "",
  });
  const [file, setFile] = useState(null);

  useEffect(() => {
    // Fetch the forum data by ID
    const fetchForumData = async () => {
      const accessToken = localStorage.getItem("access_token");
      try {
        const response = await fetch(
          `http://136.228.158.126:50001/api/forums/${id}/`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch forum data");
        }

        const data = await response.json();
        setForumData(data);
      } catch (error) {
        console.error("Error fetching forum data:", error);
      }
    };

    fetchForumData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForumData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let imageUrl = forumData.image; // Default to existing image URL

    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      try {
        const uploadResponse = await fetch(
          "http://136.228.158.126:50001/api/upload/",
          {
            method: "POST",
            body: formData,
          }
        );

        if (!uploadResponse.ok) {
          const errorText = await uploadResponse.text(); // Get response text
          console.error("Error response:", errorText);
          throw new Error("Failed to upload image");
        }

        const uploadResult = await uploadResponse.json();
        imageUrl = uploadResult.url; // Extract URL from the response
      } catch (error) {
        console.error("Error uploading image:", error);
        Swal.fire(
          "Error",
          "Failed to upload image. Please try again.",
          "error"
        );
        return;
      }
    }

    const accessToken = localStorage.getItem("access_token");
    try {
      const response = await fetch(
        `http://136.228.158.126:50001/api/forums/${id}/`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...forumData,
            image: imageUrl, // Update with the new or existing image URL
          }),
        }
      );

      if (response.ok) {
        Swal.fire("Success", "Forum updated successfully.", "success");
        navigate("/getforum"); // Redirect to the forums list page
      } else {
        const errorText = await response.text(); // Get response text
        console.error("Error response:", errorText);
        throw new Error("Failed to update forum data");
      }
    } catch (error) {
      console.error("Error updating forum data:", error);
      Swal.fire(
        "Error",
        "Failed to update forum data. Please try again.",
        "error"
      );
    }
  };


  return (
    <div className="container mx-auto p-4 font-suwannaphum bg-[#15A1DF] mt-10 rounded-lg">
      <div className="text-2xl font-bold mb-4 text-black text-center mx-auto">
        Edit Forum Post
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Title</label>
          <input
            type="text"
            name="title"
            value={forumData.title}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Description</label>
          <textarea
            name="description"
            value={forumData.description}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Image</label>
          <input
            type="file"
            onChange={handleFileChange}
            className="w-full px-3 py-2 border rounded"
          />
          {forumData.image && (
            <div className="mt-2">
              <img
                src={forumData.image}
                alt="Forum"
                className="w-32 h-32 object-cover"
              />
            </div>
          )}
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default EditForum;
