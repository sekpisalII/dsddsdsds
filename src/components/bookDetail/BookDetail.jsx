import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchBookById } from "../../services/fetchBookById";

const BookDetail = () => {
  const { id } = useParams();
  const bookId = decodeURIComponent(id);
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBookData = async () => {
      try {
        const bookData = await fetchBookById(encodeURIComponent(bookId));
        setBook(bookData);
      } catch (error) {
        console.error("Error fetching book data:", error);
      }
    };
    fetchBookData();
  }, []);

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <section className="mt-8 w-[90%] h-auto mx-auto flex flex-col md:flex-row justify-between gap-8 p-8 font-suwannaphum">
      <div className="w-full md:w-[65%]">
        {book.course_thumbnail && (
          <img
            src={book.course_thumbnail}
            alt="image"
            className="w-full h-[500px] object-cover rounded-lg"
          />
        )}
      </div>
      <div className="w-full md:w-[35%] flex flex-col gap-8">
        <div className="w-full p-4 bg-[#F5F5F5]">
          <ul className="space-y-2">
            <li className="flex justify-between">
              <span>ប្រភេទសៀវភៅ</span>
              <span>{book.course_name}</span>
            </li>
            <li className="flex justify-between">
              <span>អ្នកនិពន្ធ</span>
              <span>ក្រសួងអប់រំ យុវជន និងកីឡា</span>
            </li>
            <li className="flex justify-between">
              <span>បោះពម្ភផ្សាយ</span>
              <span>ក្រសួងអប់រំ យុវជន និងកីឡា</span>
            </li>
            <li className="flex justify-between">
              <span>ឆ្នាំបោះពម្ភ</span>
              <span>2024</span>
            </li>
          </ul>
        </div>
        <div className="w-full p-4 bg-[#F5F5F5]">
          <ul>
            <li className="font-bold mb-4">អត្ថបទដែលពាក់ព័ន្ធ</li>
            {[...Array(4)].map((_, index) => (
              <li key={index} className="flex items-center space-x-4">
                <div className="w-[60px] h-[60px]">
                  <img
                    src="https://tono.edu.vn/wp-content/uploads/2023/08/STEM-mBot.png"
                    alt="Related article image"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <span className="block">
                    ការអប់រំវិទ្យាសាស្រ្ត បច្ចេកវិទ្យា វិស្វកម្ម និងគណិតវិទ្យា
                  </span>
                  <div className="text-[14px]">ថ្ងៃបង្ហោះ : 15 April 2024</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BookDetail;
