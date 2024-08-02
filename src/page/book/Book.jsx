import React, { useState, useEffect } from "react";
import BookAllCard from "../../components/bookAllCard/BookAllCard";
import FooterCard from "../../components/footer/FooterCard";
import Spinner from "../../components/appSpinner/Spinner";
import NavbarComponent from "../../components/navbar/NavbarComponent";
const categories = [
  "ទាំងអស់",
  "Google",
  "ប្រវត្តវិទ្យា",
  "ស្នេហា",
  "កម្រងវិញ្ញាសារ",
  "ផ្សេងៗទៀត",
];

const Book = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchBooks(1);
  }, []);

  const fetchBooks = (page) => {
    setIsLoading(true);
    fetch(`http://136.228.158.126:50001/api/courses/?page=${page}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data.results);
        setFilteredData(data.results); // Initialize filtered data
        setCurrentPage(page);
        setTotalPages(Math.ceil(data.count / 10)); // Assuming 10 books per page
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching books:", error);
        setIsLoading(false);
      });
  };

  const handlePageChange = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    fetchBooks(pageNumber);
  };

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    if (filter === "ទាំងអស់") {
      setFilteredData(data);
    } else if (filter === "Google") {
      const filtered = data.filter((item) =>
        item.course_name.toLowerCase().includes("google")
      );
      setFilteredData(filtered);
    } else if (filter === "ប្រវត្តវិទ្យា") {
      const historyKeywords = ["ប្រវត្តវិទ្យា", "his", "ប្រវត្តិ"];
      const filtered = data.filter((item) =>
        historyKeywords.some((keyword) =>
          item.course_name.toLowerCase().includes(keyword.toLowerCase())
        )
      );
      setFilteredData(filtered);
    } else if (filter === "ស្នេហា") {
      const historyKeywords = ["Love", "ស្នេហា", "សេច"];
      const filtered = data.filter((item) =>
        historyKeywords.some((keyword) =>
          item.course_name.toLowerCase().includes(keyword.toLowerCase())
        )
      );
      setFilteredData(filtered);
    } else if (filter === "កម្រងវិញ្ញាសារ") {
      const historyKeywords = ["Exam Preparation Book", "វិញ្ញាសា", "ប្រឡង"];
      const filtered = data.filter((item) =>
        historyKeywords.some((keyword) =>
          item.course_name.toLowerCase().includes(keyword.toLowerCase())
        )
      );
      setFilteredData(filtered);
    } else {
      const filtered = data.filter((item) =>
        item.course_name.toLowerCase().includes(filter.toLowerCase())
      );
      setFilteredData(filtered);
    }
  };

  return (
    <>
      <NavbarComponent />
      <div className="flex flex-wrap gap-2 mt-5 justify-center">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-full font-suwannaphum flex flex-wrap gap-2 mt-5  ${
              activeFilter === category
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
            onClick={() => handleFilterClick(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {isLoading ? (
        <Spinner />
      ) : (
        <section
          id="Projects"
          className="p-10 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-5"
        >
          {filteredData.length > 0 ? (
            filteredData.map((book) => (
              <BookAllCard key={book.id} book={book} />
            ))
          ) : (
            <p>No courses found</p>
          )}
        </section>
      )}

      <div className="flex justify-center mt-4">
        <div className="bg-white p-4 flex items-center flex-wrap">
          <button
            className="px-4 py-2 text-green-600 transition-colors duration-150 bg-white border border-r-0 border-green-600 rounded-l-lg focus:shadow-outline hover:bg-green-100"
            disabled={currentPage === 1 || isLoading}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Prev
          </button>
          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (pageNumber) => (
              <button
                key={pageNumber}
                onClick={() => handlePageChange(pageNumber)}
                className={`px-4 py-2 text-green-600 transition-colors duration-150 bg-white border border-r-0 border-green-600 focus:shadow-outline ${
                  currentPage === pageNumber ? "bg-green-100" : ""
                }`}
              >
                {pageNumber}
              </button>
            )
          )}
          <button
            className="px-4 py-2 text-green-600 transition-colors duration-150 bg-white border border-green-600 rounded-r-lg focus:shadow-outline hover:bg-green-100"
            disabled={currentPage === totalPages || isLoading}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Next
          </button>
        </div>
      </div>
      <FooterCard />
    </>
  );
};

export default Book;
