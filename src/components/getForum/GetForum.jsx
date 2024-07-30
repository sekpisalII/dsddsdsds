import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import Dashboard from "../../components/dashboard/Dashboard";
import { useSearchParams } from "react-router-dom";

const Article = () => {
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalRows, setTotalRows] = useState(0);
  const [param, setParam] = useSearchParams();

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
      selector: (row) => row.description,
      sortable: true,
      cell: (row) => (
        <span className="text-lg line-clamp-2 font-suwannaphum">
          {row.description}
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

  async function fetchData(page) {
    try {
      const accessToken = localStorage.getItem("access_token");

      if (!accessToken) {
        throw new Error("No access token found");
      }

      const response = await fetch(
        `http://136.228.158.126:50001/api/forums/?page=${page}`,
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
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    const pageParam = parseInt(param.get("page") || "1", 10);
    setPage(pageParam);
    fetchData(pageParam); // Fetch data for the current page
  }, [param]);

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

  const handlePageChange = (page) => {
    setParam({ page: page.toString() }); // Update URL params
    setPage(page); // Update state
  };

  return (
    <>
      <Dashboard />
      <section className="bg-gray-100 w-[70%] mx-auto">
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
              className="rounded-md border-gray-500 px-3 py-2 mt-5 font-suwannaphum ml-2 text-lg"
              placeholder="Search ..."
              type="text"
            />
          }
          progressPending={isLoading}
          progressComponent={<div>Loading...</div>}
          fixedHeader
          fixedHeaderScrollHeight="600px"
          customStyles={customStyles}
        />
      </section>
    </>
  );
};

export default Article;
