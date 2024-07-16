import React from "react";
import BookDetail from "../../components/bookDetail/BookDetail";
import FooterCard from "../../components/footer/FooterCard";
import { useParams } from "react-router-dom";
import NavbarComponent from "../../components/navbar/NavbarComponent";

const BookDetailPage = () => {
  const { id } = useParams();
  return (
    <div>
      <NavbarComponent />
      <BookDetail />
      <FooterCard />
    </div>
  );
};
export default BookDetailPage;
