import React, { useState, useEffect } from "react";
import FooterCard from "../../components/footer/FooterCard";
import LessonAllCard from "../../components/lessonAllCard/LessonAllCard";
import ButtonMenuLesson from "../../components/buttonMenuLesson/ButtonMenuLesson";
import { fetchLesson } from "../../services/fetchLesson";
import Spinner from "../../components/appSpinner/Spinner";
// import Paginatin from "../../components/pagination/Paginatin";
// import ButtonMenu from "../../components/button_Menu/ButtonMenu";

const Lesson = () => {
  const [lessons, setLessons] = useState([]);
  const [isloading, setIsloading] = useState(true);
  const onLessonFetch = (pageNum, pageSize) => {
    fetchLesson(pageNum, pageSize)
      .then((json) => {
        // Handle UI updates
        console.log(json);
        // Update state with fetched lessons
        setLessons(json.results);
        setIsloading(false);
      })
      .catch((error) => {
        console.error("Error fetching lessons:", error);
        // Handle error state or retry logic if needed
      });
  };

  useEffect(() => {
    onLessonFetch(1, 10); // Fetch lessons on component mount
  }, []);

  return (
    <>
      <ButtonMenuLesson />
      {isloading ? (
        <Spinner />
      ) : (
        <section
          id="Projects"
          className=" p-10 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-5"
        >
          {lessons.map((lesson, index) => (
            <LessonAllCard key={index} lesson={lesson} />
          ))}
        </section>
      )}

      {/* <Paginatin /> */}
      <FooterCard />
    </>
  );
};

export default Lesson;
