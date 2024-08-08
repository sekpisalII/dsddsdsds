import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchBookById } from "../../services/fetchBookById";
import { Worker } from "@react-pdf-viewer/core";
// Import the main component
import { Viewer } from "@react-pdf-viewer/core";
import book1 from "../../assets/book1.pdf";
// Import the styles
import "@react-pdf-viewer/core/lib/styles/index.css";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

// Import styles
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
const BookDetail = () => {
  const { id } = useParams();
  const bookId = decodeURIComponent(id);
  const [book, setBook] = useState(null);
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
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
        <div>
          {book.categories.map((category) => (
            <div key={category.id}>
              {category.lessons.map((lesson) => (
                <div key={lesson.id}>
                  {lesson.sections.map((section) => (
                    <div key={section.id}>
                      {section.contents.map((content) => (
                        <div key={content.id}>
                          {content.file ? (
                            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
                              <Viewer
                                fileUrl={content.file}
                                plugins={[defaultLayoutPluginInstance]}
                              />
                            </Worker>
                          ) : (
                            <p>No PDF file available for this content.</p>
                          )}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
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
                    src="../src/assets/BookDetail-removebg-preview.png"
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
