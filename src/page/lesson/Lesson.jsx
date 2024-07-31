import React, { useState, useEffect } from "react";
import FooterCard from "../../components/footer/FooterCard";
import LessonAllCard from "../../components/lessonAllCard/LessonAllCard";
import ButtonMenuLesson from "../../components/buttonMenuLesson/ButtonMenuLesson";
import Spinner from "../../components/appSpinner/Spinner";
import NavbarComponent from "../../components/navbar/NavbarComponent";
const categories = [
  "ទាំងអស់",
  "គណិតវិទ្យា",
  "រូបវិទ្យា",
  "ជីវវិទ្យា",
  "គីមីវិទ្យា",
  "ផ្សេងៗទៀត",
];
const Lesson = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  useEffect(() => {
    fetchLessons(1);
  }, []);

  const fetchLessons = (page) => {
    setIsLoading(true);
    fetch(`http://136.228.158.126:50001/api/lessons/?page=${page}`)
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
    fetchLessons(pageNumber);
  };
  const handleFilterClick = (filter) => {
    setActiveFilter(filter);

    // Special handling for "History"
    if (filter === "ទាំងអស់") {
      setFilteredData(data);
    } else if (filter === "គណិតវិទ្យា") {
      const historyKeywords = ["គណិតវិទ្យា", "គណិតវីទ្យា", "គណិត"];

      const filtered = data.filter((item) =>
        historyKeywords.some((keyword) =>
          item.lesson_title.toLowerCase().includes(keyword.toLowerCase())
        )
      );
      setFilteredData(filtered);
    } else if (filter === "រូបវិទ្យា") {
      const historyKeywords = ["រូបវិទ្យា", "រូបវីទ្យា", "រូប"];
      const filtered = data.filter((item) =>
        historyKeywords.some((keyword) =>
          item.lesson_title.toLowerCase().includes(keyword.toLowerCase())
        )
      );
      setFilteredData(filtered);
    } else if (filter === "ជីវវិទ្យា") {
      const historyKeywords = ["ជីវវិទ្យា", "ជីវវីទ្យា", "ជីវ"];
      const filtered = data.filter((item) =>
        historyKeywords.some((keyword) =>
          item.lesson_title.toLowerCase().includes(keyword.toLowerCase())
        )
      );
      setFilteredData(filtered);
    } else if (filter === "គីមីវិទ្យា") {
      const historyKeywords = ["គីមីវីទ្យា", "គីមីវិទ្យា", "គីមី"];
      const filtered = data.filter((item) =>
        historyKeywords.some((keyword) =>
          item.lesson_title.toLowerCase().includes(keyword.toLowerCase())
        )
      );
      setFilteredData(filtered);
    } else {
      const filtered = data.filter((item) =>
        item.lesson_title.toLowerCase().includes(filter.toLowerCase())
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
            filteredData.map((lesson) => (
              <LessonAllCard key={lesson.id} lesson={lesson} />
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

export default Lesson;
