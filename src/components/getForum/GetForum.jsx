import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import Dashboard from "../../components/dashboard/Dashboard";
import { Link, useSearchParams } from "react-router-dom";
import Swal from "sweetalert2"; // Import SweetAlert2

const GetForum = () => {
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalRows, setTotalRows] = useState(0);
  const [checkAllPages, setCheckAllPages] = useState(false);
  const [param] = useSearchParams(); // Used for initial data fetch based on URL params

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
        <span
          className="text-lg line-clamp-2 font-suwannaphum"
          dangerouslySetInnerHTML={{ __html: row.title || "No title" }}
        ></span>
      ),
    },
    {
      name: "Description",
      selector: (row) => row.description,
      sortable: true,
      cell: (row) => (
        <span
          className="text-lg line-clamp-2 font-suwannaphum"
          dangerouslySetInnerHTML={{
            __html: row.description || "No description",
          }}
        ></span>
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
            className="bg-green-500 text-sm px-3 py-1 rounded-lg text-center md:px-4 md:py-2"
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
      // Show confirmation dialog
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
      });

      if (result.isConfirmed) {
        const accessToken = localStorage.getItem("access_token");
        if (!accessToken) {
          throw new Error("No access token found");
        }

        const response = await fetch(
          `http://136.228.158.126:50001/api/forums/${id}/`,
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

        // Remove the deleted article from the current data set
        const updatedData = data.filter((item) => item.id !== id);
        setData(updatedData);
        setFilteredData(updatedData);
        setTotalRows(totalRows - 1);

        // Show success message
        Swal.fire("Deleted!", "Your forum post has been deleted.", "success");
      }
    } catch (error) {
      console.error("Error deleting article:", error);
      Swal.fire(
        "Error!",
        "There was an issue deleting the forum post.",
        "error"
      );
    }
  };

  const fetchData = async (currentPage = page, fetchAll = false) => {
    try {
      const accessToken = localStorage.getItem("access_token");
      if (!accessToken) {
        throw new Error("No access token found");
      }

      const response = await fetch(
        `http://136.228.158.126:50001/api/forums/?page=${currentPage}`,
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

      setData((prevData) => {
        const newData = [...prevData, ...userData];
        return [...new Set(newData.map((item) => item.id))].map((id) =>
          newData.find((item) => item.id === id)
        );
      });
      setFilteredData((prevData) => {
        const newData = [...prevData, ...userData];
        return [...new Set(newData.map((item) => item.id))].map((id) =>
          newData.find((item) => item.id === id)
        );
      });
      setTotalRows(result.count);
      setPage(Number(currentPage));
      setIsLoading(false);

      if (fetchAll && result.next) {
        fetchData(currentPage + 1, fetchAll);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
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
    setPage(page);
    if (!checkAllPages) {
      fetchData(page);
    }
  };

  const handleCheckAllPages = () => {
    setCheckAllPages(true);
    fetchData(1, true);
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
          customStyles={customStyles}
          key={page} // Key to force re-render on page change
        />
        {filteredData.length === 0 && !isLoading && (
          <div className="text-center mt-4">
            <button
              onClick={handleCheckAllPages}
              className="bg-blue-500 px-4 py-2 font-suwannaphum font-semibold text-white rounded-md"
            >
              Check All Pages
            </button>
          </div>
        )}
      </section>
    </>
  );
};

export default GetForum;
