import { useEffect, useState } from "react";
import BlogAllCard from "../../components/blogAllCard/BlogAllCard";

import FooterCard from "../../components/footer/FooterCard";
// import Paginatin from "../../components/pagination/PaginationComponent";
import ButtonMenuBlog from "../../components/buttonMenuBlog/ButtonMenuBlog";

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
      <ButtonMenuBlog />
      <section
        id="Projects"
        className=" p-10  mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-5"
      >
        {" "}
        {blog &&
          blog.map((blog, index) => (
            <section key={index}>
              <BlogAllCard blog={blog} />
            </section>
          ))}
      </section>
        {/* <Paginatin /> */}
      <FooterCard />
    </>
  );
};

export default Blog;
