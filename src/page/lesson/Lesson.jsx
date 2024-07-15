import React from "react";
import FooterCard from "../../components/footer/FooterCard";
import LessonAllCard from "../../components/lessonAllCard/LessonAllCard";
import ButtonMenuLesson from "../../components/buttonMenuLesson/ButtonMenuLesson";
const Lesson = () => {
  return (
    <div>
      <ButtonMenuLesson />
        <LessonAllCard />
        
      <FooterCard />
    </div>
  );
};

export default Lesson;

