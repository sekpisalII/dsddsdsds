import React, { useEffect, useState } from "react";
import FooterCard from "../../components/footer/FooterCard";
import LessonAllCard from "../../components/lessonAllCard/LessonAllCard";
import ButtonMenuLesson from "../../components/buttonMenuLesson/ButtonMenuLesson";
import { fetchLesson } from "../../services/fetchLesson";
import Paginatin from "../../components/pagination/Paginatin";
import ButtonMenu from "../../components/button_Menu/ButtonMenu";
const Lesson = (lesson) => {
  const [lessons, setLessons] = useState([{}]);
  const onLessonFetch = (pageNum, pageSize) => {
    fetchLesson(pageNum, pageSize).then((json) => {
      //handle ui
      console.log(json);
      //upadte State
      setLessons(json.results);
    });
  };
  useEffect(() => {
    onLessonFetch(1, 10);
  }, []);
  return (
    <>
      <ButtonMenu />
      <section
        id="Projects"
        className="max-w-screen-2xl p-10 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-5 "
      >
        {lessons &&
          lessons.map((lesson, index) => (
            <section key={index}>
              <LessonAllCard lesson={lesson} />
            </section>
          ))}
      </section>
      <Paginatin />
      <FooterCard />
    </>
  );
};

export default Lesson;
