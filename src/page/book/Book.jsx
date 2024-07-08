import React from 'react';
import BookAllCard from '../../components/bookAllCard/BookAllCard';
import FooterCard from '../../components/footer/FooterCard';
import ButtonMenu from '../../components/button_Menu/ButtonMenu';

const Book = () => {
  return (
    <>
      <ButtonMenu />
      <section
        id="Projects"
        className="max-w-screen-2xl w-full p-10 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-7 mt-10 mb-5"
      >
        <BookAllCard />
        <BookAllCard />
        <BookAllCard />
        <BookAllCard />
        <BookAllCard />
        <BookAllCard />
        <BookAllCard />
        <BookAllCard />
      </section>
      <FooterCard />
    </>
  );
};

export default Book;
