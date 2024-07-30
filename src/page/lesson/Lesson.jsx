import React, { useState, useEffect } from "react";
import FooterCard from "../../components/footer/FooterCard";
import LessonAllCard from "../../components/lessonAllCard/LessonAllCard";
import ButtonMenuLesson from "../../components/buttonMenuLesson/ButtonMenuLesson";
import Spinner from "../../components/appSpinner/Spinner";
import NavbarComponent from "../../components/navbar/NavbarComponent";

const Lesson = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [lesson, setLesson] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    // Fetch the initial set of lessons
    fetchLessons(1);
  }, []);

  const fetchLessons = (page) => {
    setIsLoading(true);
    fetch(`http://136.228.158.126:50001/api/lessons/?page=${page}`)
      .then((response) => response.json())
      .then((data) => {
        setLesson(data.results);
        setCurrentPage(page);
        setTotalPages(Math.ceil(data.count / 10)); // Assuming 10 lessons per page
      })
      .catch((error) => {
        console.error("Error fetching lessons:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handlePageChange = (pageNumber) => {
    fetchLessons(pageNumber);
  };

  return (
    <>
      {/* <ButtonMenuLesson /> */}
      {isLoading ? (
        <Spinner />
      ) : (
        <section
          id="Projects"
          className=" p-10  mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-5"
        >
          {lesson.map((lesson, index) => (
            <div key={index}>
              <LessonAllCard lesson={lesson} />
            </div>
          ))}
        </section>
      )}
      <div className="flex justify-center">
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
      <FooterCard />
    </>
  );
};

export default Lesson;
