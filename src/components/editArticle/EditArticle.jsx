import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const EditArticle = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState({
    title: "",
    content: "",
    image: "",
  });
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Fetch the article data by ID
    const fetchArticle = async () => {
      const accessToken = localStorage.getItem("access_token");
      setLoading(true);
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
          throw new Error("Failed to fetch article data");
        }

        const data = await response.json();
        setArticle(data);
      } catch (error) {
        console.error("Error fetching article data:", error);
        Swal.fire("Error", "Failed to fetch article data. Please try again.", "error");
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setArticle((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

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
          const errorText = await uploadResponse.text();
          console.error("Error response:", errorText);
          throw new Error("Failed to upload image");
        }

        const uploadResult = await uploadResponse.json();
        imageUrl = uploadResult.url; // Extract URL from the response
      } catch (error) {
        console.error("Error uploading image:", error);
        Swal.fire("Error", "Failed to upload image. Please try again.", "error");
        setLoading(false);
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
            ...article,
            image: imageUrl, // Update with the new or existing image URL
          }),
        }
      );

      if (response.ok) {
        Swal.fire("Success", "Article updated successfully.", "success");
        navigate("/blog"); // Redirect to the articles list page
      } else {
        const errorText = await response.text();
        console.error("Error response:", errorText);
        throw new Error("Failed to update article");
      }
    } catch (error) {
      console.error("Error updating article:", error);
      Swal.fire("Error", "Failed to update article. Please try again.", "error");
    } finally {
      setLoading(false);
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
          {article.image && (
            <div className="mt-2">
              <img
                src={article.image}
                alt="Article"
                className="w-32 h-32 object-cover"
              />
            </div>
          )}
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded"
          disabled={loading}
        >
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default EditArticle;
