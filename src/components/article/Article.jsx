import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import Dashboard from '../../components/dashboard/Dashboard';
const Article = () => {
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const columns = [
    {
      name: 'ID',
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: 'Username',
      selector: (row) => row.username,
      sortable: true,
    },
    {
      name: 'Birth Date',
      selector: (row) => row.birthDate,
      sortable: true,
    },
  ];
  // Fetch data from API
  async function fetchData() {
    try {
      const response = await fetch('https://dummyjson.com/users');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setData(data.users);
      setFilteredData(data.users);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
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

    const result = data.filter((item) =>
      item.username.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredData(result);
  }, [search, data]);

  return (
    <>
    {/* Article */}
      <Dashboard />
      <section className="bg-gray-100 w-[70%] mx-auto">
        <DataTable
          columns={columns}
          data={filteredData}
          pagination
          subHeader
          subHeaderComponent={
            <input
              onChange={(e) => setSearch(e.target.value)}
              className="rounded-md border-gray-500 px-3 py-2 mt-5 font-suwannaphum ml-2"
              placeholder="Search ..."
              type="text"
            />
          }
        //   progressPending={isLoading}
        //   progressComponent={<LoadingComponent />} 
          fixedHeader
          fixedHeaderScrollHeight="600px"
          actions={
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg font-suwannaphum mt-5">
              + New
            </button>
          }
        />
      </section>
    </>
  );
};

export default Article;
