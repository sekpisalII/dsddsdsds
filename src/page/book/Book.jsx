import React, { useEffect, useState } from "react";
import BookAllCard from "../../components/bookAllCard/BookAllCard";
import FooterCard from "../../components/footer/FooterCard";
import ButtonMenu from "../../components/button_Menu/ButtonMenu";
import { fetchBooks } from "../../services/fetchBooks";
import Paginatin from "../../components/pagination/Paginatin";

const Book = () => {
  const [books, setBooks] = useState([{}]);
  const onBookFetch = (pageNum, pageSize) => {
    fetchBooks(pageNum, pageSize).then((json) => {
      //handle ui
      console.log(json);
      //upadte State
      setBooks(json.results);
    });
  };
  useEffect(() => {
    onBookFetch(1, 10);
  }, []);

  return (
    <>
      <ButtonMenu />
      <section
        id="Projects"
        className=" p-10  mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 mb-5"
      >
        {books &&
          books.map((book, index) => (
            <section className="gep-0" key={index}>
              <BookAllCard book={book} />
            </section>
          ))}
      </section>
      <Paginatin />
      <FooterCard />
    </>
  );
};

export default Book;
