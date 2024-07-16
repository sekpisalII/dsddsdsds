import React from "react";
const LessonAllCard = ({ lesson }) => {
  const isValidUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch (error) {
      return false;
    }
  };

  return (
    // <section className="-mt-2 w-full p-10 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 mb-5">
      <div className="bg-white rounded-lg shadow-md overflow-hidden  w-full">
        <a href="/lessonDetail">
          <img
            src={
              isValidUrl(lesson.lesson_image)
                ? lesson.lesson_image
                : "https://blog.snappymob.com/wp-content/uploads/2020/12/8-Tips-for-Designing-Empty-Placeholder-Pages-Leni-Featured.png"
            }
            alt="Lesson Image"
            className="h-[250px] w-full object-cover"
          />
        </a>
        <div className="p-[10px]">
          <h2 className="text-[18px] font-bold text-gray-800 mb-2 font-suwannaphum">
            {lesson.lesson_title}
          </h2>
          <p className="text-gray-700 text-[17px] leading-tight mt-3 font-suwannaphum line-clamp-2">
            {lesson.lesson_description}
          </p>
          <div className="flex justify-between items-center">
            <div className="flex justify-center">
              <button className="h-[30px] mt-4 rounded-md bg-gradient-to-r from-blue-500 to-blue-700 px-2 py-1 text-white text-[15px] font-suwannaphum">
                ឥតគិតថ្លៃ
              </button>
            </div>
            <span className="text-gray-600 mt-5 font-suwannaphum">
              ចំនួនអ្នកមើល​​ : {lesson.views_count}
            </span>
          </div>
        </div>
      </div>
    // </section>
  );
};

export default LessonAllCard;
