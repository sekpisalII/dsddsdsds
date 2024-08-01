import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import Dashboard from '../../components/dashboard/Dashboard';
import { Link, useSearchParams } from "react-router-dom";
const Article = () => {
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [param, setParam] = useSearchParams();
  const [articleToDelete, setArticleToDelete] = useState(null);

  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
      sortable: true,
      cell: (row) => <span className="text-lg font-suwannaphum">{row.id}</span>,
    },
    {
      name: "Username",
      selector: (row) => row.author,
      sortable: true,
      cell: (row) => (
        <span className="text-lg font-suwannaphum">{row.author}</span>
      ),
    },
    {
      name: "Title",
      selector: (row) => row.title,
      sortable: true,
      cell: (row) => (
        <span className="text-lg line-clamp-2 font-suwannaphum">
          {row.title}
        </span>
      ),
    },
    {
      name: "Description",
      selector: (row) => row.content,
      sortable: true,
      cell: (row) => (
        <span className="text-lg line-clamp-2 font-suwannaphum">
          {row.content}
        </span>
      ),
    },
    {
      name: "Image",
      selector: (row) => row.image,
      sortable: true,
      cell: (row) => (
        <img
          src={row.image}
          alt={row.title}
          className="w-16 h-16 object-cover"
        />
      ),
    },
    {
      name: "Created",
      selector: (row) => row.created_at,
      sortable: true,
      cell: (row) => (
        <span className="text-lg font-suwannaphum">
          {new Date(row.created_at).toLocaleDateString()}
        </span>
      ),
    },
    {
      name: "Actions",
      cell: (row) => (
        <div className="space-x-2">
          <Link
            to={`/editArticle/${row.id}`}
            className="button bg-green-500 px-2 py-1 font-suwannaphum text-xl text-white rounded-md pt-1"
          >
            Edit
          </Link>
          <button
            onClick={() => handleDelete(row.id)}
            className="button bg-red-600 px-2 py-2 font-suwannaphum text-xl text-white rounded-md"
          >
            Delete
          </button>
        </div>
      ),
    },
  ];

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this article?")) {
      const accessToken = localStorage.getItem('access_token');
      try {
        const response = await fetch(`http://136.228.158.126:50001/api/articles/${id}/`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${accessToken}`,
          },
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        setData(data.filter(item => item.id !== id));
        setFilteredData(filteredData.filter(item => item.id !== id));
        alert("Article deleted successfully");
      } catch (error) {
        console.error("Error deleting data:", error);
        alert("Failed to delete the article");
      }
    }
  };

  const fetchData = async () => {
    try {
      const accessToken = localStorage.getItem('access_token');
      if (!accessToken) {
        throw new Error('No access token found');
      }

      const response = await fetch(`http://136.228.158.126:50001/api/articles/?page=${param.get('page')}`, {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      const user = localStorage.getItem('user');
      const nameUser = JSON.parse(user);
      const data = result.results;
      const userData = data.filter((users) => users.author === nameUser.name);

      if (userData.length === 0) {
        const pages = Math.ceil(result.count / 10);
        for (let i = 1; i <= pages; i++) {
          setParam({ page: i });
          location.reload();
        }
      }
      setData(userData);
      setFilteredData(userData);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (!search) {
      setFilteredData(data);
      return;
    }

    const results = data.filter(
      (item) =>
        item.author.toLowerCase().includes(search.toLowerCase()) ||
        item.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredData(results);
  }, [search, data]);

  const customStyles = {
    headCells: {
      style: {
        fontSize: "25px",
        fontFamily: "suwannaphum",
      },
    },
  };

  return (
    <>
      <Dashboard />
      <section className="bg-gray-200 w-[70%] mx-auto">
        <DataTable
          columns={columns}
          data={filteredData}
          pagination={false}
          subHeader
          subHeaderComponent={
            <input
              onChange={(e) => setSearch(e.target.value)}
              className="rounded-md border-gray-500 px-3 py-2 mt-5 font-suwannaphum ml-2 text-lg"
              placeholder="Search ..."
              type="text"
            />
          }
          progressPending={isLoading}
          progressComponent={<div>Loading...</div>}
          fixedHeader
          fixedHeaderScrollHeight="600px"
          actions={
            <Link
              to="/postArticle"
              className="button bg-blue-500 px-2 py-2 font-suwannaphum font-semibold text-white rounded-md"
            >
              +New
            </Link>
          }
          customStyles={customStyles}
        />
      </section>
    </>
  );
};

export default Article;
