import { useParams } from "react-router-dom";
import BookDetail from "../../components/bookDetail/BookDetail";
import FooterCard from "../../components/footer/FooterCard";

import NavbarComponent from "../../components/navbar/NavbarComponent";

const BookDetailPage = () => {
  return (
    <div>
      <NavbarComponent />
      <BookDetail />
      <FooterCard />
    </div>
  );
};
export default BookDetailPage;
