import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import Dashboard from "../../components/dashboard/Dashboard";
import { Link, useSearchParams } from "react-router-dom";

const Article = () => {
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(10);
  const [totalRows, setTotalRows] = useState(10);
  const [param, setParam] = useSearchParams();

  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
      sortable: true,
      cell: (row) => (
        <span className="text-base sm:text-sm md:text-lg font-suwannaphum">
          {row.id}
        </span>
      ),
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
        <div className="flex flex-col gap-1">
          <Link
            to={`/editForum/${row.id}`}
            class="bg-green-500 text-sm px-3 py-1 rounded-lg text-center md:px-4 md:py-2"
          >
            Edit
          </Link>
          <button
            onClick={() => handleDelete(row.id)}
            className="bg-red-600 text-sm px-3 py-1 rounded-lg text-center md:px-4 md:py-2"
          >
            Delete
          </button>
        </div>
      ),
    },
  ];

  const handleDelete = async (id) => {
    try {
      const accessToken = localStorage.getItem("access_token");
      if (!accessToken) {
        throw new Error("No access token found");
      }

      const response = await fetch(
        `http://136.228.158.126:50001/api/articles/${id}/`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete article");
      }

      const updatedData = data.filter((item) => item.id !== id);
      setData(updatedData);
      setFilteredData(updatedData);
      setTotalRows(totalRows - 1);
    } catch (error) {
      console.error("Error deleting article:", error);
    }
  };

  const fetchData = async () => {
    try {
      const accessToken = localStorage.getItem("access_token");
      if (!accessToken) {
        throw new Error("No access token found");
      }

      const currentPage = param.get("page") || 1; // Use current page from URL or default to 1
      const response = await fetch(
        `http://136.228.158.126:50001/api/articles/?page=${currentPage}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }


      const result = await response.json();

      const user = localStorage.getItem("user");
      const nameUser = JSON.parse(user);

      const data = result.results;
      const userData = data.filter((users) => users.author === nameUser.name);

      setData(userData);
      setFilteredData(userData);
      setTotalRows(result.count);
      setPage(Number(currentPage));
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [param]); // Refetch data whenever the URL parameters change

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
        fontSize: "20px",
        fontFamily: "suwannaphum",
      },
    },
  };

  const paginationComponentOptions = {
    rowsPerPageText: "Rows per page",
    rangeSeparatorText: "of",
    selectAllRowsItem: true,
    selectAllRowsItemText: "All",
  };

  const handlePageChange = (page) => {
    setParam({ page: page });
    setPage(page);
  };

  return (
    <>
      <Dashboard />
      <section className="bg-gray-100 p-2 ml-[50px] w-[calc(100%-50px)] sm:ml-[65px] sm:w-[calc(100%-65px)] md:ml-[225px] md:w-[calc(100%-225px)] lg:ml-[225px] lg:w-[calc(100%-225px)] xl:ml-[225px] xl:w-[calc(100%-225px)]">
        <DataTable
          columns={columns}
          data={filteredData}
          pagination
          paginationServer
          paginationTotalRows={totalRows}
          paginationComponentOptions={paginationComponentOptions}
          onChangePage={handlePageChange}
          subHeader
          subHeaderComponent={
            <input
              onChange={(e) => setSearch(e.target.value)}
              className="rounded-md border-gray-500 px-3 py-2 mt-5 font-suwannaphum text-base sm:text-lg w-full sm:w-auto"
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
              className="bg-blue-500 px-2 py-2 font-suwannaphum font-semibold text-white rounded-md text-sm md:text-base lg:text-lg"
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
