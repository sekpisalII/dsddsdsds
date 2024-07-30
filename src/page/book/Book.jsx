import React, { useEffect, useState } from "react";
import BookAllCard from "../../components/bookAllCard/BookAllCard";
import FooterCard from "../../components/footer/FooterCard";
import ButtonMenu from "../../components/button_Menu/ButtonMenu";
import Spinner from "../../components/appSpinner/Spinner";
import NavbarComponent from "../../components/navbar/NavbarComponent";
const Book = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [book, setBook] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchForums(1);
  }, []);

  const fetchForums = (page) => {
    setIsLoading(true);
    fetch(`http://136.228.158.126:50001/api/courses/?page=${page}`)
      .then((response) => response.json())
      .then((data) => {
        setBook(data.results);
        setCurrentPage(page);
        setTotalPages(Math.ceil(data.count / 10)); // Assuming 10 forums per page
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching forums:", error);
        setIsLoading(false);
      });
  };
  const handlePageChange = (pageNumber) => {
    fetchForums(pageNumber);
  };
  return (
    <>
    <NavbarComponent />
      <ButtonMenu />
      {isLoading ? (
        <Spinner />
      ) : (
        <section
          id="Projects"
          className=" p-10  mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-5 "
        >
          {book &&
            book.map((book, index) => (
              <section key={index}>
                <BookAllCard book={book} />
              </section>
            ))}
        </section>
      )}
      <div className="flex justify-center">
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
                className="px-4 py-2 text-green-600 transition-colors duration-150 bg-white border border-r-0 border-green-600 focus:shadow-outline"
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
