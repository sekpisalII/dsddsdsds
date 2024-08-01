import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import Dashboard from '../../components/dashboard/Dashboard';
import { Link, useSearchParams } from "react-router-dom";

const GetForum = () => {
  const [search, setSearch] = useState('');
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
        <span className="text-base sm:text-sm md:text-lg font-suwannaphum">
          {row.author}
        </span>
      ),
    },
    {
      name: "Title",
      selector: (row) => row.title,
      sortable: true,
      cell: (row) => (
        <span className="text-base sm:text-sm md:text-lg line-clamp-2 font-suwannaphum">
          {row.title}
        </span>
      ),
    },
    {
      name: "Description",
      selector: (row) => row.description,
      sortable: true,
      cell: (row) => (
        <span className="text-base sm:text-sm md:text-lg line-clamp-2 font-suwannaphum">
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
          className="w-12 h-12 sm:w-16 sm:h-16 object-cover"
        />
      ),
    },
    {
      name: "Created",
      selector: (row) => row.created_at,
      sortable: true,
      cell: (row) => (
        <span className="text-base sm:text-sm md:text-lg font-suwannaphum">
          {new Date(row.created_at).toLocaleDateString()}
        </span>
      ),
    },
    {
      name: "Actions",
      cell: (row) => (
        <div class="flex flex-col gap-1">
          <Link
            to={`/editForum/${row.id}`}
            class="bg-green-500 text-sm px-3 py-1 rounded-lg text-center md:px-4 md:py-2"
          >
            Edit
          </Link>
          <button
            onClick={() => handleDelete(row.id)}
            class="bg-red-600 text-sm px-3 py-1 rounded-lg text-center md:px-4 md:py-2"
          >
            Delete
          </button>
        </div>
      ),
    },
  ];

  const handleDelete = async (id) => {
    try {
      const accessToken = localStorage.getItem('access_token');
      if (!accessToken) {
        throw new Error('No access token found');
      }

      const response = await fetch(`http://136.228.158.126:50001/api/forums/${id}/`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to delete article');
      }

      const updatedData = data.filter((item) => item.id !== id);
      setData(updatedData);
      setFilteredData(updatedData);
      setTotalRows(totalRows - 1); 
    } catch (error) {
      console.error('Error deleting article:', error);
    }
  };

  async function fetchData(page) {
    try {
      const accessToken = localStorage.getItem('access_token');
      if (!accessToken) {
        throw new Error('No access token found');
      }

      const response = await fetch(`http://136.228.158.126:50001/api/forums/?page=${param.get('page')}`, {
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
        const pang = Math.ceil(result.count / 10);
        for (let i = 1; i <= pang; i++) {
          setParam({ page: i });
          location.reload();
        }
      }

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
    fetchData(page);
  }, [page]);

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
          customStyles={customStyles}
        />
      </section>
    </>
  );
};

export default GetForum;
