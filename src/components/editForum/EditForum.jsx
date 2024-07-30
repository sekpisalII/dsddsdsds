import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditForum = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [forumData, setForumData] = useState({
    id: '',
    author: '',
    title: '',
    description: '',
    image: '',
    created_at: '',
  });

  useEffect(() => {
    // Fetch the forum data by ID
    const fetchForumData = async () => {
      try {
        const accessToken = localStorage.getItem('access_token');
        if (!accessToken) {
          throw new Error('No access token found');
        }

        const response = await fetch(`http://136.228.158.126:50001/api/forums/${id}/`, {
          headers: {
            'Authorization': `Bearer ${accessToken}`,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch forum data');
        }

        const data = await response.json();
        setForumData(data);
      } catch (error) {
        console.error('Error fetching forum data:', error);
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const accessToken = localStorage.getItem('access_token');
      if (!accessToken) {
        throw new Error('No access token found');
      }

      const response = await fetch(`http://136.228.158.126:50001/api/forums/${id}/`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(forumData),
      });

      if (!response.ok) {
        throw new Error('Failed to update forum data');
      }

      navigate('/getforum'); // Navigate back to the forum list
    } catch (error) {
      console.error('Error updating forum data:', error);
    }
  };
  return (
    <div className="container mx-auto p-4 font-suwannaphum bg-[#15A1DF] mt-10 rounded-lg">
      <div className="text-2xl font-bold mb-4 text-black text-center mx-auto">Edit Forum Post</div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 line-clamp-1">ID</label>
          <input
            type="text"
            name="id"
            value={forumData.id}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            readOnly
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 line-clamp-1">Author</label>
          <input
            type="text"
            name="author"
            value={forumData.author}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 line-clamp-1">Title</label>
          <input
            type="text"
            name="title"
            value={forumData.title}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 line-clamp-1">Description</label>
          <textarea
            name="description"
            value={forumData.description}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 line-clamp-1">Image</label>
          <input
            type="text"
            name="image"
            value={forumData.image}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 line-clamp-1">Created At</label>
          <input
            type="text"
            name="created_at"
            value={forumData.created_at}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            readOnly
          />
        </div>
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
          បញ្ចូន
        </button>
      </form>
    </div>
  );
};

export default EditForum;
