import { useEffect, useState } from "react";
import BlogAllCard from "../../components/blogAllCard/BlogAllCard";
import FooterCard from "../../components/footer/FooterCard";
import Spinner from "../../components/appSpinner/Spinner";
import NavbarComponent from "../../components/navbar/NavbarComponent";

// Define the categories for filtering
const categories = ["All", "Technology", "School", "education", "Other"];

export const Blog = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [filteredData, setFilteredData] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  useEffect(() => {
    // Fetch the initial set of blogs
    fetchBlogs(1);
  }, []);

  const fetchBlogs = (page) => {
    setIsLoading(true);
    fetch(`http://136.228.158.126:50001/api/articles/?page=${page}`)
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
    fetchBlogs(pageNumber);
  };
  const handleFilterClick = (filter) => {
    setActiveFilter(filter);

    // Special handling for "History"
    if (filter === "All") {
      setFilteredData(data);
    } else if (filter === "Technology") {
      const historyKeywords = [
        "Technology",
        "programming",
        "programing",
        "បច្ចេកវិទ្យា",
        "ឌីជីថល",
      ];

      const filtered = data.filter((item) =>
        historyKeywords.some((keyword) =>
          item.title.toLowerCase().includes(keyword.toLowerCase())
        )
      );
      setFilteredData(filtered);
    } else if (filter === "School") {
      const historyKeywords = ["School", "សាលា", "ចំណេះដឹង"];
      const filtered = data.filter((item) =>
        historyKeywords.some((keyword) =>
          item.title.toLowerCase().includes(keyword.toLowerCase())
        )
      );
      setFilteredData(filtered);
    } else if (filter === "Education") {
      const historyKeywords = ["Education", "អប់រំ", "ការអប់រំ"];
      const filtered = data.filter((item) =>
        historyKeywords.some((keyword) =>
          item.title.toLowerCase().includes(keyword.toLowerCase())
        )
      );
      setFilteredData(filtered);
    } else {
      const filtered = data.filter((item) =>
        item.title.toLowerCase().includes(filter.toLowerCase())
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
            filteredData.map((blog) => (
              <BlogAllCard key={blog.id} blog={blog} />
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

export default Blog;
