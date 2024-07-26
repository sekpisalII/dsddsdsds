import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import Dashboard from "../../components/dashboard/Dashboard";
import { Link } from "react-router-dom";

const Article = () => {
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
  ];

  // Fetch data from API
  async function fetchData() {
    try {
      const response = await fetch(
        "http://136.228.158.126:50001/api/articles/"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      setData(result.results); // Ensure to set the correct data
      setFilteredData(result.results);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  // Filter data based on search input
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

  const paginationComponentOptions = {
    rowsPerPageText: "Rows per page",
    rangeSeparatorText: "of",
    selectAllRowsItem: true,
    selectAllRowsItemText: "All",
  };

  return (
    <>
      <Dashboard />
      <section className="bg-gray-100 w-[70%] mx-auto">
        <DataTable
          columns={columns}
          data={filteredData}
          pagination
          paginationComponentOptions={paginationComponentOptions}
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
          progressComponent={<div>Loading...</div>} // Add a loading indicator
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
