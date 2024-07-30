import { useEffect, useState } from "react";
import BlogAllCard from "../../components/blogAllCard/BlogAllCard";
import FooterCard from "../../components/footer/FooterCard";
import Spinner from "../../components/appSpinner/Spinner";
import ButtonMenuBlog from "../../components/buttonMenuBlog/ButtonMenuBlog";
import NavbarComponent from "../../components/navbar/NavbarComponent";

export const Blog = () => {
  const [blog, setBlog] = useState([{}]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    // Fetch the initial set of blogs
    fetchBlogs(1);
  }, []);

  const fetchBlogs = (page) => {
    setIsLoading(true);
    fetch(`http://136.228.158.126:50001/api/articles/?page=${page}`)
      .then((response) => response.json())
      .then((data) => {
        setBlog(data.results);
        setCurrentPage(page);
        setTotalPages(Math.ceil(data.count / 10)); // Assuming 10 blogs per page
      })
      .catch((error) => {
        console.error("Error fetching blogs:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handlePageChange = (pageNumber) => {
    fetchBlogs(pageNumber);
  };

  return (
    <>
    <NavbarComponent />
      <ButtonMenuBlog />
      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <Spinner />
        </div>
      ) : (
        <section
          id="Projects"
          className="h-auto p-10 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-5"
        >
          {blog &&
            blog.map((blog, index) => (
              <div key={index}>
                <BlogAllCard blog={blog} />
              </div>
            ))}
        </section>
      )}

      <div className="flex h-auto justify-center">
        <div className="bg-white p-4 flex items-center flex-wrap">
          <button
            className="px-4 py-2 text-green-600 transition-colors duration-150 bg-white border border-r-0 border-green-600 rounded-l-lg focus:shadow-outline hover:bg-green-100"
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Prev
          </button>
          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (pageNumber) => (
              <button
                key={pageNumber}
                onClick={() => handlePageChange(pageNumber)}
                className="px-4 py-2 text-green-600 transition-colors duration-150 bg-white border border-r-0 border-green-600 focus:shadow-outline"
              >
                {pageNumber}
              </button>
            )
          )}
          <button
            className="px-4 py-2 text-green-600 transition-colors duration-150 bg-white border border-green-600 rounded-r-lg focus:shadow-outline hover:bg-green-100"
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Next
          </button>
        </div>
      </div>

      <div className="h-auto pt-10">
        <FooterCard  />
      </div>
    </>
  );
};

export default Blog;
