import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import Dashboard from "../../components/dashboard/Dashboard";
import { Link, useSearchParams } from "react-router-dom";
import styled from 'styled-components';

const CustomCell = styled.div`
  text-align: ${props => props.$align};
`;

const Article = () => {
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [param, setParam] = useSearchParams();
  const [articleToDelete, setArticleToDelete] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
      sortable: true,
      cell: (row) => <CustomCell $align="left" className="text-base sm:text-sm md:text-lg font-suwannaphum">{row.id}</CustomCell>,
    },
    {
      name: "Username",
      selector: (row) => row.author,
      sortable: true,
      cell: (row) => <CustomCell $align="left" className="text-base sm:text-sm md:text-lg font-suwannaphum">{row.author}</CustomCell>,
    },
    {
      name: "Title",
      selector: (row) => row.title,
      sortable: true,
      cell: (row) => <CustomCell $align="left" className="text-base sm:text-sm md:text-lg line-clamp-2 font-suwannaphum">{row.title}</CustomCell>,
    },
    {
      name: "Description",
      selector: (row) => row.content,
      sortable: true,
      cell: (row) => <CustomCell $align="left" className="text-base sm:text-sm md:text-lg line-clamp-2 font-suwannaphum">{row.content}</CustomCell>,
    },
    {
      name: "Image",
      selector: (row) => row.image,
      sortable: true,
      cell: (row) => (
        <CustomCell $align="left">
          <img
            src={row.image}
            alt={row.title}
            className="w-16 h-16 object-cover"
          />
        </CustomCell>
      ),
    },
    {
      name: "Created",
      selector: (row) => row.created_at,
      sortable: true,
      cell: (row) => <CustomCell $align="left" className="text-base sm:text-sm md:text-lg font-suwannaphum">{new Date(row.created_at).toLocaleDateString()}</CustomCell>,
    },
    {
      name: "Actions",
      cell: (row) => (
        <div className="flex flex-col gap-1">
          <Link
            to={`/editArticle/${row.id}`}
            className="button bg-green-500 text-sm px-3 py-1 rounded-lg text-center md:px-4 md:py-2"
          >
            Edit
          </Link>
          <button
            onClick={() => handleDelete(row.id)}
            className="button bg-red-600 text-sm px-3 py-1 rounded-lg text-center md:px-4 md:py-2"
          >
            Delete
          </button>
        </div>
      ),
    },
  ];

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this article?")) {
      const accessToken = localStorage.getItem("access_token");
      try {
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
          throw new Error("Network response was not ok");
        }
        setData(data.filter((item) => item.id !== id));
        setFilteredData(filteredData.filter((item) => item.id !== id));
        alert("Article deleted successfully");
      } catch (error) {
        console.error("Error deleting data:", error);
        alert("Failed to delete the article");
      }
    }
  };

  const fetchData = async (page = 1) => {
    try {
      const accessToken = localStorage.getItem("access_token");
      if (!accessToken) {
        throw new Error("No access token found");
      }

      const response = await fetch(
        `http://136.228.158.126:50001/api/articles/?page=${page}&limit=${rowsPerPage}`,
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
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage, rowsPerPage]);

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

  const handlePageChange = page => {
    setCurrentPage(page);
    fetchData(page);
  };

  const handleRowsPerPageChange = rowsPerPage => {
    setRowsPerPage(rowsPerPage);
    fetchData(currentPage);
  };

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
      <section className="bg-gray-100 p-2 ml-[50px] w-[calc(100%-50px)] sm:ml-[65px] sm:w-[calc(100%-65px)] md:ml-[225px] md:w-[calc(100%-225px)] lg:ml-[225px] lg:w-[calc(100%-225px)] xl:ml-[225px] xl:w-[calc(100%-225px)]">
        <div className="container mx-auto">
          <DataTable
            columns={columns}
            data={filteredData}
            pagination
            paginationServer
            paginationTotalRows={data.length}
            onChangePage={handlePageChange}
            onChangeRowsPerPage={handleRowsPerPageChange}
            subHeader
            subHeaderComponent={
              <input
                onChange={(e) => setSearch(e.target.value)}
                className="rounded-md border-gray-500 px-3 py-2 mt-5 font-suwannaphum ml-2 text-base sm:text-lg w-full sm:w-auto"
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
        </div>
      </section>
    </>
  );
};

export default Article;
