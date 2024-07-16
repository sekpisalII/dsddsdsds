import React, { useEffect, useState } from "react";
import BookAllCard from "../../components/bookAllCard/BookAllCard";
import FooterCard from "../../components/footer/FooterCard";
import ButtonMenu from "../../components/button_Menu/ButtonMenu";
import { fetchBooks } from "../../services/fetchBooks";

import PaginationComponent from "../../components/pagination/PaginationComponent";
import Spinner from "../../components/appSpinner/Spinner";
import { DiVim } from "react-icons/di";
import { useParams } from "react-router-dom";
const Book = () => {
  const [isloading, setIsloading] = useState(true);
  const [books, setBooks] = useState([{}]);
  const [paging, setPaging] = useState({});
  const onBookFetch = (pageNum, pageSize) => {
    fetchBooks(pageNum, pageSize).then((json) => {
      console.log(json);
      setBooks(json.results);
      setIsloading(false);
    });
  };
  useEffect(() => {
    onBookFetch(1, 10);
  }, []);

  return (
    <>
      <ButtonMenu />

      {isloading ? (
        <div>
          <Spinner />
        </div>
      ) : (
        <section
          id="Projects"
          className=" p-10  mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-5 "
        >
          {books &&
            books.map((book, index) => (
              <section key={index}>
                <BookAllCard book={book} />
              </section>
            ))}
        </section>
      )}

      {/* <div>
        {paging &&
          paging.next.map((count, index) => ( */}
      <PaginationComponent />
      {/* ))}
      </div> */}
      <FooterCard />
    </>
  );
};

export default Book;
