import React from 'react';
import FooterCard from '../../components/footer/FooterCard';
import LessonAllCard from '../../components/lessonAllCard/LessonAllCard';
import ButtonMenuLesson from '../../components/buttonMenuLesson/ButtonMenuLesson';
const Lesson = () => {
  return (
    <div>
      <ButtonMenuLesson />
      <section
        id="Projects"
        className="max-w-screen-2xl w-full p-10 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-7 mt-10 mb-5"
      >
      <LessonAllCard />
      <LessonAllCard />
      <LessonAllCard />
      <LessonAllCard />
      <LessonAllCard />
      <LessonAllCard />
      <LessonAllCard />
      <LessonAllCard />
    </section>
    <FooterCard />
    </div>

  );
};

export default Lesson;
