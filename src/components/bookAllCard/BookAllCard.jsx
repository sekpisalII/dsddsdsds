import React from "react";
import { Link } from "react-router-dom";

const BookAllCard = ({ book }) => {
  return (
    <Link to={`/bookDetail/${book.id}`} className="text-blue-600 mt-4 block">
      <div className="bg-white rounded-lg shadow-md overflow-hidden w-full border">
        <img
          src={
            book.course_thumbnail ||
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcff1fvUI1w0QGFGSbG7mIEPDWwRaRYaqSMA&s"
          }
          alt="Course Thumbnail"
          className="w-full h-[250px] object-cover rounded-lg"
        />
        <div className="p-[10px]">
          <h2 className="text-[18px] font-bold text-gray-800 mb-2">
            {book.course_name}
          </h2>
          <p className="text-gray-700 text-[14px] leading-tight mt-3">
            {book.course_description}
          </p>
          <div className="flex justify-between mb-2 items-center ">
            <div className="flex items-center">
              <button
                className="h-[30px] mt-4 rounded-md font-suwannaphum bg-gradient-to-r bg-blue-600 p-4 px-3 py-1 text-white text-[16px]"
                onClick={() => console.log("Show button clicked")}
              >
                បង្ហាញ
              </button>
            </div>
            <span className="text-gray-600 mt-4  font-suwannaphum text-[16px]">
              បានបង្កើតដោយ: {book.created_by}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BookAllCard;
