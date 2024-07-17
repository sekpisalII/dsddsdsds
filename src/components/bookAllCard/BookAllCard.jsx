import React, { useEffect, useState } from "react";
import "./bookStyle.css";
import { Link } from "react-router-dom";
// import BookDetailPage from "../../page/bookDetailPage/BookDetailPage";
const BookAllCard = ({ book }) => {
  return (
    <>
      <Link to={`/bookDetail/${book.id}`}>
        <div className="flex flex-col bg-gray-100​ font-suwannaphum">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden  w-full">
            <img
              src={
                book.course_thumbnail ||
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcff1fvUI1w0QGFGSbG7mIEPDWwRaRYaqSMA&s"
              }
              alt="image"
              className="w-full h-[250px] object-cover rounded-lg "
            />
            <div className="p-[10px]">
              <h2 className="text-[18px] font-bold text-gray-800 mb-2 book-card-title">
                {book.course_name}
              </h2>
              <p className="text-gray-700 text-[14px] leading-tight mt-3 book-card-title">
                {book.course_description}
              </p>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="flex justify-center">
                    <button className="h-[30px] mt-4 rounded-md bg-gradient-to-r bg-blue-600 p-4 px-3 py-1 text-white text-[14px]">
                      ឥតគិតថ្លៃ
                    </button>
                  </div>
                </div>
                <span className="text-gray-600 mt-4 text-[10px]">
                  create by : {book.created_by}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};
export default BookAllCard;
