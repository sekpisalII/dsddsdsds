import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditArticle = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState({
    title: "",
    content: "",
    image: "",
  });
  const [file, setFile] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      const accessToken = localStorage.getItem("access_token");
      try {
        const response = await fetch(
          `http://136.228.158.126:50001/api/articles/${id}/`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch article");
        }
        const result = await response.json();
        setArticle({
          title: result.title,
          content: result.content,
          image: result.image,
        });
      } catch (error) {
        console.error("Error fetching article:", error);
      }
    };

    fetchArticle();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setArticle({
      ...article,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let imageUrl = article.image; // Default to existing image URL

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
        return;
      }
    }

    const accessToken = localStorage.getItem("access_token");
    try {
      const response = await fetch(
        `http://136.228.158.126:50001/api/articles/${id}/`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: article.title,
            content: article.content,
            image: imageUrl, // Update with the new or existing image URL
          }),
        }
      );

      if (response.ok) {
        navigate("/article"); // Redirect to the articles list page
      } else {
        const errorText = await response.text(); // Get response text
        console.error("Error response:", errorText);
        throw new Error("Failed to update the article");
      }
    } catch (error) {
      console.error("Error updating article:", error);
    }
  };

  return (
    <div className="container mx-auto p-4 font-suwannaphum bg-[#15A1DF] mt-10 rounded-lg">
      <div className="text-2xl font-bold mb-4 text-black text-center mx-auto">
        Edit Article
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Title</label>
          <input
            type="text"
            name="title"
            value={article.title}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Description</label>
          <textarea
            name="content"
            value={article.content}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Image</label>
          <input
            type="file"
            onChange={handleFileChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        {article.image && (
          <div className="mb-4">
            <img
              src={article.image}
              alt="Article"
              className="w-32 h-32 object-cover"
            />
          </div>
        )}
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

export default EditArticle;
