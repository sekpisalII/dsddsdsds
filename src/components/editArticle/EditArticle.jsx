import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
const EditArticle = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState({
    id: '',
    author: '',
    title: '',
    content: '',
    image: '',
    created_at: ''
  });

  useEffect(() => {
    // Fetch the article details by ID
    const fetchArticle = async () => {
      const accessToken = localStorage.getItem('access_token');
      const response = await fetch(`http://136.228.158.126:50001/api/articles/${id}/`, {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
      });
      const result = await response.json();
      setArticle(result);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const accessToken = localStorage.getItem('access_token');
    try {
      const response = await fetch(`http://136.228.158.126:50001/api/articles/${id}/`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(article),
      });

      if (response.ok) {
        navigate('/article'); // Redirect to the articles list page
      } else {
        throw new Error('Failed to update the article');
      }
    } catch (error) {
      console.error("Error updating article:", error);
    }
  };

  return (

    <div className="container mx-auto p-4 font-suwannaphum bg-[#15A1DF] mt-10 rounded-lg">
      <div className="text-2xl font-bold mb-4 text-black text-center mx-auto" >Edit Article</div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 line-clamp-1">Username</label>
          <input
            type="text"
            name="author"
            value={article.author}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 line-clamp-1">Title</label>
          <input
            type="text"
            name="title"
            value={article.title}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 line-clamp-1">Desription</label>
          <textarea
            name="content"
            value={article.content}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 line-clamp-1">Image</label>
          <input
            type="text"
            name="image"
            value={article.image}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 line-clamp-1">Created At</label>
          <input
            type="text"
            name="created_at"
            value={article.created_at}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
          បញ្ចូន
        </button>
      </form>
    </div>
  );
};

export default EditArticle;

